import { initialState, useAppState } from '../../context';

import styles from './Result.module.css';

const Result = () => {
    const { state, setState } = useAppState();

    return (
        <div className={styles.result}>
            <div className={styles.result_item}>
                <div>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <h2 data-testid="amount">${state.amount}</h2>
            </div>
            <div className={styles.result_item}>
                <div>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <h2 data-testid="total">${state.total}</h2>
            </div>
            <button
              data-testid="reset"
              type="button"
              onClick={() => setState(initialState)}
              className={styles.rest_btn}
            >RESET</button>
        </div>
    );
};
export default Result;
