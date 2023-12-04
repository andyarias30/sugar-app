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
    <Table  striped   >
      <thead >
        <tr>
          <th class="p-3 mb-2 bg-danger text-white  ">ID</th>
          <th class="p-3 mb-2 bg-danger text-white  ">User Name</th>
          <th class="p-3 mb-2 bg-danger text-white  ">Before Breakfast</th>
          <th class="p-3 mb-2 bg-danger text-white  ">Before Lunch</th>
          <th class="p-3 mb-2 bg-danger text-white  ">Before Dinner</th>
          <th class="p-3 mb-2 bg-danger text-white  ">Other</th>
          <th class="p-3 mb-2 bg-danger text-white  ">Date</th>

        </tr>
      </thead>
      <tbody>
        {sugarLevels.map(level => {
          return (<tr>
            <td class="rounded-4  ">{level._id}</td>
            <td class="rounded-4 ">{level.userName}</td>
            <td class="rounded-4 "><input type="number" id="disabledTextInput" defaultValue={level.beforeBreakfast} class="form-control"></input></td>
            <td class="rounded-4 "><input type="number" id="disabledTextInput" defaultValue={level.beforeLunch} class="form-control"></input></td>
            <td class="rounded-4 "><input type="number" id="disabledTextInput" defaultValue={level.beforeDinner} class="form-control"></input></td>
            <td class="rounded-4 "><input type="number" id="disabledTextInput" defaultValue={level.other} class="form-control"></input></td>
            <td class="rounded-4 ">{level.currentDate}</td>
            <td class="rounded-4"><Button variant="danger" onClick={handleClose} >Save</Button></td>

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