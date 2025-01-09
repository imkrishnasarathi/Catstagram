import React, { useState } from 'react';
import Navbar from './Navbar';
import FooterBar from './footerBar';
import PostSection from './postSection';
import PostModal from './postModal';
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

    return (
        <PageContainer>
            <Navbar />
            <ContentWrapper>
                <PostSection />
                <button onClick={() => setModalOpen(true)}>Create Post</button> 
                <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> 
            </ContentWrapper>
            <FooterBar />
        </PageContainer>
    );
}

export default Home;
