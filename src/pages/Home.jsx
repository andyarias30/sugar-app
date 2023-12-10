import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
export default function Home() {
    return (
        
        <main className='homeHeader'>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
    {/* <h1 className="display-4 fw-bold">Centered screenshot</h1> */}
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Sugar Smart is not just an app; it's a revolutionary tool designed to empower individuals managing diabetes by providing them with a seamless and efficient way to track and store their sugar levels. In a world where health is a top priority, Sugar Smart stands out as a beacon of support for those navigating the intricate journey of diabetes management.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Link to={"/sugarPlace"}>
        <Button variant="outline-danger" size='lg'>My Sugar Levels</Button>
        </Link>
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="container px-5">
        <img src="https://cdn.pixabay.com/photo/2014/11/12/19/25/diabetes-528678_1280.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
        </main>
    

    )
}
