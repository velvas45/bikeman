import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes'
import { AuthProvider } from './context/AuthContext'
import {ProductProvider} from './context/ProductContext'
import { BrowserRouter } from 'react-router-dom';
import {cart, initState} from './store/cart'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <ProductProvider initialState={initState} reducer={cart}>
        <BrowserRouter>
          <div className="App">
            <Routes/>
          </div>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
