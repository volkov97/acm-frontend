import React, {Component} from 'react';

import MainMenu from './MainMenu/MainMenu';
import LoginMenu from './LoginMenu/LoginMenu';

require('./Admin.scss');

class Admin extends Component {
    static onEnter(nextState, replace) {
        // if (true) {
        //     replace('/login');
        // }
    }

    render() {
        return (
            <div className="Admin">
                <div className="mainWrap">
                    <MainMenu />
                    <div className="main">
                        <div className="main__login">
                            <LoginMenu />
                        </div>
                        <div className="main__content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;