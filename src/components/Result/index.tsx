import { initialState, useAppState } from '../../context';

const Result = () => {
    const { state, setState } = useAppState();

    return (
        <div className="bg-teal-800 text-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h4 className="text-sm font-semibold">Tip Amount</h4>
                    <p className="text-xs">/ person</p>
                </div>
                <h2 className="text-2xl font-bold" data-testid="amount">${state.amount}</h2>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h4 className="text-sm font-semibold">Tip Amount</h4>
                    <p className="text-xs">/ person</p>
                </div>
                <h2 className="text-2xl font-bold" data-testid="total">${state.total}</h2>
            </div>
            <button
                data-testid="reset"
                type="button"
                onClick={() => setState(initialState)}
                className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-400"
            >RESET</button>
        </div>
    );
};
export default Result;

