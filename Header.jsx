import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user, setUser }) {
  const handleLogout = () => setUser(null);

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>FeedForward</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li>
                <button onClick={handleLogout} style={styles.button}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#282c34', color: 'white' },
  logo: { margin: 0 },
  navList: { listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0, alignItems: 'center' },
  button: { backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '5px 10px', cursor: 'pointer' },
};

export default Header;
