import { createContext, useContext } from 'react';

export type AppState = {
    bill: number | string,
    tip: number | string,
    people: number | string,
    amount: number | string,
    total: number | string,
};

export const initialState: AppState = {
    bill: '',
    tip: '',
    people: '',
    amount: (0).toFixed(2),
    total: (0).toFixed(2),
};

type ContextType = {
    state: AppState,
    setState: React.Dispatch<React.SetStateAction<AppState>>,
};

export const AppContext = createContext<ContextType>({ state: initialState, setState: () => { } });

export function useAppState() {
    return useContext(AppContext);
}