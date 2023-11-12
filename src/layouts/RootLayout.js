import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';
import Cookies from 'js-cookie';

const RootLayout = () => {
    const navigate = useNavigate();
    const { user, signUser } = useContext(UserContext);

    const handleSignOut = () => {
        axios.delete("http://localhost:3000/users/sign_out")
        .then((response) => {
            if(response.status === 200) {
                signUser(null);
                Cookies.remove('user');
                navigate('/');
            }
            else {
                console.error('Error deleting resource. Status code: ', response.status);
            }
        })
        .catch((error) => {
            console.error('Error deleting resource:', error);
        });
    }

    return ( 
        <div>
            <header>
                <nav>
                    <h3>Blog App</h3>
                    {/* { user && <NavLink to="/">Home</NavLink> } */}
                    { !user && <NavLink to="/sign_up">Sign Up</NavLink> }
                    { !user && <NavLink to="/sign_in">Sign In</NavLink> }
                    { user && <button className="sign_out_button" onClick={handleSignOut}> Sign Out</button>}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default RootLayout;