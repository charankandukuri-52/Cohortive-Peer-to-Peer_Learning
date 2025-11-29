import { Routes, Route } from 'react-router-dom'

function Login() {
    return (
        <div className="p-4 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p>Login form will go here.</p>
        </div>
    )
}

function Register() {
    return (
        <div className="p-4 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <p>Registration form will go here.</p>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default App
