import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  console.log(count);

  const { name, city, mail_id } = props;

  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h1>count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {city}</h3>
      <h4>Contact: {mail_id}</h4>
    </div>
  );
};

export default User;
