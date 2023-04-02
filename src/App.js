import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import CustomerLogin from "./pages/CustomerLoginPage";
import ProductsView from './pages/ProductsView';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/employee/login" element={<EmployeeLoginPage />} />
              <Route path="/customers/login" element={<CustomerLogin />} />
              <Route path="/products" element={<ProductsView />} />
          </Routes>
      </Router>
  );
}

export default App;
