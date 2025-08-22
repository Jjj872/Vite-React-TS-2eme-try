// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// export default App


// CE QUE JAI ESSAYE

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import './styles/header.scss';
// import './styles/footer.scss';

// function App() {
//   return (
//     <>
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Header from './components/Header';
import Footer from './components/Footer'; 
import './styles/header.scss';
import './styles/footer.scss';

function App() {
  return (
    <Router>
        <Header />
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/Projects" element ={<Projects />} />
                <Route path="/About" element ={<About />} />
                <Route path="/Contact" element ={<Contact />} />
                <Route path="*" element ={<NotFound />} />
            </Routes>
        <Footer />
    </Router>
  );
}

export default App;