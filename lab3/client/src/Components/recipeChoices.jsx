import React, { Component, useEffect, useState } from 'react';

const RecipeChoices = ({ handleChange, label, choices, checked }) => {

    return (
        <div className='radio-buttons'>
            <div className='text-box'>
                <input 
                    type='text'
                    name={label}
                    placeholder='Enter your answer here'
                    onChange={handleChange}
                    className='textbox'
                />
            </div>
            {choices && 
                choices.map((choice) => (
                    <li key={choice}>

                        {choice}

                    </li>
                ))
            }
        </div>
    )
}

export default RecipeChoices;