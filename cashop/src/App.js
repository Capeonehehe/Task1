import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import routes from './utils/route';
import HomePage from './pages/homepage/HomePage'
import ProductPage from './pages/productpage/ProductPage'
import OderPage from './pages/oderpage/OderPage'
import NotFoundPage from './component/Default/NotFoundPage';
import { HeaderCoponent } from './component/Header/HeaderCoponent';

function App() {
  return (
    // chua map duoc!!
    // <Router>
    //   <Routes>
    //     {routes.map((route, index) => (
    //       <Route
    //         key={index}
    //         path={route.path}
    //         element={route.element}
    //       />
    //     ))}
    //    </Routes>
    //  </Router>
    // path thủ công 
  <div>
      <HeaderCoponent/>
     <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/oder' element={<OderPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  </div>
  );
}

export default App;
