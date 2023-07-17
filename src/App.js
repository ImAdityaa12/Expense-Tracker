import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import Income from './Components/Income'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import './App.css'
const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction /> 
      </div>
    </GlobalProvider>
  )
}

export default App