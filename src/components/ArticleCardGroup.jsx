import React from 'react';
import ArticleCard from './ArticleCard';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'


class ArticleCardGroup extends React.Component {
    render() {
        return (
            <Card.Group textAlign='center'>
                {this.props.data.map((article) =>
                    <ArticleCard key={article.id}
                        Image={article.Image}
                        Title={article.Title}
                        id={article.id}
                        Description={article.Description}
                        isLiked={article.isLiked}
                        isBookmarked={article.isBookmarked} />

                )}
            </Card.Group>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}


export default connect(mapStateToProps, null)(ArticleCardGroup);