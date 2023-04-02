import { FeedbacksAdd } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Wrapper } from './Wrapper.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import React, { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = {
    good,
    neutral,
    bad,
  };

  const onAddFeedback = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        throw new Error('Error');
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = stats;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = stats;
    return countTotalFeedback() > 0
      ? `${Math.round((good / (good + neutral + bad)) * 100)}%`
      : `0%`;
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbacksAdd
          onAddFeedback={onAddFeedback}
          options={Object.keys(stats)}
        />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            stats={stats}
            total={countTotalFeedback()}
            positivePerc={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </Wrapper>
  );
};