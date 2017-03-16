import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

require('./Header.scss');

class Header extends Component {
    render() {
        return (
            <div className="Header header">
                <div className="header__date date">
                    <div className="date__day">14</div>
                    <div className="date__month">Апр 2016</div>
                </div>
                <Link className="header__title" to={`news/${this.props.item.id}`}>БГУИР - в финале ACM ICPC</Link>
                <div className="news__info info">
                    <div className="info__item">
                        <div className="info__image info__image_views"/>
                        <div className="info__value">33</div>
                    </div>
                    <div className="info__item">
                        <div className="info__image info__image_langs"/>
                        <div className="info__value">рус</div>
                    </div>
                </div>
                {/*<div className="header__author author">
                    <span className="author__written">{this.props.lang.author}:</span>
                    <ul className="author__authors authors<">
                        <li className="authors__item">
                            <Link className="authors__link" to="#">Георгий Жуков</Link>
                        </li>
                    </ul>
                </div>*/}
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Header);
