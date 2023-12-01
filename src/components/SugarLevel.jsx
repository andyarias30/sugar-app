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
    <Table responsive striped bordered  >
      <thead >
        <tr>
          <th class="p-3 mb-2 bg-danger text-white rounded-4 ">ID</th>
          <th class="p-3 mb-2 bg-danger text-white rounded-4 ">User Name</th>
          <th class="p-3 mb-2 bg-danger text-white rounded-4 ">Before Breakfast</th>
          <th class="p-3 mb-2 bg-danger text-white rounded-4 ">Before Lunch</th>
          <th class="p-3 mb-2 bg-danger text-white rounded-4 ">Before Dinner</th>
          <th class="p-3 mb-2 bg-danger text-white rounded-4 ">Other</th>

        </tr>
      </thead>
      <tbody>
        {sugarLevels.map(level => {
          return (<tr>
            <td class="rounded-4  ">{level._id}</td>
            <td class="rounded-4 ">{level.userName}</td>
            <td class="rounded-4 ">🩸{level.beforeBreakfast}</td>
            <td class="rounded-4 ">🩸{level.beforeLunch}</td>
            <td class="rounded-4 ">🩸{level.beforeDinner}</td>
            <td class="rounded-4 ">🩸{level.other}</td>

          </tr>)
        })}
      </tbody>

      <Button variant="danger" onClick={handleShow}>Add</Button>
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