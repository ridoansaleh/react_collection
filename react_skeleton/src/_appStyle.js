import styled, { css, keyframes } from "styled-components";

const progress = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const loadingStyles = css`
  position: relative;
  background-color: #e2e2e2;
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${progress} 0.8s infinite;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  height: auto;
  width: auto;
  overflow: hidden;
  margin: 12px;
  border-radius: 5px;
  box-shadow: 9px 17px 45px -29px rgba(0, 0, 0, 0.44);
`;

export const CardImage = styled.div`
  height: 300px;
  width: 400px;

  ${({ loading }) => loading && loadingStyles}
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.div`
  height: 1rem;
  width: 50%;
  margin: 1rem 0;
  border-radius: 3px;

  ${({ loading }) => loading && loadingStyles}
`;

export const CardDescription = styled.div`
  font-size: 16px;
  height: 3rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 3px;

  ${({ loading }) => loading && loadingStyles}
`;
