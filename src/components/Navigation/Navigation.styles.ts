import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eceff1;
  z-index: 100;
`

export const FavoritesLink = styled(Link)`
  font-size: 16px;
  outline: none;
  color: #2c2c2c;
`

export const FavoritesPhotoCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
`
