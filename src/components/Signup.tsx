import { useState } from "react";
import { account } from "../appwrite";
import { ID } from "appwrite";

function SignUp(){
    const [userName, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.create(ID.unique(), email, password, userName);
            alert('Account created successfully');
        } catch (error) {
            alert('Failed to create account');
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userName} onChange={(e) => setUserId(e.target.value)} placeholder="Username" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;