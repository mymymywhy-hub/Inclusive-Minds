import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// HashRouter (not BrowserRouter) so this works both as a statically-hosted
// site with no server-side rewrite rules, and packaged into the Android app
// via Capacitor, which loads index.html from local storage.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
