import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const testHandler = () => {
    const body = {
      username: username,
      password: password,
    };
    axios.post("http://localhost:8080/api/sign-in", body).then((res) => {
      alert(res.data);
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={username}
        placeholder={"아이디"}
        onChange={userNameHandler}
      ></input>
      <input
        type="password"
        value={password}
        placeholder={"비밀번호"}
        onChange={passwordHandler}
      ></input>
      <button onClick={testHandler}>로그인</button>
    </div>
  );
}

export default App;
