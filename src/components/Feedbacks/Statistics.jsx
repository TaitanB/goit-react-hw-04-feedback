import React from 'react';
import PropTypes from 'prop-types';
import { StatisticItem } from './Feedbacks.styled';

export const Statistics = ({ stats, total, positivePerc }) => {
  return (
    <>
      <h2>Statistics</h2>
      {Object.keys(stats).map(stat => (
        <StatisticItem key={stat}>
          {stat}: {stats[stat]}
        </StatisticItem>
      ))}
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePerc}</StatisticItem>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
