import React from 'react';
import { Image, Header, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ActionBar from './ActionBar';
import { Link } from 'react-router-dom';

class ArticleDetails extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Button content='Go Back' style={styles.button} as={Link} to='/' />
                <Divider />
                <Image src={this.props.article.Image} style={styles.image} />
                <Header size='huge' textAlign='center'>{this.props.article.Title}</Header>
                <ActionBar id={this.props.article.id} isBookmarked={this.props.article.isBookmarked} isLiked={this.props.article.isLiked} />
                <div style={styles.description}>
                    <p>
                        {this.props.article.Description}
                    </p>
                </div>


            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        article: state.data.filter((article) => article.id === parseInt(ownProps.match.params.id, 10))[0]
    }
}

const styles = {
    container: {
        marginLeft: '10%',
        marginRight: '10%'
    },
    image: {
        width: 450,
        height: 300,
        objectFit: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
    description: {
        margin: '10%',

    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
}

export default connect(mapStateToProps, null)(ArticleDetails)