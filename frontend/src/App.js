import React, { useState, useEffect } from 'react';

function App() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  useEffect(() => { fetchBalance(); }, []);

  const fetchBalance = async () => {
    const res = await fetch('http://localhost:8080/wallet/balance');
    const data = await res.json();
    setBalance(data.balance);
  };

  const addFunds = async () => {
    const res = await fetch('http://localhost:8080/wallet/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount) })
    });
    const data = await res.json();
    setBalance(data.balance);
    setAmount('');
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>Wallet Balance: {balance}</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={addFunds} style={{ marginLeft: '10px' }}>Add Funds</button>
    </div>
  );
}

export default App;
