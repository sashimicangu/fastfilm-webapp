import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HEADER_TAB } from '../../config';
// import { PersonIcon,  } from '@radix-ui/react-icons';
import { User, Search } from 'react-feather';
import './header.css';

const Button = styled.a`
  color: white;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 500;
`;

interface ButtonHeaderProps {
  title: string;
  onClick: () => void;
  isSeleted?: boolean;
}

const ButtonHeader = ({
  title,
  isSeleted = false,
  onClick,
}: ButtonHeaderProps) => {
  return (
    <Button
      style={{ color: isSeleted ? '#fac261' : 'white' }}
      children={title}
      onClick={onClick}
    />
  );
};

const PageHeader = () => {
  const [isSelected, setIsSelected] = useState<number>(0);

  useEffect(() => {}, [isSelected]);

  return (
    <div className="header">
      <section className="header-left">
        <section className="header-left__logo">
          <a href="/" className="header-logo">
            FST<a style={{ color: 'white' }}>FILM</a>
          </a>
        </section>
        <section className="header-left__nav">
          {Object.values(HEADER_TAB).map((tab) => (
            <ButtonHeader
              isSeleted={tab.id === isSelected}
              title={tab.name}
              onClick={() => setIsSelected(tab.id)}
            />
          ))}
          {/* <PersonIcon color="white" width={25} height={25} /> */}
        </section>
      </section>
      <section className="header-right">
        <section className="header-right__nav">
          <Search
            style={{ cursor: 'pointer', marginRight: 20 }}
            color="white"
            width={25}
            height={25}
          />
          <User
            style={{ cursor: 'pointer' }}
            color="white"
            width={25}
            height={25}
          />
        </section>
      </section>
    </div>
  );
};

export default PageHeader;
