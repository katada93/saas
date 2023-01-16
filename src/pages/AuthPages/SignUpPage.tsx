import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from 'shared/ui';
import { SingUpArgs } from 'shared/models/user.model';

import styles from './AuthPage.module.scss';

const SignUpPage = () => {
  const [data, setData] = useState<Omit<SingUpArgs, 'branchId'>>({
    username: '',
    login: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.AuthPage}>
      <h1>Регистрация</h1>
      <form className={styles.inputsWrapper}>
        <Input
          value={data.username}
          name="username"
          placeholder="Имя"
          onChange={handleInputChange}
        />
        <Input
          value={data.login}
          placeholder="Логин"
          name="login"
          type="email"
          onChange={handleInputChange}
        />
        <Input
          value={data.password}
          placeholder="Пароль"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <Button>Зарегистрироваться</Button>
      </form>
      <div className={styles.question}>
        Уже есть аккаунт? <Link to="/signin">Войти</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
