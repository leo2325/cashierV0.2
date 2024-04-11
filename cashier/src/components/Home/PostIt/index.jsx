import React, { useState } from 'react';
import './index.css';

function PostIt() {

    return (
        <div className='toDoLists_container'>
            
            <div className='toDoList_container toDoList_container1'>
                <div className='toDoList'>
                    <h3>boutique:</h3>
                    <div>
                        <p>- Remplir toutes les sauces + le pot de 10L spicy</p>
                        <p>- Appeler métro pour en recommander</p>
                        <p>- Appeler ubereat problème tablette</p>
                    </div>
                </div>
            </div>
            
            <div className='toDoList_container toDoList_container2'>
                <div className='toDoList'>
                    <h3>pro:</h3>
                </div>
            </div> 

        </div>                
    );
}
export default PostIt;
