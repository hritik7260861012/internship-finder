import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        api.post("/login", { email, password })
            .then(res => {
                if (res.data) {
                    alert("Login Success");
                    localStorage.setItem("userId", res.data.id);
                    navigate("/home");
                } else {
                    alert("Invalid user id and password");
                }
            })
            .catch(() => {
                alert("Server Error / Backend Not Running");
            });
    };

    return (
        <div className="container fade-in">
            <div className="card">
                <h2>Login</h2>

                <input className="input" placeholder="Email"
                       onChange={e => setEmail(e.target.value)} />

                <input className="input" type="password" placeholder="Password"
                       onChange={e => setPassword(e.target.value)} />

                <button className="btn" onClick={handleLogin}>
                    Login
                </button>

                <p>
                    Don't have an account?{" "}
                    <button className="btn btn-secondary"
                            onClick={() => navigate("/register")}>
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;