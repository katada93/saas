import { Button, Input } from 'shared/ui';
import { useState } from 'react';
import { SingInArgs } from 'shared/models/user.model';
import styles from './AuthPage.module.scss';

export const SignInPage = () => {
  const [data, setData] = useState<SingInArgs>({
    username: '',
    login: '',
    password: '',
  });

  return (
    <div className={styles.AuthPage}>
      <h1>Вход</h1>
      <form className={styles.inputsWrapper}>
        <Input
          value={data.username}
          placeholder="Имя"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <Input
          value={data.login}
          placeholder="Логин"
          type="email"
          onChange={(e) => setData({ ...data, login: e.target.value })}
        />
        <Input
          value={data.password}
          placeholder="Пароль"
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button>Войти</Button>
      </form>
      <div className={styles.question}>
        У вас нет аккаунта? <a href="a">Зарегистрироваться</a>
      </div>
    </div>
  );
};
