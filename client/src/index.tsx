import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loading from './components/Loading';
import { element } from './routes/AllRoutes';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"


const client = new QueryClient();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Suspense fallback={<Loading/>}>
<QueryClientProvider client={client}>
  <RouterProvider router={element}/>
  <ReactQueryDevtools />
</QueryClientProvider>
  </Suspense >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
