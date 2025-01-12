import React, { useState } from 'react';
import { databases, account } from '../appwrite';
import "./postModal.css";

const PostModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');
    const [uploadFile, setUploadFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const userId = (await account.get()).$id;

            let finalImageUrl = imageUrl;

            if (aiPrompt) {
                finalImageUrl = `https://dummy-ai-image.com?prompt=${encodeURIComponent(aiPrompt)}`;
            } else if (uploadFile) {
                const uploadUrl = await uploadImage(uploadFile);
                finalImageUrl = uploadUrl;
            }

            const response = await databases.createDocument(
                '677ea3cd002765dfe707',
                '677fca0b0031ef813d45',
                'unique()',
                {
                    userId,
                    imageUrl: finalImageUrl,
                    caption,
                    createdAt: new Date().toISOString(),
                }
            );

            console.log('Post created:', response);
            onClose(); 
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    const uploadImage = async (file: File) => {
        return `https://cdn.example.com/uploads/${file.name}`;
    };

    if (!isOpen) return null;

    return (
        <div id="postModal" className="modal">
            <div className="modal-content">
                <h2>Create a New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="caption">Caption:</label>
                        <textarea
                            id="caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            required
                        />
                    </div>
                    <div className="image-options">
                        <button type="button" onClick={() => setImageUrl('')}>
                            Use AI Image
                        </button>
                        <button type="button" onClick={() => setAiPrompt('')}>
                            Upload Image
                        </button>
                    </div>
                    {imageUrl && (
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
                    )}
                    {aiPrompt && (
                        <div>
                            <label htmlFor="aiPrompt">AI Image Prompt:</label>
                            <input
                                type="text"
                                id="aiPrompt"
                                value={aiPrompt}
                                onChange={(e) => setAiPrompt(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    {uploadFile && (
                        <div className="upload-section">
                            <label htmlFor="uploadFile">Upload an Image:</label>
                            <input
                                type="file"
                                id="uploadFile"
                                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit">Submit Post</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
