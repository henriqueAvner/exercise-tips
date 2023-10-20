import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();
  const specialRegex = /[`!@#$%^&*()_+\-=[\]{};':"|,.<>/?~]/;

  function HandlePass() {
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
    <>
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
      <ul>
        <li className={ username.length >= 5 ? styles.Pass : styles.notPass }>
          Seu username deve ter mais de 5 dígitos
        </li>
        <li className={ password.length >= 6 ? styles.Pass : styles.notPass }>
          Sua senha deve ser maior do que 6 caracteres
        </li>
        <li
          className={ specialRegex
            .test(password) ? styles.Pass : styles.notPass }
        >
          Sua senha deve conter pelo menos um caractere especial
        </li>
      </ul>
    </>
  );
}

export default Login;
