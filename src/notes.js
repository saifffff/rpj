import React, { useState } from 'react';
import Hbar from './headbar';
import Footer from './Footer';
import CreateNote from './Createnote';
import Savenotes from './Savenotes';



const NoteApp =()=>{
    const [Snote, Setsnote]=useState([]);

    const addNote=(cMsg)=>{
        
        Setsnote((oldVal) => {
             return [...oldVal, cMsg] ;
        });
        
    };
    const delFnc=(id)=>{
        
        Setsnote((olditem)=>{
            return olditem.filter((newArr, indx)=>{
                return indx !== id;
            });
        });
    };


    return( 
        <>
        <div className="maincont">
            < Hbar />
            < CreateNote passNote={addNote} />
            < div className="row snote__div">
            {Snote.map((vall, index) => {
                return ( 
                < Savenotes 
                key={index}
                id={index}
                nttl={vall.title}
                nmsg={vall.msg}
                onDel={delFnc}
                /> 
                );
            })}
            </div>
            < Footer />
        </div>
        </>
    )
};


export default NoteApp;