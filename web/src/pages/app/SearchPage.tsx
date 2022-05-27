import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';
import FilmItem from '../../components/FilmItem';
import { BASE_URL } from '../../config';

import './styles/search.css';

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  // padding-top: 150px;
  // align-items: center;
  justify-content: center;
  background: black;
`;

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: space-between;
`;

function SearchPage() {
  const [listFilmSearch, setListFilmSearch] = useState<Array<any>>([]);
  const handleChange = (e: any) => {
    axios
      .get(`${BASE_URL}movie`, { params: { search: `${e.target.value}` } })
      .then((res) => {
        setListFilmSearch(res.data.data);
      });
  };

  return (
    <Wrapper>
      <div className="search-form">
        <input
          placeholder="Tìm kiếm"
          className={'search-form__input'}
          onChange={(e: any) => {
            handleChange(e);
          }}
        />
        <Search
          style={{ cursor: 'pointer', marginRight: 20 }}
          color="white"
          width={25}
          height={25}
        />
      </div>
      <section className="search-film__section">
        <RowWrapper>
          {!!listFilmSearch.length &&
            listFilmSearch.map((item) => (
              <FilmItem
                item={item}
                imgUrl={item?.image}
                title={item?.name}
                subtitle={item?.subtitle}
                style={{ marginBottom: 15, marginRight: 5, marginLeft: 5 }}
              />
            ))}
        </RowWrapper>
      </section>
    </Wrapper>
  );
}

export default SearchPage;
