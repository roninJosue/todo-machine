import { TodoChart } from 'components/todo-chart';
import PropTypes from 'prop-types';
import {
  Completed,
  CompletedPercentage,
  CompletedText,
  Container,
} from './todo-completed.styles';

const chartObject = {
  cx: 50,
  cy: 50,
  startAngle: -90,
  innerRadius: 39,
  outerRadius: 50,
  paddingAngle: 0,
};
export const TodoCompleted = ({ data, percentageCompleted }) => {
  const text = `${percentageCompleted}%`;
  return (
    <Completed>
      <Container>
        <CompletedPercentage>{text}</CompletedPercentage>
        <CompletedText>Completed</CompletedText>
      </Container>
      <TodoChart data={data} chartObject={chartObject} />
    </Completed>
  );
};

TodoCompleted.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  percentageCompleted: PropTypes.string.isRequired,
};
