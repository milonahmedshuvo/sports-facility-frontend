// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './layout/routes.tsx'
// import { Provider } from 'react-redux'
// import { store } from './redux/store.ts'
// import { Toaster } from 'react-hot-toast'
// import ScrollToTop from './sheared/ScrollToTop.tsx'




// createRoot(document.getElementById('root')!).render(
//   // <StrictMode>
     
//     <Provider store={store} > 
//     <RouterProvider router={router} ></RouterProvider>
//      <ScrollToTop/>
//     <Toaster />
//     </Provider>
  
// )



import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './layout/routes.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './sheared/ScrollToTop.tsx';
import { AuthProvider } from './AuthContext/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
        <ScrollToTop />
        <Toaster />
    </AuthProvider>
  </Provider>
  // </StrictMode>
);
