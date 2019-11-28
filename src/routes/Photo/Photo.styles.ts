import styled from '@emotion/styled'
import {
  transitionConfig,
  desktopQuery,
  tabletQuery,
  mobileQuery,
} from '../../utils/styles.utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  ${desktopQuery`
      margin-top: 146px;
    `};
  ${tabletQuery`
      margin-top: 116px;
    `};
  ${mobileQuery`
      margin-top: 110px;
    `};
`

export const Card = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 24px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid black;
  padding: 6px 12px;
  outline: none;
  cursor: pointer;
  font-size: 14px;

  ${transitionConfig};

  :hover,
  :focus {
    background-color: #2b2b2b;
    color: white;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 800px;
`

export const PhotoInformation = styled.div`
  width: 100%;
`
