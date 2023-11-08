import { useEffect, useState } from 'react'
import './App.css'


import { calculateTip, calculateTotal } from './calculator';
import { AppContext, AppState, initialState } from './context';


function App() {

  const [state, setState] = useState<AppState>({...initialState});

  useEffect(() => {
    if(!(state.people > 0)) return;

    setState(prev => ({
      ...prev,
      amount: calculateTip(state.bill, state.tip, state.people),
      total: calculateTotal(state.bill, state.tip, state.people)
    }))
  }, [state.bill, state.tip, state.people]);

  return (
    <AppContext.Provider value={{ state, setState }}>
    </AppContext.Provider>
  )
}

export default App;
