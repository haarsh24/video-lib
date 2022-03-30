import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
