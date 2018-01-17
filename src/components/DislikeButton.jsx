import React from 'react';
import FontAwesome from 'react-fontawesome';

class DislikeButton extends React.Component {
    render() {
        return (
            <div style={{ flex: 1, textAlign: 'center' }}>
                <FontAwesome name='thumbs-o-down' />
            </div>
        )
    }
}

export default DislikeButton;