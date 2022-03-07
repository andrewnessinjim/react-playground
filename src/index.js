import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ColorCounter from './color-counter/ColorCounter';
import { MouseTracker } from './mouse-position-hoc/mousePosition';
import RenderPropsText from './render-props-text/renderPropsText';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/colorCounter" element={<ColorCounter/>}/>
        <Route path="/mousePosition" element={<MouseTracker/>}/>
        <Route path="/renderPropsText" element={<RenderPropsText/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
