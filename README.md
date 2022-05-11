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
```
