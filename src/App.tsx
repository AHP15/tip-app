import { useEffect, useState } from 'react'
import './App.css'

import { calculateTip, calculateTotal } from './calculator';
import { AppContext, AppState, initialState } from './context';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [state, setState] = useState<AppState>({ ...initialState });

  useEffect(() => {
    if (!(Number(state.people) > 0)) return;

    setState(prev => ({
      ...prev,
      amount: calculateTip(state.bill, state.tip, state.people),
      total: calculateTotal(state.bill, state.tip, state.people)
    }))
  }, [state.bill, state.tip, state.people]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <div className='flex flex-col items-center min-h-screen bg-teal-500'>
        <h1 className='text-4xl text-white font-bold my-8'>SPLITTER</h1>
        <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
          <Form />
          <Result />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App;
