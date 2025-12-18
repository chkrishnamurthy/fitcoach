import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { appRoutes } from './routers/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {appRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
