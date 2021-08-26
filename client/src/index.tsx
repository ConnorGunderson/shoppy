import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

import './css/globals.css'
import './css/tailwind.css'

import { App } from './App'
import { store } from './store'
import { client } from './apollo'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
