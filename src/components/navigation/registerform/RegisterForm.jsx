import React, { useState } from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте обработчик отправки данных
  };

  return (
    <>
      <div onClick={toggleForm} className={styles.formToggle}>Зарегистрироваться</div>
      {isOpen && (
        <div className={styles.registerForm}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={registerData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              value={registerData.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
