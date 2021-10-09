import React,{useState} from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import Translate from './components/Translate'


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

    const options = [
        {
            label:'The Color is Red',
            value:'red'
        },
        {
            label:'The Color is Green',
            value:'green'
        },
        {
            label:'The color is blue',
            value:'blue'
        }
    ]

    export default () => {
       

        return (
           
          <>
          <Translate/>
          </>
        )
    
    }

   


