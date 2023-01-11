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

  return (
    <div className={styles.AuthPage}>
      <h1>Регистрация</h1>
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
        <Button>Зарегестирироваться</Button>
      </form>
      <div className={styles.question}>
        Уже есть аккаунт? <a href="a">Войти</a>
      </div>
    </div>
  );
};
