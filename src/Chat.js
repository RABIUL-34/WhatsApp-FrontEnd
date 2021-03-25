import React,{useState} from "react";
import "./Chat.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';


function Chat(props) {
const [input,setInput]=useState("")


  const sendMessage=async(e)=>{
     e.preventDefault();

    await axios.post('./message',{
      message:input,
       name:'Amra',
       timestamp:"hello",
       received:false
     })
     setInput("");
 
  };
 
  
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at.....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
{props.messages.map((message)=>(
  <p className={`chat__message ${message.received && "chat__receiver"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
))}
        
        {/* <p className="chat__receiver chat__message">
          <span className="chat__name">Rabi</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p> */}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon/>
        <form>
          <input  value={input} onChange={e=>setInput(e.target.value)} className="myinput" placeholder="Type a message"type="text" />
          <button onClick={sendMessage} type="submit"  >Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
}

export default Chat;
