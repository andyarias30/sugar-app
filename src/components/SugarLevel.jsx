import { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';


export default function SugarLevels(){
    const [sugarLevels, setSugarLervels] = useState([])
    useEffect(() => {
        console.log('called funcion')
        fetch(`http://localhost:3005/mysugarLevels`)
        .then(res => res.json())
        .then(data => setSugarLervels(data))
        .catch(err => console.error(err))
    },[]) 
        
    return(
        <div>
            {sugarLevels.map(level => {
                return <div key={level._id}>{level.userName}</div>
            })
            }


            
            {/* "_id": "6564ee66672aa65e15f1cdd1",
        "userName": "Andy",
        "beforeBreakfast": 90,
        "beforeLunch": 98,
        "beforeDinner": 98 */}
        </div>
    )
    
}


  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );





