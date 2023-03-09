import styled, { css } from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const StyledCanvas = styled(Canvas)`
  z-index: 0;
  aspect-ratio: 1;
`;

export const Title = styled.h2`
  position: absolute;
  top: 20px;
  left: 60px;
  color: #000;
  font-size: 4rem;
  font-weight: 600;
`;

export const MakeItRainButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: translateX(-50%);

  color: #fff;
  background-color: #000;
  opacity: 0.6;

  border: 0;
  border-radius: 4;
  font-size: 18;
  cursor: pointer;

  width: fit-content;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 20px;

  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const Arrow = styled.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;

  ${({ left }: { left?: boolean }) => (
    left
      ? css`
        transform: translateY(-50%) rotate(135deg);
        left: 30px;
      ` : css`
        transform: translateY(-50%) rotate(-45deg);
        right: 30px;
      `
  )}
`;

export const OpenArticle = styled.button`
  background-color: #000;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;