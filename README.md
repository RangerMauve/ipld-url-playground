# ipld-url-playground
Messing around with IPLD URLs and different methods of escaping

## Example

```
> node example.js

ipld://bafytaffy/[example=whatever]foobar/path?hello=world [
  { name: '', specifiers: URLSearchParams {} },
  {
    name: 'foobar',
    specifiers: URLSearchParams { 'example' => 'whatever' }
  },
  { name: 'path', specifiers: URLSearchParams {} }
]
ipld://bafytaffy/hello/world/[foo=bar]?hello=world [
  { name: '', specifiers: URLSearchParams {} },
  { name: 'hello', specifiers: URLSearchParams {} },
  { name: 'world', specifiers: URLSearchParams {} },
  { name: '', specifiers: URLSearchParams { 'foo' => 'bar' } }
]
ipld://bafytaffy/%F0%9F%98%98/%2F/%5Bcheeky%3Dbreeky%5D/[hello=world]hello%20world?hello=world [
  { name: '', specifiers: URLSearchParams {} },
  { name: '😘', specifiers: URLSearchParams {} },
  { name: '/', specifiers: URLSearchParams {} },
  { name: '[cheeky=breeky]', specifiers: URLSearchParams {} },
  {
    name: 'hello world',
    specifiers: URLSearchParams { 'hello' => 'world' }
  }
]
```
