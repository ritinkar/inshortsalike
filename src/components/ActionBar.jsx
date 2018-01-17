import React from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import BookmarkButton from './BookmarkButton';


class ActionBar extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LikeButton />
                <DislikeButton />
                <BookmarkButton />
            </div>)
    }
}

export default ActionBar;