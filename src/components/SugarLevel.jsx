import { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddSugarModal from "./AddSugarModal";
export default function SugarLevels() {

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
    window.location.reload(false) // this function is for refresh the page 
  }
  const handleShow = () => setShow(true)

  const [sugarLevels, setSugarLervels] = useState([])
  useEffect(() => {
    console.log('called funcion')
    fetch(`${process.env.REACT_APP_API_URL}/mysugarLevels `)
      .then((res) => res.json())
      .then((cleanData) => setSugarLervels(cleanData))
      .catch((err) => console.error(err))
  }, [])



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
        {sugarLevels.map(level => {
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

      <Button variant="primary" onClick={handleShow}>Add</Button>


      {
        sugarLevels && sugarLevels.map((singlePosts) => {
          return (


            <AddSugarModal show={show} handleClose={handleClose} />

          )
        })
      }


    </Table>



  );
}