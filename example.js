import IPLDURL from './ipld-url.js'

const url1 = new IPLDURL('ipld://bafytaffy/[example=whatever]foobar/path?hello=world')

console.log(url1.href, url1.segments)

url1.segments = ['hello', 'world', { specifiers: 'foo=bar' }]

console.log(url1.href, url1.segments)

url1.segments = [
  '😘',
  '/',
  '[cheeky=breeky]',
  {
    name: 'hello world',
    specifiers: new URLSearchParams('hello=world')
  }
]

console.log(url1.href, url1.segments)
