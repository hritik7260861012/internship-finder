import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "student",
        skills: ""
    });

    const navigate = useNavigate();

    const handleRegister = () => {
        api.post("/register", user)
            .then(() => {
                alert("Registered Successfully");
                navigate("/");
            })
            .catch(() => {
                alert("Error in Registration");
            });
    };

    return (
        <div className="container fade-in">
            <div className="card">
                <h2>Register</h2>

                <input className="input" placeholder="Name"
                       onChange={e => setUser({...user, name: e.target.value})} />

                <input className="input" placeholder="Email"
                       onChange={e => setUser({...user, email: e.target.value})} />

                <input className="input" type="password" placeholder="Password"
                       onChange={e => setUser({...user, password: e.target.value})} />

                <input className="input" placeholder="Skills"
                       onChange={e => setUser({...user, skills: e.target.value})} />

                <button className="btn" onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;