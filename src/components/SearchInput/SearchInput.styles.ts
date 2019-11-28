import { mobileQuery, transitionConfig } from './../../utils/styles.utils'
import styled from '@emotion/styled'
import { desktopQuery, tabletQuery } from '../../utils/styles.utils'

export const Form = styled.form`
  position: relative;
  flex-basis: 100%;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  outline: none;
  padding: 24px 96px 24px 24px;

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

export const Submit = styled.input`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #2c2c2c;
  border: 1px solid #2c2c2c;
  font-weight: 600;
  cursor: pointer;

  ${transitionConfig};

  :hover,
  :focus {
    background-color: #2c2c2c;
    border: 1px solid rgba(0, 0, 0, 0);
    color: white;
  }

  ${desktopQuery`
      font-size: 20px;
      padding: 8px 16px;
    `};
  ${tabletQuery`
      font-size: 18px;
      padding: 8px 16px;
    `};
  ${mobileQuery`
      font-size: 14px;
      padding: 4px 8px;
    `};
`
