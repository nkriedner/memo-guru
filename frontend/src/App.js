import { BrowserRouter, Routes, Route } from "react-router-dom"; // for route handling

// Import pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
