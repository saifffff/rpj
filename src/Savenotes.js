import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const Savenotes =(props)=>{


const delbtnfnc =()=>{
    props.onDel(props.id)
};

    return (
        <div className="col-sm-6 col-lg-4" >
        <>
        <br/>
 <div className="crdmain">
                    {/* CARD */}
  
        {/* CARD INPUT TITLE */}
    <input type="text"
               className="crdinput__title"
               placeholder="Title"
               index={props.index}
               id={props.id}
               value={props.nttl}
               style={{outline: 'none',border: 'none', }}
               readOnly
            >
            </input>
            {/* CARD INPUT MSG */}
            <textarea
           className="crdinput__msg" 
           placeholder="Take a note..."
           value={props.nmsg}
           index={props.index}
               id={props.id}
           style={{outline: 'none',border: 'none',overflow:'hidden'}}
           readOnly
           >
          </textarea>
          {/* CARD DEL BUTTON */}

    <IconButton
    onClick={delbtnfnc}
    style={{outline: 'none'}}
    className="crdbtn" >
           {/* icon */}
           <HighlightOffIcon
           className="crdbtni" />

           </IconButton>
           

       </div>
    
 
 </>
 </div>
 
        
    )
};




export default Savenotes;