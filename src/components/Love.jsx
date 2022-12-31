import React, { useState } from 'react';
import data from "../data.json"

const Love = () => {

    const randomPhoto = Math.floor(Math.random() * data.length)

    const [changePhoto, setChangePhoto] = useState (randomPhoto)

    const randomChange = () =>{

        setChangePhoto(Math.floor(Math.random() * data.length))

    }

    return (
        <div>
            <div className='main-container'>
                <i class="fa-solid fa-heart"></i>
                <img className='img' src={data[changePhoto].image} alt="image" />
                <h1 className='quote'><i className="fa-solid fa-quote-left"></i> {data[changePhoto].quote} <i className="fa-solid fa-quote-right"></i></h1>
                <button className='btn' onClick={randomChange}><i className="fa-solid fa-shuffle"></i></button>
            </div>
        </div>
    );
};

export default Love;