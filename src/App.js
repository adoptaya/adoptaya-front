
import './App.css';
import {Container} from './views/Container/container';
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;

});

function App() {
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
