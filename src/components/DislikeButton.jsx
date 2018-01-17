import React from 'react';
import FontAwesome from 'react-fontawesome';
import { dislike } from '../actions/data';
import { connect } from 'react-redux';

class DislikeButton extends React.Component {

    render() {
        let icon = null;
        if (this.props.isLiked === -1) {
            icon = <FontAwesome name='thumbs-down' style={styles.active} />
        }
        else {
            icon = <FontAwesome name='thumbs-down' />
        }
        return (
            <div style={{ flex: 1, textAlign: 'center' }} onClick={() => this.props.onClick(this.props.id)}>
                {icon}
            </div>
        )
    }
}

const styles = {
    active: {
        color: 'green'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(dislike(id))
        }
    }
}



export default connect(null, mapDispatchToProps)(DislikeButton);
