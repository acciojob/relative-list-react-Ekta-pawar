import React from 'react'

const App = () => {
  const relatives = ["Ramesh", "Suresh", "Geeta", "Meena"];

  return (
    <div id="main">
        <ol key='relativeList'>
          {relatives.map((name,index)=>{
        <li key={`relativeListItem${index + 1}`}>
          {name}
        </li>

          })}
          </ol>       
               
    </div>
  )
}

export default App
