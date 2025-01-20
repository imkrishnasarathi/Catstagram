import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './userPage.module.css';
import { account } from '../appwrite';

const UserPage: React.FC = () => {
    const { username } = useParams();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await account.get();
                setUser({
                    username: userData.name || username,
                    profilePicture: 'https://via.placeholder.com/150',
                    posts: 120,
                    followers: 300,
                    following: 180,
                });
            } catch (error) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div className="user-page">
            <div className="profile-header">
                <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                <div className="profile-info">
                    <h2>{user.username}</h2>
                    <p>{user.fullName}</p>
                    <p>{user.bio}</p>
                </div>
            </div>
            <div className="profile-stats">
                <div>
                    <strong>{user.posts}</strong> posts
                </div>
                <div>
                    <strong>{user.followers}</strong> followers
                </div>
                <div>
                    <strong>{user.following}</strong> following
                </div>
            </div>
        </div>
    );
};

export default UserPage;
