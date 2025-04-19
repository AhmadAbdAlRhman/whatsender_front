import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EditAboutPage from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode class="full-width pt-120 pb-120" style="padding: 10% 2%;">
    <EditAboutPage />
   
  </StrictMode>,
)
