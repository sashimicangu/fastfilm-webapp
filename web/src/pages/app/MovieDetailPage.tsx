import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../config';

import './styles/movieDetail.css';

const Wrapper = styled.div`
  background: black;
  min-height: 100vh;
  padding-bottom: 100px;
  // padding-top: 50px;
`;

const RowInfor = ({ left, right, top }: any) => {
  return (
    <div style={{ display: 'flex', marginTop: top }}>
      <h3
        style={{
          color: '#43484C',
          marginRight: 20,
          fontWeight: 400,
          fontSize: 16,
          width: 100
        }}
      >
        {left}
      </h3>
      <h3 style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>{right}</h3>
    </div>
  );
};

function MovieDetailPage() {
  let { id } = useParams();

  const [movieDetail, setMovieDetail] = useState<any>();

  const getData = () => {
    axios.get(`${BASE_URL}movie/${id}`).then((res) => {
      setMovieDetail(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const Cover = styled.div`
    background-image: url('${movieDetail?.cover}');
    height: 600px;
    background-size: cover;
    background-position: 50% 0;
    position: relative;
  `;

  return (
    <Wrapper>
      <Cover />
      <div className="movie-wrapper">
        <div className="movie-image__wrapper">
          <img className="movie-image" src={movieDetail?.image} alt="" />
        </div>
        <div className="movie-infor">
          <h3 className="movie-infor__name">{movieDetail?.name}</h3>
          <h3 className="movie-infor__subtitle">{movieDetail?.subtitle}</h3>
          <RowInfor left={'ĐẠO DIỄN'} right={movieDetail?.author} top={40} />
          <RowInfor left={'QUỐC GIA'} right={movieDetail?.region} top={10} />
          <RowInfor left={'KHỞI CHIẾU'} right={movieDetail?.author} top={10} />
          <h3 className="movie-infor__desc">{movieDetail?.description}</h3>
          <h3 className="movie-infor__desc" style={{fontWeight: 500}}>Trailer</h3>
          <img className="movie-trailer"  src={movieDetail?.trailer} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default MovieDetailPage;
