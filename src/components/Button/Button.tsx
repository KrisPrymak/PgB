import styles from './Button.module.scss';

export const Button = () => {
    return (
        <button className={styles.button}>
            Кнопка с очень большим текстом
        </button>
    )
}