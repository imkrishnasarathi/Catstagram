import React, { useState } from 'react';
import { databases, account, storage } from '../appwrite';
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

            if (useAIImage && aiPrompt) {
                const aiGeneratedContent = new Blob([`Generated from prompt: ${aiPrompt}`], { type: 'text/plain' });

                const aiGeneratedFile = new File([aiGeneratedContent], 'ai-generated-image.txt', { type: 'text/plain' });

                const response = await storage.createFile(
                    '6783c0c200272f9370bf',
                    'unique()',
                    aiGeneratedFile
                );

                finalImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/6783c0c200272f9370bf/files/${response.$id}/view?project=YOUR_PROJECT_ID&mode=admin`;
            } else if (uploadFile) {
                const uploadedFile = await storage.createFile(
                    '6783c0c200272f9370bf',
                    'unique()',
                    uploadFile
                );

                finalImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/6783c0c200272f9370bf/files/${uploadedFile.$id}/view?project=YOUR_PROJECT_ID&mode=admin`;
            } else {
                alert('Please provide either an AI prompt or an image to upload.');
                return;
            }

            await databases.createDocument(
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
