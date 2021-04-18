import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Layout from './components/Layout/Layout';
import SignUp from './containers/SignUp';

function App() {
  return (
    <div className="App">
      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
}

export default App;
