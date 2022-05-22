import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HEADER_TAB } from '../../config';
import { User, Search } from 'react-feather';
import './header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';

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
  const location = useLocation();

  const getCurrentLocation = () => {
    const currentTab = Object.values(HEADER_TAB).find(
      (tab) => tab.path == location.pathname
    );

    return { id: currentTab?.id!, path: currentTab?.path! };
  };

  const [tabSelected, setTabSelected] = useState<
    | {
        id: number;
        path: string;
      }
    | undefined
  >(getCurrentLocation());
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const stickyHeader = () => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop >= 64
      ? header!.classList.add('is-sticky')
      : header!.classList.remove('is-sticky');
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);

    return () => {
      window.removeEventListener('scroll', stickyHeader);
    };
  }, []);

  return (
    <div className="header">
      <section className="header-left">
        <section className="header-left__logo">
          <a href="/" className="header-logo">
            FSTFILM
          </a>
        </section>
        <section className="header-left__nav">
          {Object.values(HEADER_TAB).map((tab, index) => (
            <ButtonHeader
              key={index}
              isSeleted={tab.id === tabSelected?.id}
              title={tab.name}
              onClick={() => {
                setTabSelected({ id: tab.id, path: tab.path });
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
              setTabSelected(undefined);
              navigate('/search');
            }}
            style={{ cursor: 'pointer', marginRight: 20 }}
            color="white"
            width={25}
            height={25}
          />
          <User
            onClick={() => setIsShowModal(true)}
            style={{ cursor: 'pointer' }}
            color="white"
            width={25}
            height={25}
          />
          <ReactModal
            isOpen={isShowModal}
            onRequestClose={() => setIsShowModal(false)}
            className={'header-right__modal'}
            overlayClassName={'header-right__modal-overlay'}
            parentSelector={() => document.querySelector('.header-right__nav')!}
          >
            <h3 className="header-right__modal-nonsignup">
              <a href="/login">Đăng nhập</a>
            </h3>
            <h3 className="header-right__modal-nonsignup">
              <a href="/register">Đăng ký</a>
            </h3>
          </ReactModal>
        </section>
      </section>
    </div>
  );
};

export default PageHeader;
