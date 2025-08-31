import React from 'react'

const App = () => {
  const relatives = ["Ramesh", "Suresh", "Geeta", "Meena"];

  return (
    <div id="main">
      <h1>This is heading</h1>
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
