import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HEADER_TAB } from '../../config';
import { User, Search } from 'react-feather';
import './header.css';
import { useNavigate } from 'react-router-dom';

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
      style={{ color: isSeleted ? '#EEB76B' : 'white' }}
      children={title}
      onClick={onClick}
    />
  );
};

const PageHeader = () => {
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState<number | null>(0);

  useEffect(() => {}, [isSelected]);

  return (
    <div className="header">
      <section className="header-left">
        <section className="header-left__logo">
          <a href="/" className="header-logo">
            FSTFILM
          </a>
        </section>
        <section className="header-left__nav">
          {Object.values(HEADER_TAB).map((tab) => (
            <ButtonHeader
              isSeleted={tab.id === isSelected}
              title={tab.name}
              onClick={() => {
                setIsSelected(tab.id);
                navigate(tab.path);
              }}
            />
          ))}
        </section>
      </section>
      <section className="header-right">
        <section className="header-right__nav">
          <Search
            onClick={() => {
              setIsSelected(null);
              navigate('/search');
            }}
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
