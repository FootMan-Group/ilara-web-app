import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import CustomerLogin from './pages/CustomerLoginPage';
import ProductsView from './pages/ProductsView';
import AllCustomersView from './pages/ViewAllCustomers';
import AllTransactionsView from './pages/ViewAllTransactions';
import ViewAllServices from "./pages/ViewAllServices";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/employee/login" element={<EmployeeLoginPage />} />
              <Route path="/customers/login" element={<CustomerLogin />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/customers/all" element={<AllCustomersView />} />
              <Route path="/transactions/all" element={<AllTransactionsView />} />
              <Route path="/services/all" element={<ViewAllServices />} />
          </Routes>
      </Router>
  );
}

export default App;
