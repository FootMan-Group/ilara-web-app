import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import CustomerLogin from './pages/CustomerLoginPage';
import ProductsView from './pages/ProductsView';
import AllCustomersView from './pages/ViewAllCustomers';
import AllTransactionsView from './pages/ViewAllTransactions';
import ViewAllServices from './pages/ViewAllServices';
import CustomerProfile from './components/customers/CustomerProfile';
import CustomerServicesPage from './pages/CustomerServicesPage';
import CustomerTransactions from './pages/CustomerTransactions';
import CreateCustomer from './pages/CreateCustomer';
import ServicePage from './pages/createService';
import CreateProductPage from './pages/CreateProductPage';
import CustomerServicePage from './pages/CustomerCreateService';

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
              <Route path="/customer/me" element={<CustomerProfile />} />
              <Route path="/customer/services" element={<CustomerServicesPage />} />
              <Route path="/customer/transactions" element={<CustomerTransactions />} />
              <Route path="/customers/create" element={<CreateCustomer />} />
              <Route path="/services/create" element={<ServicePage />} />
              <Route path="/products/create" element={<CreateProductPage />} />
              <Route path="/customer/service/create" element={<CustomerServicePage />} />
          </Routes>
      </Router>
  );
}

export default App;
