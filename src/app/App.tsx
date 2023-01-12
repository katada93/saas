import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Routing } from 'pages';
import { Sidebar } from 'components';

import './styles/index.scss';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div className={clsx('App', { isOpenSidebar })}>
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />
      <Routing />
    </div>
  );
}

export default App;
