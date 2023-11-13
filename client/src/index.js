import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ConfigProvider 
      theme={{
        components:{
          Button:{
            colorPrimary:"#405138",
            colorPrimaryHover:"#405138",
            borderRadius:"2px",
            boxShadow:"none",
          },
        },
        token:{
          borderRadius:"2px",
          colorPrimary:"#405138",
        }
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);

reportWebVitals();