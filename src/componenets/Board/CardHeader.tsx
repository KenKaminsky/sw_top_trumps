import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';

interface ICardHeader {
  title: string;
  imgUrl: string;
}

const CardHeader: React.FC<ICardHeader & IStyledComponent> = ({ title, imgUrl, className }) => {
  return (
    <div className={className}>
      <div>
        <img src={imgUrl} alt='img' />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export const StyledCardHeader = styled(CardHeader)`
  img {
    width: 100%;
  }
  margin-bottom: 10px;
`;

export default StyledCardHeader;
