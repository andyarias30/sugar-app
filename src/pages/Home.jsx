import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
export default function Home() {
    return (
        
        <header className='homeHeader'>
            <h1>The best option for people with Diabetes</h1>
            <Link to={"/sugarPlace"}>
            <Button variant="outline-danger " size='lg'>My Sugar Levels</Button>
            </Link>
        </header>
    

    )
}
