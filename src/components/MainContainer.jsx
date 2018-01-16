import React from 'react';
import { fetchData } from '../actions/data';
import { connect } from 'react-redux';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }

  //Since We fetch the dummy data during the first render of MainContainer 
  //and there's nothing to modify we don't want it to re-render
  shouldComponentUpdate() {
      return false;
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

