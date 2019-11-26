import styled from '@emotion/styled'
import css from '@emotion/css'

const transitionConfig = css`
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  ${transitionConfig};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${transitionConfig};
`

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  ${transitionConfig};

  :hover {
    & > div {
      background-color: rgba(0, 0, 0, 0.3);
    }

    & > img {
      transform: scale(1.1);
    }
  }
`

export { Container, Overlay, Image }
