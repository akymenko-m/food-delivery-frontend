import React, { lazy, Suspense } from 'react';
import 'App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const LazyHeader = lazy(() => import('components/Header/Header'));
const LazyHome = lazy(() => import('pages/HomePage/HomePage'));
const LazyCartPage = lazy(() => import('pages/CartPage/CartPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHeader />}>
            <Route index element={<LazyHome />} />
            <Route path="/cart" element={<LazyCartPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
