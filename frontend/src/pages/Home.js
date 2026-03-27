import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/internships")
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(() => {
                alert("Error loading internships");
                setLoading(false);
            });
    }, []);

    const apply = (id) => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            alert("Please Login First");
            return;
        }

        api.post("/applications", {
            userId: Number(userId),
            internshipId: id
        })
            .then(() => alert("Applied Successfully"))
            .catch(() => alert("Error applying"));
    };

    const logout = () => {
        localStorage.removeItem("userId");
        window.location.href = "/";
    };

    if (loading) return <h3 className="container">Loading...</h3>;

    return (
        <div className="container fade-in">
            <h2>Internships</h2>

            <div style={{ marginBottom: "20px" }}>
                <button className="btn" onClick={() => window.location.href="/dashboard"}>
                    My Applications
                </button>

                <button className="btn btn-secondary" onClick={logout} style={{ marginLeft: "10px" }}>
                    Logout
                </button>
            </div>

            {data.map(i => (
                <div className="card fade-in" key={i.id}>
                    <h3>{i.title}</h3>
                    <p><b>Company:</b> {i.company}</p>
                    <p><b>Location:</b> {i.location}</p>

                    <button className="btn" onClick={() => apply(i.id)}>
                        Apply
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;