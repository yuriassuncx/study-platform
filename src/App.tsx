import { BrowserRouter } from 'react-router-dom';
import { Router } from './utils/Router';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Router />
      </BrowserRouter>
    </div>
  )
}
