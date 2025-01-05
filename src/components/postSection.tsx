import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    Button,
    styled,
} from '@mui/material';
import {
    Favorite as FavoriteIcon,
    Share as ShareIcon,
    Comment as CommentIcon,
    ExpandMore as LoadMoreIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#2c2c2c', // Dark background
    color: '#ffffff', // White text
    marginBottom: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
}));

const Container = styled('div')(({ theme }) => ({
    maxWidth: '600px', // Restrict width
    margin: '0 auto',
    padding: theme.spacing(2),
}));

const LoadMoreButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    margin: '0 auto',
    marginTop: theme.spacing(2),
    color: '#ffffff',
    borderColor: '#ffffff',
    '&:hover': {
        backgroundColor: '#424242',
    },
}));

const PostSection: React.FC = () => {
    const [posts, setPosts] = useState(Array(6).fill(null)); // Initial posts
    const [loadingMore, setLoadingMore] = useState(false);

    const handleLoadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
            setPosts((prevPosts) => [...prevPosts, ...Array(3).fill(null)]); // Load more posts
            setLoadingMore(false);
        }, 1000); // Simulate load delay
    };

    return (
        <Container>
            {posts.map((_, index) => (
                <StyledCard key={index}>
                    <CardHeader
                        avatar={<Avatar alt="User Name" src="/static/images/avatar/1.jpg" />}
                        title="John Doe"
                        subheader="January 3, 2025"
                        sx={{ color: '#ffffff' }}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image="https://via.placeholder.com/600x400" // Replace with actual post image
                        alt="Post Content"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#b0b0b0' }}>
                            This is a sample post description. Sharing cool content with the world!
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="like" sx={{ color: '#ffffff' }}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="comment" sx={{ color: '#ffffff' }}>
                            <CommentIcon />
                        </IconButton>
                        <IconButton aria-label="share" sx={{ color: '#ffffff' }}>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </StyledCard>
            ))}
            <LoadMoreButton
                variant="outlined"
                startIcon={<LoadMoreIcon />}
                onClick={handleLoadMore}
                disabled={loadingMore}
            >
                {loadingMore ? 'Loading...' : 'Load More'}
            </LoadMoreButton>
        </Container>
    );
};

export default PostSection;
