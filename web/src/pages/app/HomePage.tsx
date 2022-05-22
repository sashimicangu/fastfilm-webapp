import React, { useEffect, useState } from 'react';
import './styles/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import FilmItem from '../../components/FilmItem';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

import { Scrollbar, Grid } from 'swiper';
import styled from 'styled-components';
import { ChevronRight } from 'react-feather';
import axios from 'axios';
import { BASE_URL } from '../../config';

const Title = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  background: black;
  padding: 25px 0;
  padding-bottom: 100px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RowTitle = ({ title }: { title: string }) => {
  return (
    <div className="row-title__wrapper">
      <Title>{title}</Title>
      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', alignSelf: 'end' }}
        >
          <a className="row-title__right" href="">
            Xem thêm
          </a>
          <ChevronRight
            style={{ cursor: 'pointer' }}
            color="white"
            width={22}
            height={22}
          />
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [listFilm, setListFilm] = useState<Array<any>>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}movie`).then((res) => {
      setListFilm(res.data.data);
    });
  }, []);

  const renderSwiperHomeRecommend = () => {
    return listFilm.map((item, index) => (
      <SwiperSlide>
        <FilmItem
          item={item}
          imgUrl={item?.image}
          title={item?.name}
          subtitle={item?.subtitle}
          style={{ marginBottom: 15 }}
        />
      </SwiperSlide>
    ));
  };

  return (
    <Wrapper>
      <section className="home-recommend__section">
        <Title>Phim đề cử</Title>
        <Swiper
          spaceBetween={12}
          slidesPerView={5}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          {renderSwiperHomeRecommend()}
        </Swiper>
      </section>
      <section className="home-new__section">
        <RowTitle title="Phim đang thịnh hành" />
        <RowWrapper>
          {listFilm.map((item) => (
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
      <section className="home-new__section">
        <RowTitle title="Phim mới cập nhật" />
        <RowWrapper>
          {listFilm.map((item) => (
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
};

export default HomePage;
