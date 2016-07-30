import React from 'react';
import Header from './components/header';

import styles from './rootStyle.css';

const Root = React.createClass({
    render() {
        return (
            <div className={styles.main}>
                <Header/>
                { this.props.children }
            </div>
        );
    }
});

export default Root