import { useNavigate } from "react-router-dom";
import s from './NotFoundPage.module.css';

export default function NotFoundPage(){

    const navigate = useNavigate()


    return(
        <div className={s.container}>
            <h2>Error 404</h2>
            <p>Oops, the page you're looking for could not be found</p>
            <div className={s.button_container}>
            <button style={{marginRight: '20px'}} onClick={() => navigate('/')}>Go home!</button>
            <button onClick={() => navigate(-1)}>Go back!</button>     
            </div>
        </div>
    )
}