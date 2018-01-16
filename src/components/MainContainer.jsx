import React from 'react';
import { fetchData } from '../actions/data';
import { connect } from 'react-redux';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }


  render() {
    return (
        <h1>hello world</h1>
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



export default connect(null, mapDispatchToProps)(MainContainer);

