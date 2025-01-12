import React, { useState } from 'react';
import { account } from '../appwrite.ts';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);

        try {
            const session = await account.createEmailPasswordSession(email, password); 
            console.log('Session created successfully:', session);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your Email Address"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
