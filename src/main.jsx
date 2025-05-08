import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import MainPage from './jsx/MainPage.jsx'
import PostWritePage from './jsx/PostWritePage.jsx'
import PostViewPage from "./jsx/PostViewPage.jsx";
import ScrollTop from './jsx/ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <ScrollTop></ScrollTop>
    <Routes>
        <Route index element={<MainPage />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/post/:id" element={<PostViewPage />} />
    </Routes>
</BrowserRouter>
)
