import React from 'react'
import { Image, Photo } from './components/Image'

const API_KEY = 'baf55b89d2abbbd1f642ecdefa7d058b'

class App extends React.Component {
  public state = {
    photos: [],
    searchText: 'cars',
    total: 0,
  }
  public componentDidMount() {
    const { searchText } = this.state
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchText}&format=json&nojsoncallback=?`
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          photos: response.photos.photo,
          total: response.photos.total,
        })
      })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                Search: <input type={'text'} onChange={this.search} />
              </li>
              <li>Total results: {this.state.total}</li>
              <li>Total images displayed: {this.state.photos.length}</li>
              <li>Favorites: </li>
            </ul>
          </nav>
        </header>
        <div>
          <ul>
            {this.state.photos.map((photo: Photo) => (
              <li key={photo.id} style={{ marginBottom: 30 }}>
                <Image photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  private search = (e: any) => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${e.target.value}&format=json&nojsoncallback=?`
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          photos: response.photos.photo,
          total: response.photos.total,
        })
      })
  }
}

export default App
