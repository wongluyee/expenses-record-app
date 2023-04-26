import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    // Get all the expenses and the month
    // const expenseMonth = expense.date.slice(5, 7);
    const expenseMonth = new Date(expense.date).getMonth();
    // Update the value of the appropriate data point by the expense amount
    // Go through all the expenses and sum up all the expenses for different months and assign the values to the appropriate months to the appropriate data points.
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (<Chart dataPoints={chartDataPoints}/>);
};

export default ExpensesChart;
