import React from 'react';
import './userPage.module.css';

const UserPage: React.FC = () => {
    const user = {
        username: 'catlover123',
        fullName: 'Cat Lover',
        bio: 'I love cats! 🐱',
        profilePicture: 'https://via.placeholder.com/150',
        posts: 120,
        followers: 300,
        following: 180,
    };

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