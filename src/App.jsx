import "./assets/styles/App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Pari from "./components/Pari";
import Sidebar from "./components/Sidebar";
import Sport from "./pages/Sport";

function App() {
  return (
    <>
      <div className="sticky-top">
        <Banner />
        <Header />
      </div>

      <div className="d-flex justify-content-between">
        <Sidebar />
        <div className="d-flex align-items-center justify-content-center flex-grow-1">
          <Sport />
        </div>

        <Pari />
      </div>
    </>
  );
}

export default App;
