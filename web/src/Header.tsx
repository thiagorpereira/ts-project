import React from 'react';

// import { Container } from './styles';
interface HeaderProps {
  title: string;
  subTitle?: string;
}


const Header: React.FC<HeaderProps> = ({title}) => {
  return <h1>
    {title}
  </h1>;
}

export default Header;