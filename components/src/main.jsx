import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from '@/app';
import CustomConfigProvider from '@/assets/commons/theme/antD/ConfigProvider.jsx';
import '@/styles/global.css';
import AppRoutes from './pages/Routes';
import Routing from '@/routing';
import Navigation from '@/pages/Navigation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomConfigProvider>
      {/* <App /> */}

      <Routing routes={AppRoutes} layout={Navigation} />
    </CustomConfigProvider>
  </React.StrictMode>,
);
