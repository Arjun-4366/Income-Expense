
import IncomeExpenseGraph from './components/IncomeExpenseGraph';

function App() {
  
  const months = ['Jan','Feb','Mar','Apr','May','Jun']
  const income = [12000,11000,10000,13000,14000,12300]
  const expense = [10000,13000,12000,8000,10000,14000]
 

  return (

    <div className="p-48">
      <IncomeExpenseGraph months={months} income ={income} expense = {expense} />
    </div>
  );
}

export default App;
