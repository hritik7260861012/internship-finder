import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        if (!userId) return;

        api.get(`/applications/${userId}`)
            .then(res => setApps(res.data))
            .catch(() => {
                alert("Error loading applications");
            });
    }, []);

    return (
        <div className="container fade-in">
            <h2>My Applications</h2>

            {apps.map(a => (
                <div className="card" key={a.id}>
                    <p><b>Internship ID:</b> {a.internshipId}</p>
                    <p><b>Status:</b> {a.status}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;