import React from 'react';
import style from './App.module.css';
import {useForm} from "react-hook-form";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faS, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faS, faCartShopping);

interface IFormInput {
    phone: string;
}


function App() {
    const {register, formState: {errors}, handleSubmit} = useForm<IFormInput>();

    const onSubmit = (data: IFormInput, e: any) => {
        e.preventDefault();
        axios.post('http://localhost:3010/sendMessage', {data})
            .then((res) => {
                alert('Thank you. Your message has been received. We will contact you shortly.');
            });
        e.target.reset()
    }

    return (
        <div className={style.app}>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)} id={'contact-form'}>
                    <div className={style.enterNum}>
                        <input
                            className={style.input}
                            type={'text'}
                            {...register('phone', {required: true})}
                            placeholder={'Your phone number...'}/>
                    </div>
                    <button type='submit' className={style.orderBtn}>
                        <div><FontAwesomeIcon icon={faCartShopping}/> {'Order'}</div>
                    </button>
                </form>
            </div>
            <div className={style.errorMessage}>
                {errors.phone && <p>*Phone is required</p>}
            </div>
        </div>
    );
}

export default App;
