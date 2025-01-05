import Navbar from './Navbar';
import FooterBar from './footerBar';
import PostSection from './postSection';
import { styled } from '@mui/material';

const PageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
    flex: 1, 
    paddingBottom: theme.spacing(2), 
}));

function Home() {
    return (
        <PageContainer>
            <Navbar />
            <ContentWrapper>
                <PostSection />
            </ContentWrapper>
            <FooterBar />
        </PageContainer>
    );
}

export default Home;
