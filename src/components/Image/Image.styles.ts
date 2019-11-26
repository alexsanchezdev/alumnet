import styled from '@emotion/styled'
import css from '@emotion/css'

const transitionConfig = css`
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  overflow: hidden;
  cursor: pointer;
  ${transitionConfig};

  :hover {
    & > div {
      background-color: rgba(0, 0, 0, 0.4);
    }

    & > img {
      transform: scale(1.1);
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  background-color: rgba(0, 0, 0, 0);
  ${transitionConfig};

  :hover {
    & > span {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  ${transitionConfig};
`

const Title = styled.span`
  color: white;
  font-weight: 600;
  text-align: center;

  opacity: 0;
  ${transitionConfig};
`

export { Container, Overlay, Image, Title }
