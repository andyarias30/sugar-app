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
    }