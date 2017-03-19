import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';

class CreateChamps extends React.Component {
    componentDidMount = () => {
        this.props.updateBlockTitle('Добавление чемпионат');
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () =>
        <div className="CreateChamps">
            <Block title="Добавить чемпионат">
                <WidgetRow title="Название" name="news_title" isRequired>
                    <WidgetInput name="news_title"/>
                </WidgetRow>
                <WidgetRow title="Url" name="news_url" isRequired>
                    <WidgetInput name="news_url"/>
                </WidgetRow>
            </Block>
        </div>
}

export default CreateChamps;
