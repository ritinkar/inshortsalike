import React from 'react';
import FontAwesome from 'react-fontawesome';
import { like } from '../actions/data';
import { connect } from 'react-redux';

class LikeButton extends React.Component {

    //Prevent default behaviour of clicking on this icon
    //since this item may be inside a anchor tag like the card in the home page
    handleClick(e) {
        e.preventDefault();
        this.props.onClick(this.props.id);
    }

    render() {
        let icon = null;
        if (this.props.isLiked === 1) {
            icon = <FontAwesome name='thumbs-up' style={styles.active} />
        }
        else {
            icon = <FontAwesome name='thumbs-up' />
        }
        return (
            <div style={{ flex: 1, textAlign: 'center' }} onClick={(e) => this.handleClick(e)}>
                {icon}
            </div>
        )
    }
}

const styles = {
    active: {
        color: 'blue'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(like(id))
        }
    }
}



export default connect(null, mapDispatchToProps)(LikeButton);
