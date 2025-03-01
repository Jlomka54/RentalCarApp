import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';

import css from './HeaderPage.module.css';

const HeaderPage = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Header />
    </div>
  );
};

export default HeaderPage;
