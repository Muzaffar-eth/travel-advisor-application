import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
// Get the element with id 'root' from the HTML

const root = createRoot(rootElement);
root.render(<App />);
