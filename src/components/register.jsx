import { useState } from "react";
import { useNavigate } from "react-router";
import service from '../service.js'

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {

        try {
            const response = await service.Register(name, password);
            console.log("Registration successful", response);
            navigate("/");
        } catch (err) {
            console.log("Registration error:", err);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">📝 Register</h2>
            <input
                className="form-control mb-3"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-danger" style={{ display: password ? (/^.{9,}$/.test(password) ? 'none' : "block") : 'none' }}>
                *Less than 9 characters
            </p>

            <div className="text-center">
                <button className="btn" onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};