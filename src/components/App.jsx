import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Container } from './AppStyled';
import { GlobalStyles } from 'GlobalStyles';
import { useState } from 'react';

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const addFeedback = e => {
    const option = e.target.name;
    switch (option) {
      case 'good':
        setGoodFeedback(prevGoodFeedback => prevGoodFeedback + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevNeutralFeedback => prevNeutralFeedback + 1);
        break;
      case 'bad':
        setBadFeedback(prevBadFeedback => prevBadFeedback + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodFeedback / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onFeedbackCklick={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Statistics
            goodFeedback={goodFeedback}
            neutralFeedback={neutralFeedback}
            badFeedback={badFeedback}
            totalFeedbacks={countTotalFeedback()}
            goodFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;
