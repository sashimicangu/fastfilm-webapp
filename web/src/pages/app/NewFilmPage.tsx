import React, { useEffect } from 'react';
import styled from 'styled-components';
import FilmItem from '../../components/FilmItem';

const Wrapper = styled.div`
  background: black;
  // height: 100vh;
  padding-top: 50px
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function NewFilmPage() {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <section className="home-new__section">
        <RowWrapper>
          {Array(20)
            .fill({})
            .map((item) => (
              <FilmItem
                imgUrl=""
                title="Tình Yêu, Cái Chết và Người Máy"
                subtitle="Love, Death & Robots"
                style={{ marginBottom: 15 }}
              />
            ))}
        </RowWrapper>
      </section>
    </Wrapper>
  );
}

export default NewFilmPage;
