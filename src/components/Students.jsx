import React from 'react'
import Score from './Score'

function Students({studentsObj}) {
   return (
    <div>
    <h2> student name : {studentsObj.name}</h2>
    <h2>student bio : {studentsObj.bio}</h2>
    <div> {studentsObj.scores.map((score, index)=>(
      <Score scoreObj={score} key={index} />
    ))}
    </div>
    </div>
    )
   }

export default Students