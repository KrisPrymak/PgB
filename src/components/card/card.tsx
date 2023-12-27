import { FC } from 'react';
import styles from './card.module.scss';

type Category = {
    id: number;
    title: string;
    sum: number;
}

type CardType = {
    id: number;
    title: string;
    categories: Category[]
}

type CardProps = {
    card: CardType;
}

export const Card: FC<CardProps> = ({ card }) => {
    return (
        <div className={styles.card}>
            <h2>{card.title}</h2>
            <ul className={styles.list}>
                {card.categories.map(cat => {
                    return (
                        <li className={styles.listItem} key={cat.id}>
                            <span>{cat.title}</span>
                            <span>{cat.sum}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}