import PropTypes from 'prop-types';

const LoadMore = ({onClick}) => {

    return <div className="block-button"><button className="button" onClick={onClick}>Load more</button></div>     
}

LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMore;