import { useState } from "react";
import { account } from "../appwrite";
import "./Login.css"

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.createSession(email, password);
            alert('Logged in successfully');
        } catch (error) {
            alert('Failed to login');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;