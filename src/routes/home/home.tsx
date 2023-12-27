import { Link } from 'react-router-dom';
import { Card } from '../../components/card/card';
import styles from './home.module.scss';

const cardData = [
    {id: 1, title: 'card 1', categories: [{id: 1, title: 'cat1', sum: 200}]},
    {id: 2, title: 'card 2', categories: [{id: 1, title: 'cat1', sum: 200}, {id: 2, title: 'cat2', sum: 300}]},
    {id: 3, title: 'card 3', categories: [{id: 1, title: 'cat1', sum: 200}, {id: 2, title: 'cat2', sum: 300}]},
    {id: 4, title: 'card 4', categories: [{id: 1, title: 'cat1', sum: 200}, {id: 2, title: 'cat2', sum: 300}, {id: 3, title: 'cat3', sum: 400}]},
    {id: 5, title: 'card 5', categories: [{id: 1, title: 'cat1', sum: 200}, {id: 2, title: 'cat2', sum: 300}, {id: 3, title: 'cat3', sum: 400}]},
    {id: 6, title: 'card 6', categories: [{id: 1, title: 'cat1', sum: 200}, {id: 2, title: 'cat2', sum: 300}, {id: 3, title: 'cat3', sum: 400}, {id: 4, title: 'cat4', sum: 500}]},
    {id: 7, title: 'card 7', categories: [{id: 1, title: 'cat1', sum: 200}]},
    {id: 8, title: 'card 8', categories: [{id: 1, title: 'cat1', sum: 200}, {id: 2, title: 'cat2', sum: 300}, {id: 3, title: 'cat3', sum: 400}]},
]

export const Home = () => {
    return <div className={styles.home}>
        <header className={styles.header}>
            <nav className={styles.navList}>
                <Link to='/'>Home</Link>
                <Link to='/group'>Group</Link>
                <Link to='/localStorage'>localStorage</Link>
            </nav>
            <div>dropdown</div>
        </header>
        <main className={styles.main}>
            {cardData.map((card) => {
                return (
                    <Card key={card.id} card={card} />
                )
            })}
        </main>
    </div>
}