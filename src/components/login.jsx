import { useState } from "react";
import { useNavigate } from "react-router";
import service from '../service.js';

export const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("Attempting to log in with:", { name });

        try {
            await service.login(name, password); // Attempt to log in
            nav("/"); // Redirect to home on success
        }
        catch (err) {
            console.error("Login failed:", err); // Log other errors

        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">🔒 Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    className="form-control mb-3"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <p className="text-danger" style={{ display: password ? (/^.{9,}$/.test(password) ? 'none' : "block") : 'none' }}>
                    *Less than 9 characters
                </p>
                <div className="text-center">
                    <button className="btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};
