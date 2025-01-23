import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/FacultyPage.css';

const Logout = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        const auth = getAuth();
        // Listen for changes in authentication state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true); // User is logged in
            } else {
                setIsLoggedIn(false); // User is not logged in
            }
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            navigate('/faculties'); // Redirect after logout
        } catch (error) {
            console.error('Error logging out: ', error);
        }
    };

    const handleLoginNav = () => {
        navigate('/login');
    }

    return (
        <div className="text-center">
            {isLoggedIn ? (
                <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                </button>
            ) : (
                <button onClick={handleLoginNav} className="btn login-btn"> Login </button>
            )}
        </div>
    );
};

export default Logout;