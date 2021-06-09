import LRU from 'lru-cache'
import md5 from 'md5'
import axios from 'axios'

const cache = new LRU(50)
const defaultProcessResponse = (response: any) => response.data

interface FetchOptions {
  auth: {
    username: string
    password: string
  }
}
type ProcessResponse = (response: any) => object

interface FetchPromiseProps {
  url: string
  fetchOptions: FetchOptions
  processResponse?: ProcessResponse
}

const useFetchPromise = ({ url, fetchOptions, processResponse = defaultProcessResponse }: FetchPromiseProps) => {
  const key = `${url}.${md5(JSON.stringify(fetchOptions))}`
  const value: any =  cache.get(key) || { status: 'new', data: null }

  if (value.status === 'resolve') {
    return value.data
  }

  const promise = axios.get(url, fetchOptions).then((response) => processResponse(response))
  promise.then((data) => {
    value.status = 'resolve'
    value.data = data
    cache.set(key, value)
  })

  throw promise
}

export default useFetchPromise
