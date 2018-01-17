import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ActionBar from './ActionBar';

class ArticleDetails extends React.Component {
    render() {
        return (
            <div style={styles.container}>
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
        margin: '10%'

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
        margin: '10%'
    }
}

export default connect(mapStateToProps, null)(ArticleDetails)