import React from 'react';
import styled from 'styled-components';
import { useUserStore } from '../../store';
import moment from 'moment';

const Wrapper = styled.div`
  height: 900px;
  display: flex;
  padding-top: 150px;
  // align-items: center;
  justify-content: center;
  background: black;
`;

function AccountPage() {
  const user = useUserStore((state) => state.user);

  console.log(user);

  return (
    <Wrapper>
      <div style={{ background: '#333', height: 200, display: 'flex', alignItems: 'center', padding: 40, borderRadius: 10 }}>
        <div>
          <h3 style={{ color: 'white' }}>Tên tài khoản: {user.name}</h3>
          <h3 style={{ color: 'white', marginTop: 20, marginBottom: 20 }}>
            Ngày tạo: {moment(user.createAt).format('HH:mm:ss DD/MM/YYYY')}
          </h3>
          <h3 style={{ color: 'white' }}>Email: {user.email}</h3>
        </div>
      </div>
    </Wrapper>
  );
}

export default AccountPage;
