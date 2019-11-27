import React from 'react'
import { Image, Photo } from './components/Image'
import { List } from './components/List'
import { ListItem } from './components/ListItem'
import { FlickrAPIClient } from './utils/APIClient'

class App extends React.Component {
  public state = {
    photos: [],
    searchText: 'cars',
    total: 0,
  }
  public componentDidMount() {
    const { searchText } = this.state
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.search',
      tags: searchText,
    })
      .then((data: any) =>
        this.setState({
          photos: data.photos.photo,
          total: data.photos.total,
        })
      )
      .catch((error: any) => console.error(error))
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
          <List>
            {this.state.photos.map((photo: Photo) => (
              <ListItem key={photo.id}>
                <Image photo={photo} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    )
  }

  private search = (e: any) => {
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.search',
      tags: e.target.value,
    })
      .then((data: any) =>
        this.setState({
          photos: data.photos.photo,
          total: data.photos.total,
        })
      )
      .catch((error: any) => console.error(error))
  }
}

export default App
