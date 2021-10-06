import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Search = () => {
    const [term,setTerm] = useState('')

    useEffect(() => {
       const search = async () => {
           await axios.get('en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch')
       }

       search()
    },[term])
    return (
        <>
            <div className='ui form'>
                 <div className='field'>
                     <label>Enter Search Term</label>
                     <input 
                       className='input'
                       value={term}
                       onChange={(e) => setTerm(e.target.value)}

                     />

                 </div>
            </div>
        </>
    )
}

export default Search
