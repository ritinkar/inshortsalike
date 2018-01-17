import React from 'react';
import { fetchData } from '../actions/data';
import { connect } from 'react-redux';
import TitleBar from './TitleBar';
import ArticleCardGroup from './ArticleCardGroup';
import { BrowserRouter, Route } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
    }

    //Since We fetch the dummy data during the first render of MainContainer 
    //and there's nothing to modify we don't want it to re-render as that'll fetch 
    //the dummy data again
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <TitleBar />
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={ArticleCardGroup} />
                        <Route exact path="/:id" component={ArticleDetails} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchData())
        }
    }
}



export default connect(null, mapDispatchToProps)(Main);

