import logo from "./logo.svg";
import "./App.css";

function App() {
  let login, password;

  const onInput = (e) => {
    const type = e.target.name;

    if (type === "email") {
      login = e.target.value.trim();
    }

    if (type === "password") {
      password = e.target.value.trim();
    }

    console.log(login, password);
  };

  const onHandleSubmit = (e) => {
    console.log(e, login, password);

    if (login && password) {
      alert(`Форма отправлена \n login : ${login} \n password: ${password}`);
      login = password = "";

      return;
    }

    alert("Одно из полей не заполненно");
  };

  return (
    <div className="App">
      <form onSubmit={onHandleSubmit}>
        <input onChange={onInput} type="text" placeholder="login" value={login} name="email" />
        <input onChange={onInput} type="password" placeholder="pas" value={password} name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
