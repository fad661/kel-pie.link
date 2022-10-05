import type { GetStaticPropsContext, NextPage } from 'next'
import { ComponentProps, useCallback, useMemo, useState } from 'react'
import hash from 'object-hash'
import { COLORS } from '../components/ECF/index.style'
import { MoneyBack } from '../components/ECF/Money/Back'
import MoneyFront from '../components/ECF/Money/Front/MoneyFront'
import ProjectFront, { Cost, Slot } from '../components/ECF/Project/Front/ProjectFront'
import ProjectBack from '../components/ECF/Project/Back/ProjectBack'
import { PrintableList } from '../components/PrintableList'
import { css, Global } from '@emotion/react'
import Controller, { BillRow, ProjectRow} from '../components/Controller/Controller'
import { CARD_TYPE, SIDE_TYPE, usePrintMode } from '../contexts/PrintMode'
import { ManaFront } from '../components/ECF/Mana/Front'


const parseColor = (color: string) => {
  switch(color) {
    case 'red':
    case 'r':
      return COLORS.RED;
    case 'blue':
    case 'b':
      return COLORS.BLUE;
    case 'green':
    case 'g':
      return COLORS.GREEN;
    default:
      return COLORS.NONE;
  }
};

const parseSlots = (project: ProjectRow): Project['slots'] => {
  const slot1 = parseSlot(project['slot1_type'], project['slot1_dif'], project['slot1_costs']);
  const slot2 = parseSlot(project['slot2_type'], project['slot2_dif'], project['slot2_costs']);
  const slot3 = parseSlot(project['slot3_type'], project['slot3_dif'], project['slot3_costs']);
  let results = [] as Slot[];
  if(slot1) results.push(slot1);
  if(slot2) results.push(slot2);
  if(slot3) results.push(slot3);
  return results;
};

const parseSlot = (type: string, dif: string, costs: string): Slot | null =>  {
  if(!type || !dif || !costs) return null;
  return {
    difficluty: parseInt(dif),
    pointType: type,
    costs: parseCosts(costs) ,
  } as Slot;
}

const parseCosts = (costs: string): Cost[] => {
  return ['r', 'g', 'b', 'n'].map((target) => {
    return {
      color: parseColor(target),
      amount: countColor(costs, target),
    }
  })
}

const countColor = (costs: string, target: string): number => {
  const chars = costs.split('');
  return chars.filter(char => char === target).length; 
};

const globalStyle = css`
  body {
    margin: 0;
    min-height: 100vh;
  }
  img {
    width: 100%;
  }
  @page {
    margin: 10px;
  }
`;

const sliceByNumber = (arr: any[], num: number) => {
  const length = Math.ceil(arr.length / num)
  return new Array(length).fill(0).map((_, i) =>
  arr.slice(i * num, (i + 1) * num)
  )
}

const maxPageNum = 36;

type Bill = ComponentProps<typeof MoneyFront> & ComponentProps<typeof MoneyBack>;
type Project = ComponentProps<typeof ProjectFront> & ComponentProps<typeof ProjectBack>;

const Home: NextPage = () => {
  const { sideType, loadCardType} = usePrintMode();

  const [bills, setBills] = useState<Bill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const onParseMoneyCallback = useCallback((data: BillRow[]) => {
    const bills = data.map<Bill>((bill) => {
      return {
        color: parseColor(bill.color),
        amount: parseInt(bill.amount)
      };
    });
    setBills(bills);
  }, []);

  const onParseProjectCallback = useCallback((data: ProjectRow[]) => {
    const projects = data.map<Project>((project: ProjectRow) => {
      return {
        leaderPoint: parseInt(project.leaderPoint),
        turn: parseInt(project.turn),
        projectType: project.type as Project['projectType'],
        slots: parseSlots(project),
      }
    });
    setProjects(projects);
  }, []);

  const billsBlocks = useMemo(() => {
    return sliceByNumber(bills, maxPageNum);
  }, [bills]);

  const projectsBlocks = useMemo(() => {
    return sliceByNumber(projects, maxPageNum);
  }, [projects]);

  return (
    <>
      <PrintableList>
        <ManaFront mana={4} abilityType='アタック' marketAbility='価値2の場所に価値が下がるチップをおく・チップは次のラウンドに取り除く' additionalAbility='マーケット内の街カードを1枚指定する。その街カードは次のラウンドまであなたしか買うことが出来ない。' />
        <ManaFront mana={5} abilityType='購入' marketAbility='価値2の場所に価値が下がるチップをおく・チップは次のラウンドに取り除く' additionalAbility='マーケット内の街カードを1枚指定する。その街カードは次のラウンドまであなたしか買うことが出来ない。' />
        <ManaFront mana={1} abilityType='勝利点' marketAbility='価値2の場所に価値が下がるチップをおく・チップは次のラウンドに取り除く' additionalAbility='マーケット内の街カードを1枚指定する。その街カードは次のラウンドまであなたしか買うことが出来ない。' />
        <ManaFront mana={4} abilityType='その他' marketAbility='価値2の場所に価値が下がるチップをおく・チップは次のラウンドに取り除く' additionalAbility='マーケット内の街カードを1枚指定する。その街カードは次のラウンドまであなたしか買うことが出来ない。' />
      </PrintableList>
      <Global styles={globalStyle} />
      {billsBlocks.map((billBlock) => (
        <>
          <PrintableList title="紙幣: 表">
            { billBlock.map((card) => (
              <MoneyFront key={`front-${hash(card)}`} color={card.color} amount={card.amount} />
            ))}
          </PrintableList>
          {sideType === SIDE_TYPE.BOTH ? (
            <PrintableList title="紙幣: 裏" reverse>
              { billBlock.map((card) => (
                <MoneyBack key={`back-${hash(card)}`} color={card.color} />
              ))}
            </PrintableList>
          ) : null}
        </>
      ))}
      {projectsBlocks.map((projectBlock) => (
        <>
          <PrintableList title="プロジェクト: 表">
            { projectBlock.map((project) => (
              <ProjectFront key={`front-${hash(project)}`} leaderPoint={project.leaderPoint} slots={project.slots} />
            ))}
          </PrintableList>
          {sideType === SIDE_TYPE.BOTH ? (
            <PrintableList title="プロジェクト: 裏" reverse>
              { projectBlock.map((project) => (
                <ProjectBack key={`back-${hash(project)}`} turn={project.turn} />
              ))}
            </PrintableList>
          ) : null}
        </>
      ))}
      <Controller
        onParseMoneyCallback={onParseMoneyCallback}
        onParseProjectCallback={onParseProjectCallback}
      />
    </>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {}
  };
}

export default Home;
