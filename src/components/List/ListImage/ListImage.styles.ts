import { transitionConfig } from '../../../utils/styles.utils'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  outline: none;
  text-decoration: none;
  color: black;

  ${transitionConfig};

  cursor: pointer;
  :hover,
  :focus {
    & > div {
      background-color: rgba(0, 0, 0, 0.4);
    }
    & > img {
      transform: scale(1.1);
    }
    & span {
      opacity: 1;
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

const StateMessage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { Container, Overlay, Image, Title, StateMessage }
