import React,{ useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Createnote =(props)=>{
    const[cMsg, setCmsg]=useState({title:"",msg:""});
    const [expand, Setexpand]=useState(false);



  const passMsg =(events)=>{
   const{name,value}=events.target;
    setCmsg((olddata)=>{
        return {
            ...olddata,
            [name]:value,
        };
    });
  };

  const grnbtnfnc =()=>{
      props.passNote(cMsg)
      setCmsg({title:"", msg:""});
    

  };

    return(<>
        
     <div className="cnote__cont">
     <div className="cnote__div">
 {/* title part */}
      <form>
          {expand?
          <input type="text"
               className="input__title"
               placeholder="Title"
               autoComplete="off"
               name="title"
               value={cMsg.title}
               onChange={passMsg}
               style={{outline: 'none',border: 'none'}}
            >
            </input>
            :null}
  {/* note part */}
       
          <textarea
           className="input__msg" 
           placeholder="Take a note..."
           name="msg"
           onClick={()=>{Setexpand(true);}}
           autoComplete="off"
           value={cMsg.msg}
               onChange={passMsg}
           style={{outline: 'none',border: 'none',overflow:'hidden'}}
           
          >
          </textarea>
          </form>

  {/* button */}
      {expand?
      <IconButton style={{float:'right',  transform:'translate(0px,5px)',outline: 'none',
     border: 'none'}}
     onClick={grnbtnfnc}
     aria-label="Create">
          <AddCircleIcon className="cbtn" />
      </IconButton>
      :null}
     

  </div>
  </div>
    
    </>)

};


export default Createnote;