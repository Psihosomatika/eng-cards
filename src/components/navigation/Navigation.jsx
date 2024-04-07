import React from 'react';
import styles from './Navigation.module.css';
import LoginForm from './loginform/LoginForm';
import RegisterForm from './registerform/RegisterForm';


const Navigation = () => {
  return (
      <nav className={styles.navigation}>
        <h1 className={styles.AppName}>Vocabular</h1>
        <ul className={styles.NavBar}>
          <li><LoginForm /></li>
          <li><RegisterForm /></li>
        </ul>
      </nav>
  );
};

export default Navigation;
