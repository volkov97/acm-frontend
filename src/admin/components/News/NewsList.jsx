import React, {Component} from 'react';

import Block from '../Layouts/BlockComponent/Block';
import WidgetTable from '../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../core/config/general.config';

const PUBLISH_STATUS = 1;

class NewsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {},
            buttons: [
                {
                    action: '/news/create',
                    name: 'Добавить',
                    type: 'link',
                    style: 'green'
                }
            ]
        }
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список добавленных новостей');

        fetch(`${config.server}/news`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState({
                    table: {
                        fields: [
                            'Название',
                            'Просмотры',
                            'Публикация',
                            'Добавление'
                        ],
                        data: _['_embedded']['news'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return {
                                    id: _.id,
                                    actions: {
                                      update: '/news/update'
                                    },
                                    cells: [
                                        _.titleRU,
                                        _.views,
                                        this.convertStatusToCountryFlag(_.statusRU, _.statusEN),
                                        createdAt
                                    ]
                                }
                            }
                        )
                    }
                });
                this.props.updateLoadedStatus(true, 1);
            });
    };

    convertStatusToCountryFlag = (statusRU, statusEN) => {
        return (
            <div className="flagged">
                {statusRU == PUBLISH_STATUS &&
                <div className="flagged__item ru"></div>
                }
                {statusEN == PUBLISH_STATUS &&
                <div className="flagged__item en"></div>
                }
            </div>
        )
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="News">
                    <Block title="Список новостей" showButtons buttons={this.state.buttons}>
                        <WidgetTable table={this.state.table}/>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default NewsList;