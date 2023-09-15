import { useState } from "react";
const FuncComp = () => {
    const [signIn, setSignIn] = useState({
    userName: "",
    password: "",
  });

  const _handleInputChange = (e) => {
    const { name, value } = e.target;

    // Dynamically setting state using ES6 object
    setSignIn({ ...signIn, [name]: value });
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label for="name">User Name</label>
        <div className="input-element">
          <input
            type="text"
            name="userName"
            value={signIn.userName}
            placeholder="Enter your user name"
            onChange={_handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label for="name">Password</label>
        <div className="input-element">
          <input
            type="password"
            name="password"
            value={signIn.password}
            placeholder="Enter Password"
            onChange={_handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
      export default FuncComp;