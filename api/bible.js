import request from '@/plugins/axios.js'

export function fetchBooks(query) {
  return request({
    url: 'bibles/2dd568eeff29fb3c-01/books',
    method: 'get',
    params: query
  })
}