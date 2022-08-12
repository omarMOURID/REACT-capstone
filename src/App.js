import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div >
  );
}

export default App;
