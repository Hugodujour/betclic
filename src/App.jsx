import "./assets/styles/App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Pari from "./components/Pari";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <div className="d-flex justify-content-between">
        <Sidebar />
        <Pari />
      </div>
    </>
  );
}

export default App;
