import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsListAction } from './asyncActions/products';
import { fetchAllCategoriesAction } from './asyncActions/categories';
import ProductDescriptionPage from './pages/ProductDescriptionPage/ProductDescriptionPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import CategoriesList from './pages/CategoriesPage/CategoriesPage';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsListAction())
    dispatch(fetchAllCategoriesAction())
  }, [])


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/products/all" element={<ProductsListPage />} />
        <Route path="/products/sale" element={<ProductsListPage />} />
        <Route path="/products/:id" element={<ProductDescriptionPage />} />
        <Route path="/categories/:id" element={<ProductsListPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
