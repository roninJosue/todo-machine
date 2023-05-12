import { Chart, ChartContainer } from 'components/todo-chart/todo-chart.styles';
import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export const TodoChart = ({ data, chartObject }) => {
  const { startAngle, innerRadius, outerRadius, paddingAngle } = chartObject;
  return (
    <ChartContainer>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              startAngle={startAngle}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={paddingAngle}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={`cell-${entry.name}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Chart>
    </ChartContainer>
  );
};
TodoChart.propTypes = {
  /**
   * Data for create the chart
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  /**
   * Object with properties of the chart
   */
  chartObject: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired,
    outerRadius: PropTypes.number.isRequired,
    paddingAngle: PropTypes.number.isRequired,
  }).isRequired,
};
