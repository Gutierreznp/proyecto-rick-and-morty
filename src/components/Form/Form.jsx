import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';
import imagen from '../../image/6210065.jpg';
export default function Form(props){

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div className={style.container}>
            <img className={style.imagen} src={imagen}/>
            <form onSubmit={handleSubmit}>

                <label>Email:</label>
                <input onChange={handleChange} placeholder="Ingrese su email..." type="text" name="email" value={userData.email} />
                <p className={style.error}>{errors.email && errors.email}</p>

                <label >Password:</label>
                <input onChange={handleChange} placeholder="Password..." type="password" name="password" value={userData.password}/>
                <p className={style.error}>{errors.password && errors.password}</p>

                <hr/>
                <button type="submit">Submit</button>
                </form>
            </div>
    )
}