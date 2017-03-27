import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import ArticleHeader from '../../ArticleComponents/HeaderComponent/Header';
import config from '../../../../core/config/general.config';
import devideProperties from '../../../../core/scripts/devidePropertiesByLanguage';

require('./News.scss');

let img = require('../../../../../static/images/backgrounds/bg_slider_2.jpg');

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: []
        }
    }

    componentDidMount = () => {
        fetch(`${config.server}/news`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.props.updateLoadedStatus(true, 1);
                let news = devideProperties(_['_embedded']['news']);
                this.setState({
                    news: news
                });
            });
    };

    render() {
        if (this.props.isLoaded()) {
            return (
                <div className="News">
                    <div className="newsList">
                        <header className="newsList__header">
                            <div className="newsList__title">Новости</div>
                        </header>
                        <div className="newsList__content">
                            <div className="newsList__list">
                                {this.state.news.map((item, index) =>
                                    item.status[this.props.lang.currentLangIndex] ?
                                        <div className="news" key={index}>
                                            <div className="news__header">
                                                <ArticleHeader item={item}/>
                                            </div>
                                            <div className="news__main">
                                                <Link to={`news/${item.systemName}`} className="news__image-link">
                                                    <img className="news__image" src={img}/>
                                                </Link>
                                                <div className="news__short-content">
                                                    {item.description[this.props.lang.currentLangIndex]}
                                                </div>
                                            </div>
                                        </div>
                                        : <div key={index}></div>
                                )}
                            </div>
                            <div className="newsList__actions actions">
                                <Link className="actions__moreBtn" to={`news`}>больше новостей</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(News);
