import 'bootswatch/dist/lux/bootstrap.min.css';

import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'
import ReactGA from 'react-ga';


import LoadingPage from 'components/LoadingPage'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

class App extends React.Component {
  componentDidMount() {
    document.title = 'Simen Fivelstad Smaaberg - Software Developer'
    ReactGA.initialize('UA-166313409-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  
  render() {
    return (
      <Root>
        <div className="content">
          <React.Suspense fallback={<LoadingPage></LoadingPage>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    );
  }
}

export default App
