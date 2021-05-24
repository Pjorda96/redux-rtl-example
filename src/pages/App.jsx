import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../services/internationalization/i18n';

import Spinner from "../components/Spinner";
const Navbar = lazy(() => import('../components/Navbar'));

const About = lazy(() => import('./About'));
const Users = lazy(() => import('./Users'));
const Home = lazy(() => import('./Home'));

export default function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Spinner />}>
          <Navbar />
        </Suspense>

        <Switch>
          <Route path="/about/:word?">
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          </Route>

          <Route path="/users">
            <Suspense fallback={<Spinner />}>
              <Users />
            </Suspense>
          </Route>

          <Route path="/">
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
