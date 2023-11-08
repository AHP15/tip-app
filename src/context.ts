import { createContext, useContext } from 'react';

export type AppState = {
    bill: number,
    tip: number,
    people: number,
    amount: number,
    total: number,
};

export const initialState: AppState = {
    bill: 0,
    tip: 0,
    people: 0,
    amount: 0,
    total: 0,
};

type ContextType = {
    state: AppState,
    setState: React.Dispatch<React.SetStateAction<AppState>>,
};

export const AppContext = createContext<ContextType>({ state: initialState, setState: () => { } });

export function useAppState() {
    return useContext(AppContext);
}