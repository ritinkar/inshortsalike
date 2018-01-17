import React from 'react';
import { Header } from 'semantic-ui-react';

class TitleBar extends React.Component {

    render() {
        return (
            <div style={{ margin: 10 }}>
                <Header size='huge' textAlign='center'>inshortsalike</Header>
            </div>
        );
    }
}



export default TitleBar;

