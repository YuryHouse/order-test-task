import React from 'react';
import style from './App.module.css';

function App() {
    return (
        <div className={style.app}>
            <div className={style.container}>
                    <form className={style.form}>
                        <div className={style.enterNum}><input className={style.input} type={'text'}/></div>
                    </form>
                    <button className={style.orderBtn}>
                        <div>{'Order'}</div>
                    </button>
            </div>
        </div>
    );
}

export default App;
