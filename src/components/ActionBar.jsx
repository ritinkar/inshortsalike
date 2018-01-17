import React from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import BookmarkButton from './BookmarkButton';


class ActionBar extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LikeButton id={this.props.id} isLiked={this.props.isLiked}/>
                <DislikeButton id={this.props.id} isLiked={this.props.isLiked}/>
                <BookmarkButton id={this.props.id} isBookmarked={this.props.isBookmarked} />
            </div>)
    }
}

export default ActionBar;