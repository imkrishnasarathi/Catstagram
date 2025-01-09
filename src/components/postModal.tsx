import React, { useState } from 'react';
import { databases, account } from '../appwrite';

const PostModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userId = (await account.get()).$id;

            const response = await databases.createDocument(
                '677ea3cd002765dfe707',
                '677fca0b0031ef813d45',
                'unique()',
                {
                    userId,
                    imageUrl,
                    caption,
                    createdAt: new Date().toISOString(),
                }
            );
            console.log('Post created:', response);
            onClose(); // Close the modal after submission
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create a New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="caption">Caption:</label>
                        <textarea
                            id="caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit Post</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
