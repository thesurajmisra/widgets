import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const App = () => {

    const items = [
        {
            title:'What is React?',
            content:'React is a frontend javascript framework'
        },
        {
            title:'Why use React ?',
            content:'React is a favorite JS framework among the engineers'
        },
        {
            title:'How you use React ?',
            content:'We use React by creating components'
        }
    ]

    return (
        <div>
           <Search/>
        </div>
    )
}

export default App
