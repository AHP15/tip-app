import { initialState, useAppState } from '../../context';

const Result = () => {
    const { state, setState } = useAppState();

    return (
        <div>
            <div>{state.amount}</div>
            <div>{state.total}</div>
            <button type="button" onClick={() => setState(initialState)}>RESET</button>
        </div>
    );
};
export default Result;
