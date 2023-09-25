import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} address={address} />
    </>
  );
}

const Greeting = memo(function Greeting(props) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{props.name && ', '}{props.name}! from {props.address}</h3>;
});
