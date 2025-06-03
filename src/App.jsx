import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import nprogress from 'nprogress'

import routes from '~react-pages'
import Portfolio from './components/Portfolio'
import { AppProvider } from './contexts/AppContext'


function App() {
         return (
    <AppProvider>
      <Portfolio />
    </AppProvider>
  )
}

export default App
