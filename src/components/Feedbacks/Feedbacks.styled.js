import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 340px;
  padding: 30px;
  border-radius: 20px;
  margin: 50px auto;
  background-color: rgb(201 193 233);
  justify-content: center;
`;

export const FeedbackBtn = styled.button`
  padding: 10px 20px;
  background-color: rgb(85 99 143);
  color: bisque;
  margin: 20px 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1),
    0 0 30px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1),
    0 0 50px rgba(0, 0, 0, 0.1), 0 0 75px rgba(0, 0, 0, 0.1);

  ::first-letter {
    text-transform: uppercase;
  }

  :hover,
  :focus {
    scale: 0.9;
    background-color: rgb(85 40 153);
  }
`;

export const StatisticItem = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;

  ::first-letter {
    text-transform: uppercase;
  }
`;
