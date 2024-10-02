import './styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AntDConfigProvider from 'remoteComponents/AntDConfigProvider'
import Router from 'remoteComponents/router'
import AppRoutes from './pages/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AntDConfigProvider>
			<Router routes={AppRoutes} />
		</AntDConfigProvider>
	</React.StrictMode>
)
