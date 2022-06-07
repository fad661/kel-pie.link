import type { NextPage } from 'next'
import { ComponentProps } from 'react'
import { COLORS } from '../components/ECF/index.style'
import { MoneyBack } from '../components/ECF/Money/Back'
import MoneyFront from '../components/ECF/Money/Front/MoneyFront'
import ProjectFront, { POINT_TYPES } from '../components/ECF/Project/Front/ProjectFront'
import ProjectBack from '../components/ECF/Project/Back/ProjectBack'
import { PrintableList } from '../components/PrintableList'
import { css, Global } from '@emotion/react'

const cardList = [
  {
    color: COLORS.RED,
    amount: 1
  },
  {
    color: COLORS.BLUE,
    amount: 2
  },
  {
    color: COLORS.GREEN,
    amount: 3
  },
  {
    color: COLORS.RED,
    amount: 1
  },
  {
    color: COLORS.BLUE,
    amount: 2
  },
  {
    color: COLORS.GREEN,
    amount: 3
  },
  {
    color: COLORS.RED,
    amount: 1
  },
  {
    color: COLORS.BLUE,
    amount: 2
  },
  {
    color: COLORS.GREEN,
    amount: 3
  },
  {
    color: COLORS.RED,
    amount: 1
  },
  {
    color: COLORS.BLUE,
    amount: 2
  },
  {
    color: COLORS.GREEN,
    amount: 3
  },
  {
    color: COLORS.RED,
    amount: 1
  },
  {
    color: COLORS.BLUE,
    amount: 2
  },
  {
    color: COLORS.GREEN,
    amount: 3
  },
  {
    color: COLORS.RED,
    amount: 1
  },
  {
    color: COLORS.BLUE,
    amount: 2
  },
  {
    color: COLORS.GREEN,
    amount: 3
  }
];

const projectList = [
  {
    leaderPoint: 1,
    turn: 4,
    slots: [
      {
        difficluty: 1,
        pointType: POINT_TYPES.BOND,
        costs: [
          {
            color: COLORS.RED,
            amount: 2
          },
          {
            color: COLORS.BLUE,
            amount: 2
          },
          {
            amount: 1
          }
        ]
      }
    ]
  },
  {
    leaderPoint: 2,
    turn: 3,
    slots: [
      {
        difficluty: 1,
        pointType: POINT_TYPES.FAME,
        costs: [
          {
            color: COLORS.RED,
            amount: 2
          },
          {
            color: COLORS.BLUE,
            amount: 2
          },
          {
            amount: 1
          }
        ]
      },
      {
        difficluty: 1,
        pointType: POINT_TYPES.BOND,
        costs: [
          {
            color: COLORS.RED,
            amount: 2
          },
          {
            color: COLORS.BLUE,
            amount: 2
          },
          {
            amount: 1
          }
        ]
      },
      {
        difficluty: 1,
        pointType: POINT_TYPES.FAME,
        costs: [
          {
            color: COLORS.RED,
            amount: 4
          },
          {
            color: COLORS.GREEN,
            amount: 2
          },
          {
            amount: 4
          }
        ]
      }
    ]
  }
];

const globalStyle = css`
  body {
    margin: 0;
  }
  @page {
    margin: 10px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <PrintableList>
        { cardList.map((card) => (
          <MoneyFront color={card.color} amount={card.amount} />
        ))}
      </PrintableList>
      <PrintableList reverse>
        { cardList.map((card) => (
          <MoneyBack color={card.color} />
        ))}
      </PrintableList>
      <PrintableList>
        { projectList.map((project) => (
          <ProjectFront leaderPoint={project.leaderPoint} slots={project.slots} />
        ))}
      </PrintableList>
      <PrintableList reverse>
        { projectList.map((project) => (
          <ProjectBack turn={project.turn} />
        ))}
      </PrintableList>
    </>
  )
}

export default Home
