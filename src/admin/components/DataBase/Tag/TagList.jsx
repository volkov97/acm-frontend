import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../../core/config/general.config';

class TagList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {},
            buttons: [
                {
                    link: '/tags/create',
                    name: 'Добавить',
                }
            ]
        }
    }

    componentDidMount() {
        this.props.updateBlockTitle('Список тегов');

        fetch(`${config.server}/tags`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(data => {
                this.setState(_ => ({
                    table: {
                        fields: [
                            'Название rus',
                            'Название eng',
                            'Добавление'
                        ],
                        data: data['_embedded']['tags'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return [
                                    _.nameRU,
                                    _.nameEN,
                                    createdAt
                                ];
                            }
                        )
                    },
                    buttons: _.buttons
                }));
                this.props.updateLoadedStatus(true, 1);
            });
    }

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="News">
                    <Block title="Список тегов" showButtons externalLinks={this.state.buttons}>
                        <WidgetTable table={this.state.table}/>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default TagList;
