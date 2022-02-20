```js
export default function App() {
  return (
    <Header name="M23" links={["About", "Buy", "Contact"]}></Header>
  );
}
```

```js
export default function Header (props) {
  return (
    <header className='header'>
      <h1>{props.name}</h1>
      <Menu links={props.links}></Menu>
    </header>
  )
}
```

```js
export default function Menu (props) {
    
    return (
      <ul className='menu'>
        {props.links.map((link, index) => <li key={index}>{link}</li>)}
      </ul>
    )
  }
```

