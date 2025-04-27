import { useState } from "react";
import User from "./assets/User"; 
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

function App() {
  const [userList, setUserList] = useState([
    { id: 1, name: "tariq", email: "tariq@gmail.com", age: 25, status: "active" },
    { id: 2, name: "anas", email: "anas@gmail.com", age: 30, status: "blocked" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    status: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: userList.length + 1,
      ...formData
    };
    setUserList([...userList, newUser]);

    // reset the form
    setFormData({
      name: "",
      email: "",
      age: "",
      status: ""
    });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>

        <CustomInput
          label="Name"
          name="name"
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        
        <CustomInput
          label="Email"
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <CustomInput
          label="Age"
          name="age"
          id="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />

        <CustomInput
          label="Status"
          name="status"
          id="status"
          type="text"
          value={formData.status}
          onChange={handleChange}
        />

        <CustomButton text="Add User" type="primary" />
      </form>

      <div className="mt-5">
        {userList.map((user) => (
          <User key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
