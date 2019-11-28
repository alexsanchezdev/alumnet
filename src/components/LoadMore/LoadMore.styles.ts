import { transitionConfig } from './../../utils/styles.utils'
import styled from '@emotion/styled'

export const Button = styled.button`
  font-size: 20px;
  background-color: #2c2c2c;
  padding: 16px 24px;
  color: white;
  cursor: pointer;
  ${transitionConfig};

  :hover {
    background-color: transparent;
    border: 1px solid #2c2c2c;
    color: #2c2c2c;
  }
`

export const Container = styled.div`
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`
