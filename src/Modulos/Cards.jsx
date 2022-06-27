
import users from "./users.json"
import "../App.css"
import { useState } from "react";

function Cards() {
  const random = Math.floor(Math.random()*users.length)
  

  const [index, setIndex] = useState(random);


  const colors='0123456789ABCDEF';
  const changeUser = () => {
    
    const random2 =Math.floor(Math.random()*users.length)
    setIndex(random2);
    document.body.style=`background:0123456789ABCDEF`
    }


  return (
    <div className="App">
      <div className="title">
      <h1>
        {users[index].name.title} {users[index].name.first}{" "}
        {users[index].name.last}
      </h1>
      </div>
      <div>
      <img src={users[index].picture.large} alt="" />
      </div>
      <div className="info">
      <ul>
        <li>{users[index].gender}</li>
        <li>{users[index].location.city}</li>
        <li><i className="fa-solid fa-phone-flip"></i>{users[index].phone}</li>
        <li>{users[index].email}</li>
      </ul>
      </div>
      <button className="Change" onClick={changeUser}>a</button>
    </div>
  );
}

export default Cards;