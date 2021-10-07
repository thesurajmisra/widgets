import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Search = () => {
    const [term,setTerm] = useState('')
    const [results,setResults] = useState([])

    useEffect(() => {
       const Search = async () => {
       const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
               params : {
                   action:'query',
                   list:'search',
                   origin:'*',
                   format:'json',
                   srsearch:term
               }
           })
            setResults(data.query.search)
       }
       Search()
 },[term]) 

   const renderedResults = results.map((result) => {
       return(
           <div className = 'item'>
               <div className = 'right floated content'>
                   <a className='ui button'>Go</a>
               </div>
               <div className = 'content'>
                   <div className = 'header'>
                          {result.title}
                   </div>
                   <span dangerouslySetInnerHTML={{__html:result.snippet}} ></span>
                   
               </div>
           </div>
       )
   })
 
 //&format=json&srsearch
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
            <div className = 'ui celled list'>{renderedResults}</div>
        </>
    )
}

export default Search
