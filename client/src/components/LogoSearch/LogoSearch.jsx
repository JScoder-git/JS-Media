import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios using npm or yarn
import Logo from "../../img/logo.jpg";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (input.length > 0) {
      axios.get(`YOUR_API_ENDPOINT?username=${input}`)
        .then(res => {
          setUserList(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="LogoSearch">
  <div className="icon">JS</div>
  <div className="Search">
    <input type="text" placeholder="#Explore" onChange={handleChange} />
    <div className="s-icon">
      <UilSearch/>
    </div>
  </div>
  {userList.map(user => (
    <div key={user.id}>
      {user.username}
    </div>
  ))}
</div>

  );
};

export default LogoSearch;
