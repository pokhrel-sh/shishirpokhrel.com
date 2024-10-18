
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/skills" element={<Skills />} />
//   </Routes>
// )


const App: React.FC = () => {
  return (
      <Home />
  );
};

export default App;
