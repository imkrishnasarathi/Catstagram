import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    styled,
} from '@mui/material';
import {
    Favorite as FavoriteIcon,
    Share as ShareIcon,
    Comment as CommentIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

const PostSection: React.FC = () => {
    return (
        <StyledCard>
            {/* Post Header */}
            <CardHeader
                avatar={<Avatar alt="User Name" src="/static/images/avatar/1.jpg" />}
                title="John Doe"
                subheader="January 3, 2025"
            />

            {/* Post Image/Media */}
            <CardMedia
                component="img"
                height="194"
                image="https://via.placeholder.com/600x300" // Replace with actual post image
                alt="Post Content"
            />

            {/* Post Content */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This is a sample post description. It’s an awesome day to share some cool content with the world!
                </Typography>
            </CardContent>

            {/* Post Actions */}
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </StyledCard>
    );
};

export default PostSection;
