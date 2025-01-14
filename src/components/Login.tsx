import React, { useState } from 'react';
import { account, client } from '../appwrite.ts';
import styles from './Login.module.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);

        try {
            const session = await account.createEmailPasswordSession(email, password); 
            client.setJWT(session.$id);
            console.log('Session created successfully:', session);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className={styles.body}>
            <form className={styles.form} onSubmit={handleLogin}>
                <h1>Login to an existing account</h1>
                <input
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your Email Address"
                />
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                />
                <div>
                    <button className={styles.button} type="submit">Login</button>
                    <a href="/signup">Don't Have an Account?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
