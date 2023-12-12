import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AddSugarModal from "./AddSugarModal";



export default function SugarLevels() {

  const [show, setShow] = useState(false) // manage state in functioial components 

  const handleClose = () => {
    setShow(false) // should be closed.
    window.location.reload(false) // this function is for refresh the page 
  }
  const handleShow = () => setShow(true) // Show the Modal

  const [sugarLevels, setSugarLervels] = useState([]) 
  useEffect(() => { // use to manage side effect (fetching data )
    console.log('called funcion')
    fetch(`${process.env.REACT_APP_API_URL}/mysugarLevels `)
      .then((res) => res.json())
      .then((cleanData) => setSugarLervels(cleanData))
      .catch((err) => console.error(err))
  }, [])


  const handleForSave = (e) => {
    e.preventDefault()

    const fromData = {
      beforeBreakfast: e.target.beforeBreakfast.value,
      beforeLunch: e.target.beforeLunch.value,
      beforeDinner: e.target.beforeDinner.value,
      other: e.target.other.value
    }
    console.log('fromData in sugarLevels-->', fromData)

    fetch(`${process.env.REACT_APP_API_URL}/mysugarLevels`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fromData)
    })
      .then(res => res.json())
      .then(cleanData => setSugarLervels(cleanData))
      .catch(err => console.error(err))
  }

  return (
    <section className="sugarLevel container">
      <Row>
        <Col class="p-3 mb-2 bg-danger text-white  ">User Name</Col>
        <Col class="p-3 mb-2 bg-danger text-white  ">Before Breakfast</Col>
        <Col class="p-3 mb-2 bg-danger text-white  ">Before Lunch</Col>
        <Col class="p-3 mb-2 bg-danger text-white  ">Before Dinner</Col>
        <Col class="p-3 mb-2 bg-danger text-white  ">Other</Col>
        <Col class="p-3 mb-2 bg-danger text-white  ">Date</Col>
        <Col class="p-3 mb-2 bg-danger text-white  ">{' '}</Col>

      </Row>
      {sugarLevels.map(level => {
        const dateOnly = level.currentDate.split("T")[0]
        return (
          <form onSubmit={handleForSave}>
            <Row>
              {/* <td class="rounded-4  ">{level._id}</td> */}
              <Col class="rounded-4 ">{level.userName} <input type="hidden" name="_id" value={level._id} /></Col>
              <Col class="rounded-4 "><input type="number" name="beforeBreakfast" defaultValue={level.beforeBreakfast} class="form-control" /></Col>
              <Col class="rounded-4 "><input type="number" name="beforeLunch" defaultValue={level.beforeLunch} class="form-control" /></Col>
              <Col class="rounded-4 "><input type="number" name="beforeDinner" defaultValue={level.beforeDinner} class="form-control" /></Col>
              <Col class="rounded-4 "><input type="number" name="other" defaultValue={level.other} class="form-control" /></Col>
              <Col class="rounded-4 ">{dateOnly}</Col>
              <Col class="rounded-4"><Button variant="danger" type='submit'>Save</Button></Col>
            </Row>
          </form>
        )
      })}

      <Button variant="danger" size="lg" onClick={handleShow}>Add</Button>
      {
        sugarLevels && sugarLevels.map((singlePosts) => {

          return (
            <AddSugarModal show={show} handleClose={handleClose} />
          )
        })
      }
    </section>
  );
}