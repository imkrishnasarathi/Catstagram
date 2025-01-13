import React, { useState } from 'react';
import { databases, account, storage } from '../appwrite';
import { Permission, Role } from 'appwrite';
import './postModal.css';

const PostModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [caption, setCaption] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');
    const [uploadFile, setUploadFile] = useState<File | null>(null);
    const [useAIImage, setUseAIImage] = useState(false);

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const userId = (await account.get()).$id;
            let finalImageUrl = '';
            
            const validPrompt = /cat|kitten|feline/i.test(aiPrompt);
            if (useAIImage && aiPrompt && validPrompt) {
                const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(aiPrompt)}`;
                
                const response = await fetch(imageUrl);
                if (response.ok) {
                    const imageBlob = await response.blob();
                    const imageFile = new File([imageBlob], 'ai-generated-image.jpg', { type: 'image/jpeg' });

                    const uploadedFile = await storage.createFile(
                        '6783c0c200272f9370bf',
                        'unique()',
                        imageFile,
                    );

                    finalImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/6783c0c200272f9370bf/files/${uploadedFile.$id}/view?project=6774db4f0019e0f9e984&mode=admin`;
                } else {
                    alert('Failed to generate image. Please try again.');
                    return;
                }
            } else if (uploadFile) {
                const uploadedFile = await storage.createFile(
                    '6783c0c200272f9370bf', // Bucket ID
                    'unique()', // Unique file ID
                    uploadFile,
                );

                finalImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/6783c0c200272f9370bf/files/${uploadedFile.$id}/view?project=6774db4f0019e0f9e984&mode=admin`;
            } else {
                alert('Please provide a valid AI prompt or upload an image.');
                return;
            }

            // await databases.createDocument(
            //     '677ea3cd002765dfe707', 
            //     '677fca0b0031ef813d45',
            //     'unique()', 
            //     {},
            //     // {
            //     //     // userId: userId,
            //     //     imageUrl: finalImageUrl,
            //     //     caption,
            //     //     createdAt: new Date().toISOString(),
            //     // },
            //     permissions
            // );

            alert('Post created successfully!');
            onClose();
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div id="postModal" className="modal">
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="caption">Post Caption:</label>
                    <textarea
                        id="caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        required
                    />
                </div>
                <div className="image-options">
                    <button
                        type="button"
                        onClick={() => {
                            setUseAIImage(true);
                            setAiPrompt('');
                            setUploadFile(null);
                        }}
                    >
                        Use AI Image
                    </button>
                </div>
                {useAIImage ? (
                    <div>
                        <label htmlFor="aiPrompt">AI Image Prompt:</label>
                        <input
                            type="text"
                            id="aiPrompt"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            required
                        />
                        <p>Ensure your prompt contains words like "cat" or related terms.</p>
                    </div>
                ) : (
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
                <button type="button" onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default PostModal;
