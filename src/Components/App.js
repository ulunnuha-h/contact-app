import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddContact from './AddContact';
import api from '../Api/contacts';
import ContactList from './ContactList';
import Pro from './Pro';
import { useState,useEffect } from 'react';

function App() {

  const key = 'ContactDataKey';
  const [data,setData] = useState([]);

  const retriveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  }

  const getContacts = async () => {
    const contacts = await retriveContacts();
    if(contacts) setData(contacts);
  }

  const dataHandle = async (newData) => {
    // console.log(newData);

    const response = await api.post('/contacts',newData);
    console.log(response.data);
    getContacts();
  }

  const removeData = async (index) => {

    await api.delete(`/contacts/${index}`)
    const temp = data.filter((i)=>{
      return i.name != index;
    });
    setData(temp);
    getContacts();
  }

  useEffect(()=>{
    // const retrive = JSON.parse(localStorage.getItem(key));
    // if(retrive) setData(retrive);
    
    getContacts();
  },[]);

  useEffect(()=>{
    // if(data.length !== 0)localStorage.setItem(key,JSON.stringify(data));
  },[data]);

 

  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/add" element={<AddContact dataHandle={dataHandle}/>}/>
          <Route path='/' element={<ContactList data={data} removeData={removeData}/>} />
          <Route path='/pro/:name' element={<Pro data={data}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
