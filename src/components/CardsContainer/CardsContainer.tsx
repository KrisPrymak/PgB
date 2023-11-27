import { FC } from 'react';
import cn from 'classnames';

import { CardsContainerProps } from './types';

import styles from './CardsContainer.module.scss';
import { FormattedMessage } from 'react-intl';

type CardData = {
  id: number;
  text: string;
}

const cardsData: CardData[] = [
  { id: 1, text: 'First card'},
  { id: 2, text: "Second card" },
  { id: 3, text: "Third card" },
  { id: 4, text: "Fourth card" },
  { id: 5, text: "Fifth card" },
  { id: 6, text: "Sixth card" },
  { id: 7, text: "Seventh card" },
  { id: 8, text: "Eighth card" },
  { id: 9, text: "Ninth card" },
  { id: 10, text: "Tenth card" },
  { id: 11, text: "Eleventh card" },
  { id: 12, text: "Twelfth card" },
  { id: 13, text: "Thirteenth card" },
  { id: 14, text: "Fourteenth card" },
  // { id: 15, text: "Fifteenth card" },
  // { id: 16, text: "Sixteenth card" },
  // { id: 17, text: "Seventeenth card" },
  // { id: 18, text: "Eighteenth card" },
  // { id: 19, text: "Nineteenth card" },
  // { id: 20, text: "Twentieth card" },
  // { id: 21, text: "Twenty-first card" },
  // { id: 22, text: "Twenty-second card" },
  // { id: 23, text: "Twenty-third card" },
  // { id: 24, text: "Twenty-fourth card" },
  // { id: 25, text: "Twenty-fifth card" },
  // { id: 26, text: "Twenty-sixth card" },
  // { id: 27, text: "Twenty-seventh card" },
  // { id: 28, text: "Twenty-eighth card" },
  // { id: 29, text: "Twenty-ninth card" },
  // { id: 30, text: "Thirtieth card" },
  // { id: 31, text: "Thirty-first card" },
  // { id: 32, text: "Thirty-second card" },
  // { id: 33, text: "Thirty-third card" },
  // { id: 34, text: "Thirty-fourth card" },
  // { id: 35, text: "Thirty-fifth card" },
  // { id: 36, text: "Thirty-sixth card" },
  // { id: 37, text: "Thirty-seventh card" },
  // { id: 38, text: "Thirty-eighth card" },
  // { id: 39, text: "Thirty-ninth card" },
  // { id: 40, text: "Fortieth card" },
  // { id: 41, text: "Forty-first card" },
];

function duplicateArray(arr: any, times: any) {
  return Array.from({ length: times }, () => [...arr]).flat();
}

const getWidthArray = (cardsData: CardData[]) => {
  const rest = cardsData.length % 6;
  let result = [];

  const templateArray = ['100', '30', '60', '30', '30', '30']
  const howMuch = Math.floor(cardsData.length / 6);
  result = duplicateArray(templateArray, howMuch);

  if (rest === 5) result.push('60', '30', '30', '30', '30');

  if (rest === 4) result.push('100', '30', '30', '30');

  if (rest === 3) result.push('100', '30', '60');

  if (rest === 2) result.push('60', '30');

  if (rest === 1) result.push('100');

  return result;
}

export const CardsContainer: FC<CardsContainerProps> = () => {
  return (
    <div>
      <h1>
        <FormattedMessage id='myMesage' defaultMessage={'CardsContainer'} />
      </h1>
      <div className={styles.container}>
        {cardsData.map((item, index) => {
          const widthArray = getWidthArray(cardsData);
          return <div className={cn(styles.card, styles[`cardWidth${widthArray[index]}`])} key={item.id}>{item.text}</div>;
        })}
      </div>
    </div>
  );
};



const widths: Record<number, Array<string>> = {
  1: ['100'],
  2: ['30', '60'],
  3: ['30', '30', '30'],
  4: ['30', '30', '30', '100'],
  5: ['30', '30', '30', '60', '30'],
  6: ['30', '30', '30', '60', '30', '100'],
  7: ['100', '30', '30', '30', '60', '30', '100'],
  8: ['30', '30', '30', '60', '30', '100', '30', '60'],
  9: ['30', '30', '30', '60', '30', '100', '30', '60', '100'],
  10: ['100', '30', '30', '30', '60', '30', '100', '30', '60', '100'],
  11: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30'],
  12: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100'],
  13: ['100', '30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100'],
  14: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60'],
  15: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100'],
  16: ['100', '30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100'],
  17: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100', '30', '60'],
  18: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100', '30', '60', '100'],
  19: ['100', '30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100', '30', '60', '100'],
  20: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100', '30', '60', '100', '30', '60'],
  21: ['30', '30', '30', '60', '30', '100', '30', '60', '100', '60', '30', '100', '30', '60', '100', '30', '60', '100', '30', '60', '100'],
};