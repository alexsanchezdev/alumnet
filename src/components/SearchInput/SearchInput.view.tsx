import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../utils/router.utils'
import { Form, Input } from './SearchInput.styles'

export const SearchInput: React.FC = () => {
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
    <Form onSubmit={handleSubmit}>
      <Input
        aria-label="Search"
        type="text"
        placeholder="Search and press enter"
        value={search}
        onChange={handleChange}
      />
      <input type="submit" style={{ display: 'none' }} />
    </Form>
  )
}
