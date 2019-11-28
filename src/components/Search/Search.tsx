import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const Input = styled.input`
  width: 100%;
  font-size: 48px;
  box-sizing: border-box;
  border: none;
  background: transparent;
  outline: none;
  padding: 24px;

  &::placeholder {
    font-size: 48px;
  }
`

const useQuery = () => {
  return new URLSearchParams(useLocation().search.slice(1))
}

export const Search: React.FC = () => {
  const history = useHistory()
  const searchQuery = useQuery().get('search')
  const [search, setSearch] = React.useState(searchQuery || '')

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const sanitizedSearch = search.replace(/ /g, '')
    if (sanitizedSearch.length > 0) {
      history.push(`/?search=${sanitizedSearch}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ flexBasis: '100%' }}>
      <Input
        type="text"
        placeholder="Search and press enter"
        value={search}
        onChange={handleChange}
      />
      <input type="submit" style={{ display: 'none' }} />
    </form>
  )
}
