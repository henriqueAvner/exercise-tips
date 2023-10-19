import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();

  function HandlePass() {
    const specialRegex = /[`!@#$%^&*()_+\-=[\]{};':"|,.<>/?~]/;
    if (username.length >= 5 && specialRegex
      .test(password) && password.length >= 6) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }
  function ButtonClick() {
    navigate('/home');
  }

  function HandleName(e: any) {
    setUsername(e.target.value);
    HandlePass();
  }

  function HandlePassword(e: any) {
    setPassword(e.target.value);
    HandlePass();
  }

  return (
    <form className={ styles.sectionStyle }>
      <label htmlFor="username">
        Digite seu nome:
        <input
          type="text"
          value={ username }
          name="username"
          onChange={ HandleName }
          placeholder="name"
        />
      </label>
      <label htmlFor="senha">
        Digite sua senha:
        <input
          type="password"
          value={ password }
          name="password"
          onChange={ HandlePassword }
          placeholder="password"
        />
      </label>
      <button
        type="button"
        disabled={ disableButton }
        onClick={ ButtonClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
