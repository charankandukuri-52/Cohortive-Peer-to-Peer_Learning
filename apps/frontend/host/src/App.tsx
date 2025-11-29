import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Button } from "ui"
// @ts-ignore
const AuthApp = lazy(() => import('auth/App'))
// @ts-ignore
const DashboardApp = lazy(() => import('dashboard/App'))

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white shadow-sm p-4">
                    <div className="container mx-auto flex justify-between">
                        <Link to="/" className="text-xl font-bold text-blue-600">Cohortive</Link>
                        <div className="space-x-4">
                            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
                            <Link to="/auth/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="container mx-auto p-4">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<div className="text-center mt-10"><h1 className="text-4xl font-bold">Welcome to Cohortive</h1><p className="mt-4">Peer-to-Peer Learning Platform</p></div>} />
                            <Route path="/auth/*" element={<AuthApp />} />
                            <Route path="/dashboard/*" element={<DashboardApp />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </Router>
    )
}

export default App
