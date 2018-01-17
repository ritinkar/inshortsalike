import React from 'react';
import FontAwesome from 'react-fontawesome';

class LikeButton extends React.Component {
    render() {
        return (
            <div style={{ flex: 1, textAlign: 'center' }}>
                <FontAwesome name='thumbs-o-up' />
            </div>
        )
    }
}

export default LikeButton;