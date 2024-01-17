import { ReactComponent as LogoIcon } from '../assets/img/icons/logo.svg';

export const Logo = () => (
  <a href="#top" aria-label="home" className="logo">
    <LogoIcon />
    <LogoIcon className="logo__hex" />
  </a>
);
