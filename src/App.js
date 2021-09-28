import './App.css';
import Card from './components/Card/Card';

function App() {
  const items = [
    {name: 'first item', description: 'habi jabi gubi kobi khabi pabi', img: 'https://avatars.githubusercontent.com/u/6853419?s=200&v=4'},
    {name: 'first item', description: 'habi jabi gubi kobi khabi pabi', img: 'https://avatars.githubusercontent.com/u/6853419?s=200&v=4'},
    {name: 'first item', description: 'habi jabi gubi kobi khabi pabi', img: 'https://avatars.githubusercontent.com/u/6853419?s=200&v=4'},
    {name: 'first item', description: 'habi jabi gubi kobi khabi pabi', img: 'https://avatars.githubusercontent.com/u/6853419?s=200&v=4'}
  ]
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          items.map(item => <Card item={item}></Card>)
        }
    </div>
    
  );
}

/*  <div className="App">
       <h1>React ola Ami</h1>
       <button type="button" className="btn btn-primary">Primary</button>
           <button type="button" className="btn btn-secondary">Secondary</button>
           <button type="button" className="btn btn-success">Success</button>
           <button type="button" className="btn btn-danger">Danger</button>
           <button type="button" className="btn btn-warning">Warning</button>
           <button type="button" className="btn btn-info">Info</button>
           <button type="button" className="btn btn-light">Light</button>
           <button type="button" className="btn btn-dark">Dark</button>
           <button type="button" className="btn btn-link">Link</button>
     </div> */

export default App;
