import HomePage from 'pages/HomePage/HomePage';
import Layout from 'pages/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
