import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';
import { device } from 'styles/utils';

export const Completed = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  //flex: 1 10%;
`;

export const CompletedPercentage = styled.span`
  font-weight: bold;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;

  @media screen and ${device.mobileL} {
    color: ${PRIMARY};
  }
`;
export const CompletedText = styled.span`
  font-weight: lighter;
  text-align: center;
  font-size: 0.9rem;
  color: #fff;

  @media screen and ${device.mobileL} {
    color: ${PRIMARY};
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
