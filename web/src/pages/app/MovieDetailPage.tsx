import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
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
          width: 100,
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

  const movieDetailDivRef = useRef<HTMLDivElement>(null);

  const Cover = styled.div`
    background-image: url('${movieDetail?.cover}');
    height: 600px;
    background-size: cover;
    background-position: 50% 0;
    position: relative;
  `;

  const getData = () => {
    axios.get(`${BASE_URL}movie/${id}`).then((res) => {
      setMovieDetail(res.data.data);
    });
  };

  useEffect(() => {
    movieDetailDivRef.current?.scrollIntoView();
    getData();
  }, []);

  const renderCategorySection = () => {
    return (
      <div className="movie-category__section">
        {movieDetail?.category?.map((item: any) => (
          <div className="movie-category">
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Wrapper>
      <Cover />
      <div className="movie-wrapper">
        <div className="movie-image__wrapper">
          <img className="movie-image" src={movieDetail?.image} alt="" />
        </div>
        <div ref={movieDetailDivRef} className="movie-infor">
          <h3 className="movie-infor__name">{movieDetail?.name}</h3>
          <h3 className="movie-infor__subtitle">{movieDetail?.subtitle}</h3>
          <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
            <span className="imdb-icon">
              <svg width={'100%'} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                  fill="#ffc107"
                ></path>
                <path
                  d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                  fill="#263238"
                ></path>
              </svg>
            </span>
            <span style={{ color: 'white', fontWeight: 600 }}>{movieDetail?.rating}</span>
          </div>
          {renderCategorySection()}
          <RowInfor left={'ĐẠO DIỄN'} right={movieDetail?.author} top={25} />
          <RowInfor left={'QUỐC GIA'} right={movieDetail?.region} top={10} />
          <RowInfor
            left={'KHỞI CHIẾU'}
            right={moment(movieDetail?.premiere).format('DD/MM/YYYY')}
            top={10}
          />
          <h3 className="movie-infor__desc">{movieDetail?.description}</h3>
          <h3 className="movie-infor__desc" style={{ fontWeight: 500 }}>
            Trailer
          </h3>
          <img className="movie-trailer" src={movieDetail?.trailer} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default MovieDetailPage;
