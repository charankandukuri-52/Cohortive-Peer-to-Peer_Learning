import { Routes, Route } from 'react-router-dom'

function DashboardHome() {
    return (
        <div className="p-4 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded">
                    <h3 className="font-bold">Credits</h3>
                    <p className="text-2xl">120</p>
                </div>
                <div className="p-4 bg-green-50 rounded">
                    <h3 className="font-bold">Sessions Taught</h3>
                    <p className="text-2xl">5</p>
                </div>
                <div className="p-4 bg-purple-50 rounded">
                    <h3 className="font-bold">Sessions Attended</h3>
                    <p className="text-2xl">3</p>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardHome />} />
        </Routes>
    )
}

export default App
