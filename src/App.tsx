import { useEffect, useState } from 'react'
import './App.css'


import { calculateTip, calculateTotal } from './calculator';
import { AppContext, AppState, initialState } from './context';
import Form from './components/Form';
import Result from './components/Result';


function App() {

  const [state, setState] = useState<AppState>({...initialState});

  useEffect(() => {
    if(!(Number(state.people) > 0)) return;

    setState(prev => ({
      ...prev,
      amount: calculateTip(state.bill, state.tip, state.people),
      total: calculateTotal(state.bill, state.tip, state.people)
    }))
  }, [state.bill, state.tip, state.people]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Form />
      <Result />
    </AppContext.Provider>
  )
}

export default App;
