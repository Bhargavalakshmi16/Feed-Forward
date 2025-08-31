import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('donor');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setUser({ email, role });
      navigate('/dashboard');
    } else {
      alert('Enter your email');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '250px' }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="donor">Donor</option>
          <option value="volunteer">Volunteer</option>
          <option value="receiver">Receiver</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
