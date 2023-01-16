import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from 'shared/ui';
import { SingInArgs } from 'shared/models/user.model';

import styles from './AuthPage.module.scss';

const SignInPage = () => {
  const [data, setData] = useState<SingInArgs>({
    username: '',
    login: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.AuthPage}>
      <h1>Вход</h1>
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
        <Button>Войти</Button>
      </form>
      <div className={styles.question}>
        У вас нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default SignInPage;
