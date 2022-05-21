import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface FilmItemProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  style?: any
}

const Title = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: #dbdbdb
`;

const FilmItem = (props: FilmItemProps) => {
  const { imgUrl, title, subtitle, style } = props;
  const { width, height } = useWindowDimensions();

  const Image = styled.img`
    width: ${(width - 400 - 12 * 4) / 5}px;
    aspect-ratio: 114/169;
    cursor: pointer
  `;

  return (
    <div style={style}>
      <Image
        src="https://image.tmdb.org/t/p/w342/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg"
        alt=""
      />
      <h3 className="title">
        <Title href="">{title}</Title>
      </h3>
      <h3 className="subtitle">
        <Title style={{color: '#7a7a7a'}} href="">{subtitle}</Title>
      </h3>
    </div>
  );
};

export default FilmItem;
