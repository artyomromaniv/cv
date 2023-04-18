import React from "react";
import s from'./Main.module.css';
import sContainer from './../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Artyom Romaniv</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
}