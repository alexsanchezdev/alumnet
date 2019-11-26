import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

export const Container = styled.div`
  position: relative;

  width: 250px;
  height: 250px;

  overflow: hidden;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);

  :hover {
    & > div {
      background-color: rgba(0, 0, 0, 0.3);
    }

    & > img {
      transform: scale(1.1);
    }
  }
`
