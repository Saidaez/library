import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClientForm from "./components/ClientForm";
import LivreList from "./components/LivreList";
import EmpruntForm from "./components/EmpruntForm";
import NotificationList from "./components/NotificationList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<ClientForm />} />
        <Route path="/livre" element={<LivreList />} />
        <Route path="/emprunt" element={<EmpruntForm />} />
        <Route path="/notification" element={<NotificationList />} />
      </Routes>
    </div>
  );
}

export default App;
