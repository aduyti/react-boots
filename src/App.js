import { Button, CardGroup } from 'react-bootstrap';
import './App.css';
import MyCard from './MyCard/MyCard';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    // fontSize: '40px',
    // fontWeight: 'bold',
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 500,
    onRest: () => set(!flip),
  });
  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
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
