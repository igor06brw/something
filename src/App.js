import './App.css';
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
