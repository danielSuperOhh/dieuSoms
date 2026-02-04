import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Trending from "./pages/Trending";
// import Checkout from "./pages/Checkout"; // later

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return null; // or a loader
  }

  return (
    <>
      {/* ✅ Navbar now knows login state */}
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/trending" element={<Trending />} />

        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </>
  );
}

export default App;
