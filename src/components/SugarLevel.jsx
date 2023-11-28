import { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
export default function SugarLevels(){
    const [sugarLevels, setSugarLervels] = useState([])
    useEffect(() => {
        console.log('called funcion')
        fetch(`http://localhost:3005/mysugarLevels`)
        .then(res => res.json())
        .then(data => setSugarLervels(data))
        .catch(err => console.error(err))
    },[]) 
        
    const handleForSubmit = (evt) => {
      evt.preventDefault()
      const formData = {}
      formData.userName = evt.target.userName.value
      formData.beforeBreakfast = evt.target.beforeBreakfast.value
      formData.beforeLunch = evt.target.beforeLunch.value
      formData.beforeDinner = evt.target.beforeDinner.value
      formData.other = evt.target.other.value
      console.log(formData)


      evt.target.userName = ''
      evt.target.beforeBreakfast = ''
      evt.target.beforeLunch = ''
      evt.target.beforeDinner = ''
      evt.target.other = ''

      fetch('http://localhost:3005/mysugarLevels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      .then(res => res.json())
      .then(cleanData => setSugarLervels(cleanData))
      .catch(err => console.error(err))
    }

    return (
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Before Breakfast</th>
              <th>Before Lunch</th>
              <th>Before Dinner</th>
              <th>Other</th>
                 
            </tr>
          </thead>
          <tbody>
                {sugarLevels.map(level =>{
                  return (<tr>
                    <td>{level._id}</td>
                      <td >{level.userName}</td>
                      <td >{level.beforeBreakfast}</td>
                      <td >{level.beforeLunch}</td>
                      <td >{level.beforeDinner}</td>
                      <td >{level.other}</td>
                    
                  </tr>)
                })}
          </tbody>
          <>
          <form action='' onSubmit={(e) => handleForSubmit(e)}>
                <label htmlFor='userName'>
                  <input type="text" name="userName" id="" />

                </label>
                <label htmlFor="beforeBreakfast">
                  <input type="number" name='beforeBreakfast' />

                </label>
                <label htmlFor='beforeLunch'>
                <input type="number" name='beforeLunch' />
            
                </label>
                <label htmlFor="beforeDinner">
                  <input type="number" name="beforeDinner"  />

                </label>
                <label htmlFor="other">
                  <input type="number" name="other" />
                </label>
          </form>
          </>
          
          
        </Table>
        
      );
    }