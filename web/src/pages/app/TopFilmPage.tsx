import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilmItem from '../../components/FilmItem';
import { BASE_URL } from '../../config';

const Wrapper = styled.div`
  background: black;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: space-between;
`;

function TopFilmPage() {
  const [listFilm, setListFilm] = useState<Array<any>>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}movie`, { params: { hot: 1 } }).then((res) => {
      setListFilm(res.data.data);
    });
  }, []);

  return (
    <Wrapper>
      <section className="home-new__section">
        <RowWrapper>
          {!!listFilm.length &&
            listFilm.map((item) => (
              <FilmItem
                item={item}
                imgUrl={item?.image}
                title={item?.name}
                subtitle={item?.subtitle}
                style={{ marginBottom: 15 }}
              />
            ))}
        </RowWrapper>
      </section>
    </Wrapper>
  );
}

export default TopFilmPage;
