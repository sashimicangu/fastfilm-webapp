import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilmItem from '../../components/FilmItem';
import { BASE_URL } from '../../config';

const Wrapper = styled.div`
  background: black;
  min-height: 100vh;
  padding-top: 50px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function TopFilmPage() {
  const [listFilm, setListFilm] = useState<Array<any>>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}movie`).then((res) => {
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
