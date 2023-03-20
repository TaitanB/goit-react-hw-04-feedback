import { Component } from 'react';
import { FeedbacksAdd } from './Feedbacks/Buttons';
import { Statistics } from './Feedbacks/Statistics';
import { Wrapper } from './Feedbacks/Feedbacks.styled';

export class App extends Component {
  static defaultProps = {
    initValue: 0,
  };

  state = {
    good: this.props.initValue,
    neutral: this.props.initValue,
    bad: this.props.initValue,
  };

  onAddFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  positiveFeedbackPerc = () => {
    return this.totalFeedback() > 0
      ? `${Math.round((this.state.good / this.totalFeedback()) * 100)}%`
      : `0%`;
  };

  render() {
    const names = Object.keys(this.state);
    const stats = this.state;
    const total = this.totalFeedback();
    const positivePerc = this.positiveFeedbackPerc();

    return (
      <Wrapper>
        <h1>Please leave feedback</h1>
        <FeedbacksAdd onAddFeedback={this.onAddFeedback} options={names} />

        {total ? (
          <Statistics stats={stats} total={total} positivePerc={positivePerc} />
        ) : (
          <h2>There is no feedback</h2>
        )}
      </Wrapper>
    );
  }
}
