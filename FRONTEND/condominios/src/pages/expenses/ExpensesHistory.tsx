import React from 'react'
import Expenses from './Expenses'

export default function ExpensesHistory() {
    return (
        <div>
            <Expenses />
            <div className='bg-white rounded-md mt-6 p-6 '>
                <h2 className='font-semibold text-2xl'>Historial de expensas</h2></div>
        </div>
    )
}
