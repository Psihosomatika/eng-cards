import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте обработчик отправки данных
  };

  return (
    <>
      <div onClick={toggleForm} className={styles.formToggle}>Войти</div>
      {isOpen && (
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={loginData.password}
              onChange={handleChange}
            />
            <button type="submit">Войти</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
