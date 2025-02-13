import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './styles/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CartProvider } from "./Context/CartContext";  // ✅ Import CartProvider

// Initialize AOS animations
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>   {/* ✅ Wrap App inside CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
