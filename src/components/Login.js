// src/App.js
import React, { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('User not found');
            }

            const data = await response.json();
            console.log(data.mv_ctr_name)
            setUserDetails(data.mv_ctr_name);
            setError('');
        } catch (error) {
            setError(error.message);
            setUserDetails(null);
        }
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {userDetails && (
                <div>
                    <h2>User Details</h2>
                    <p>Username: {userDetails}</p>
                    {/* Add other user details here */}
                </div>
            )}
        </div>
    );
}

export default App;
