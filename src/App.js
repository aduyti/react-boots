import { Button, CardGroup } from 'react-bootstrap';
import './App.css';
import MyCard from './MyCard/MyCard';

function App() {
  return (
    <div className="App">
      <>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
      </>
      <CardGroup>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </CardGroup>
    </div>
  );
}

export default App;
