import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';

require('./News.scss');

class News extends Component {
    componentWillMount() {
        this.props.updateBlockTitle('Список добавленных новостей');
    }

    render() {
        return (
            <div className="News">
                <Block title="Список новостей">
                    <WidgetTable />
                </Block>
            </div>
        )
    }
}

export default News;