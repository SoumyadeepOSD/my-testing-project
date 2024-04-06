import { useState } from 'react';
import Loading from '../loading';
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    section: ''
  });
  const handleClick = async() => {
    if(data.name.length === 0 || data.email.length === 0 || data.section.length === 0){
      alert('Please fill all the fields');
      return;
    }
    try {
      const userdataobject = {
        name: data.name,
        email: data.email,
        section: data.section
      };
      setIsLoading(true);
      await fetch('http://localhost:5000/data/create',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdataobject)
      });
      navigate('/users/profile');
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  }


  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='bg'>
      <h1>Create User</h1>
      <input
        type="text" 
        placeholder="Enter name"
        name="name"
        onChange={(e) => setData({...data, name: e.target.value})}
      />
      <input
        type="email" 
        placeholder="Enter email"
        name="email"
        onChange={(e) => setData({...data, email: e.target.value})}
      />
      <input
        type="text" 
        placeholder="Enter section"
        name="section"
        onChange={(e) => setData({...data, section: e.target.value})}
      />
      <button onClick={handleClick}>Create user</button>
    </div>
  )
}

export default Home;