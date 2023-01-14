import { Button, Input } from 'shared/ui';
import { useState } from 'react';
import { SingUpArgs } from 'shared/models/user.model';
import styles from './AuthPage.module.scss';

export const SignUpPage = () => {
  const [data, setData] = useState<SingUpArgs>({
    username: '',
    login: '',
    password: '',
    branchId: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
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
        Уже есть аккаунт? <a href="a">Войти</a>
      </div>
    </div>
  );
};
