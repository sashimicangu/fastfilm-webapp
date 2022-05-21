import React from 'react';
import './styles/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import FilmItem from '../../components/FilmItem';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

import { Scrollbar, Grid } from 'swiper';
import styled from 'styled-components';
import { ChevronRight } from 'react-feather';

const Title = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  background: black;
  padding: 25px 0;
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
  const renderSwiperHomeRecommend = () => {
    return Array(10)
      .fill({})
      .map((item, index) => (
        <SwiperSlide>
          <FilmItem
            imgUrl=""
            title="Tình Yêu, Cái Chết và Người Máy"
            subtitle="Love, Death & Robots"
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
          {Array(10)
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
      <section className="home-new__section">
        <RowTitle title="Phim mới cập nhật" />
        <RowWrapper
        >
          {Array(10)
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
};

export default HomePage;
