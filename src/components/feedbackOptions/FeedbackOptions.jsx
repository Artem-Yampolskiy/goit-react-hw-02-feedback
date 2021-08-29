import PropTypes from 'prop-types';
import styes from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <div className={StyleSheet.conteiner}>
                {options.map(option => (
                    <button
                        type="button"
                        key={option}
                        onClick={() => {
                            onLeaveFeedback(option);
                        }}
                        className={styes.button}>{option}</button>
                    

                ))
                }
            </div>
        </>
    );
};

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;