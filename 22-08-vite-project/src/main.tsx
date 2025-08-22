// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';
import './styles/header.scss'
import './styles/footer.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
);