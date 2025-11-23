import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterWrapper} from './shared/router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterWrapper />
  </StrictMode>,
)
