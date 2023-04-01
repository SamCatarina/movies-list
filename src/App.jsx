import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";

import List from "./components/List";
import Create from "./components/Create";
import Update from './components/Update';

const App = () => {
    return (
        <main>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
        </Routes>
        </main>

    )
}

export default App
