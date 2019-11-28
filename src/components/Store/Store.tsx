import React from 'react'

interface ProviderValues {
  favoritesCount: number
  photosCount: number
  totalPhotosCount: number
  isSearching: boolean
  setFavoritesCount: (value: number) => void
  setPhotosCount: (current: number, total: number) => void
  setIsSearching: (value: boolean) => void
}

export const StoreContext = React.createContext<ProviderValues>({
  favoritesCount: 0,
  photosCount: 0,
  totalPhotosCount: 0,
  isSearching: false,
  setFavoritesCount: (value: number) => null,
  setPhotosCount: (current: number, total: number) => null,
  setIsSearching: (value: boolean) => null,
})

export class StoreProvider extends React.Component {
  public state = {
    favoritesCount: 0,
    photosCount: 0,
    totalPhotosCount: 0,
    isSearching: false,
  }

  public render() {
    const {
      favoritesCount,
      photosCount,
      totalPhotosCount,
      isSearching,
    } = this.state
    return (
      <StoreContext.Provider
        value={{
          favoritesCount,
          photosCount,
          totalPhotosCount,
          isSearching,
          setFavoritesCount: this.setFavoritesCount,
          setPhotosCount: this.setPhotosCount,
          setIsSearching: this.setIsSearching,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }

  private setFavoritesCount = (value: number) => {
    this.setState({ favoritesCount: value })
  }

  private setPhotosCount = (current: number, total: number) => {
    this.setState({ photosCount: current, totalPhotosCount: total })
  }

  private setIsSearching = (value: boolean) => {
    this.setState({ isSearching: value })
  }
}
