import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingNews} from '../../actions/news';

import NewsList from './NewsList';

const mapStateToProps = (state) => {
    return {
        news: state.news,
        langs: state.langs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingNews: bindActionCreators(handleLoadingNews, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);