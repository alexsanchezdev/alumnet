import axios, { AxiosInstance } from 'axios'

const API_KEY = 'baf55b89d2abbbd1f642ecdefa7d058b'

interface APIClient {
  get(path: string, params?: any): Promise<any>
}

class AxiosAPIClient implements APIClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: `https://www.flickr.com/services/rest`,
      timeout: 3000,
    })
  }

  public get(path: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.instance
        .get(path, {
          params: {
            ...params,
            api_key: API_KEY,
            format: 'json',
            nojsoncallback: '?',
          },
        })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }
}

export const FlickrAPIClient = new AxiosAPIClient() as APIClient
