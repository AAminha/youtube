import './App.css';
import Layout from './components/shared/Layout';
import {useState} from "react";

function App() {
  const [result, setResult] = useState(false);
  
  function onClick() {
    setResult(!result);
  }

  return (
    <Layout>
      <div>콘텐츠!</div>
    </Layout>
  );
}

export default App;
