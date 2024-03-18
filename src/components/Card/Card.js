
import Image from '../Image/Image';
import './Card.css'
import Form from '../Form/Form';
import { useState } from 'react';
import Input from '../Input/Input';
function Card() {
    const [x, setX] = useState(true);

    if (x) {
        return (
            <div className="card">
                <Image />
                <Form />
                <p>have an account?</p>
                <button onClick={()=> setX(!x)}>Log in</button>
            </div>
        )
    }
    else {
        return (
            <div className="card">
                <Image />
                <Input type='text' placeholder="Phone number,username or email"/>
                <Input type='text' placeholder="Password"/>
                <button className='btn'>Sign in</button>
                <p>Don't have account?</p>
                <button onClick={()=> setX(!x)}>Log up</button>
            </div>
        )
    }

}

export default Card;