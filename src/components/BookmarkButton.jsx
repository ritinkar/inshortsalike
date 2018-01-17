import React from 'react';
import FontAwesome from 'react-fontawesome';

class BookmarkButton extends React.Component {
    render() {
        return (
            <div style={{ flex: 1, textAlign: 'center' }}>
                <FontAwesome name='bookmark-o' />
            </div>
        )
    }
}

export default BookmarkButton;