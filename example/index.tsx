import 'react-app-polyfill/ie11';

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { AppearanceProvider } from '../';

import App from './src/App';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
);
