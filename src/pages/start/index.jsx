
import React, {PropTypes} from 'react';

import styles from './style.css';

import Pong from '../../components/Pong';

const Start = React.createClass({

    render() {
        return <div className={styles.container} >
            Awesome start page
            <Pong/>
        </div>
    }

});

export default Start;