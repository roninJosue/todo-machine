import { TodoChart } from 'components/todo-chart';
import { INCOMPLETE, SECONDARY } from 'constants/colors';
export default {
  title: 'TODOS/Chart',
  component: TodoChart,
  tags: ['autodocs'],
  argTypes:{
  }
}

export const Example = {
  args:{
    data: [{name:'completed', value:10, color:SECONDARY}, {name:'uncompleted', value:5, color:INCOMPLETE}],
    chartObject: {
      cx:50,
      cy:50,
      startAngle:-90,
      innerRadius:40,
      outerRadius:50,
      paddingAngle:0
    }
  }
}
