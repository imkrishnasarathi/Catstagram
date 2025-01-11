import React, { useState } from 'react';
import Navbar from './Navbar';
import FooterBar from './footerBar';
import PostSection from './postSection';
import PostModal from './postModal.tsx';
import { styled, Modal } from '@mui/material';

const PageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
    flex: 1, 
    paddingBottom: theme.spacing(8),
}));

function Home() {
    const [isModalOpen, setModalOpen] = useState(false); 

    const handleAddContent = () => {
        setModalOpen(true); 
    };

    return (
        <PageContainer>
            <Navbar />
            <ContentWrapper>
                <PostSection />
                <Modal open={isModalOpen} onClose={() => setModalOpen(false)}> 
                    <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> 
                </Modal>
            </ContentWrapper>
            <FooterBar onAddContent={handleAddContent} /> 
        </PageContainer>
    );
}

export default Home;
