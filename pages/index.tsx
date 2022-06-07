import type { NextPage } from 'next'
import { ComponentProps, useCallback, useState } from 'react'
import { COLORS } from '../components/ECF/index.style'
import { MoneyBack } from '../components/ECF/Money/Back'
import MoneyFront from '../components/ECF/Money/Front/MoneyFront'
import ProjectFront, { Cost, Slot } from '../components/ECF/Project/Front/ProjectFront'
import ProjectBack from '../components/ECF/Project/Back/ProjectBack'
import { PrintableList } from '../components/PrintableList'
import { css, Global } from '@emotion/react'
import Controller, { BillRow, ProjectRow } from '../components/Controller/Controller'


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
  }
  @page {
    margin: 10px;
  }
`;

type Bill = ComponentProps<typeof MoneyFront> & ComponentProps<typeof MoneyBack>;
type Project = ComponentProps<typeof ProjectFront> & ComponentProps<typeof ProjectBack>;

const Home: NextPage = () => {

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

  return (
    <>
      <Global styles={globalStyle} />
      <PrintableList title="紙幣: 表">
        { bills.map((card) => (
          <MoneyFront color={card.color} amount={card.amount} />
        ))}
      </PrintableList>
      <PrintableList title="紙幣: 裏" reverse>
        { bills.map((card) => (
          <MoneyBack color={card.color} />
        ))}
      </PrintableList>
      <PrintableList title="プロジェクト: 表">
        { projects.map((project) => (
          <ProjectFront leaderPoint={project.leaderPoint} slots={project.slots} />
        ))}
      </PrintableList>
      <PrintableList title="プロジェクト: 裏" reverse>
        { projects.map((project) => (
          <ProjectBack turn={project.turn} />
        ))}
      </PrintableList>
      <Controller onParseMoneyCallback={onParseMoneyCallback} onParseProjectCallback={onParseProjectCallback} />
    </>
  )
}

export default Home
