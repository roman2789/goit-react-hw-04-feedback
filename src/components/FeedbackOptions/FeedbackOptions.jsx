import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackButtons } from './FeedbackOptionsStyled';

const FeedbackOptions = ({ options, onFeedbackCklick }) => {
  return (
    <FeedbackSection>
      {options.map(option => (
        <FeedbackButtons
          key={option}
          type="button"
          onClick={onFeedbackCklick}
          name={option}
        >
          {option}
        </FeedbackButtons>
      ))}
    </FeedbackSection>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackCklick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
