import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlienModelRender from "./components/AlienModel/AlienModelRender";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AlienModelRender />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
