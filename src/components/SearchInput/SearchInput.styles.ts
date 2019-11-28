import { mobileQuery } from './../../utils/styles.utils'
import styled from '@emotion/styled'
import { desktopQuery, tabletQuery } from '../../utils/styles.utils'

export const Form = styled.form`
  flex-basis: 100%;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  outline: none;
  padding: 24px;

  ${desktopQuery`
      font-size: 48px;
      &::placeholder {
        font-size: 48px;
      }
    `};
  ${tabletQuery`
      font-size: 24px;
      &::placeholder {
        font-size: 24px;
      }
    `};
  ${mobileQuery`
      font-size: 18px;
      &::placeholder {
        font-size: 18px;
      }
    `};
`
