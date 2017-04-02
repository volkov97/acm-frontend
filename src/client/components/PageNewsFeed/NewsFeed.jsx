import React, {Component} from 'react';
import News from '../NewsList/NewsList';
import Breadcrumbs from '../Widgets/Breadcrumbs/Breadcrumbs';

require('./NewsFeed.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_2.jpg');
let pageParams = {};

class AllNews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            article: {},
            breadcrumbs: []
        }
    }

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    componentWillMount = () => {
        this.setState({
            breadcrumbs: [
                {
                    link: '/news',
                    name: ['Новости', 'News']
                }
            ]
        })
    };

    render = () =>
        (
            <div className="AllNews">
                <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
                <News isLoaded={this.props.isLoaded} updateLoadedStatus={this.props.updateLoadedStatus}></News>
            </div>
        )
}

export default AllNews;