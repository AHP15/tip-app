import { initialState, useAppState } from '../../context';

const Result = () => {
    const { state, setState } = useAppState();

    return (
        <div>
            <div data-testid="amount">{state.amount}</div>
            <div data-testid="total">{state.total}</div>
            <button
              data-testid="reset" type="button" onClick={() => setState(initialState)}>RESET</button>
        </div>
    );
};
export default Result;
