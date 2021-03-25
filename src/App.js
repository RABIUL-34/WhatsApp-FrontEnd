
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from "pusher-js"
import React,{useEffect,useState} from "react"
import axios from './axios';

function App() {
const [allmessages, setmessages] = useState([])
useEffect(()=>{
axios.get('/message/sync')
.then((response)=>{
  setmessages(response.data);
});
},[]);
useEffect(() => {
  const pusher = new Pusher('c209d3cf5c81b12e183b', {
    cluster: 'ap2'
  });
 
  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage)=> {
    
    setmessages([...allmessages,newMessage]);
});  
return()=>{
  channel.unbind_all();
  channel.unsubscribe();
}
}, [allmessages]);


  return (
  <div className='app'>
  <div className='app__body'>
  <Sidebar/>
  <Chat messages={allmessages}/>
  </div>
  </div>
  );
}

export default App;
