import { PiggyBank } from 'src/shared/assets';
import styles from './AppBar.module.scss';

export const AppBar = () => {
  
  return (
    <div className={styles.appBar}>
       <PiggyBank />
       <h1>Piggy Bank</h1>
    </div>
  );
}