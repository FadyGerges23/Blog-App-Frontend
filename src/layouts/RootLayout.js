import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import SignOutButton from "../components/SignOutButton";

const RootLayout = () => {
    const { user } = useContext(UserContext);

    return ( 
        <div>
            <header>
                <nav>
                    <h3>Blog App</h3>
                    {/* { user && <NavLink to="/">Home</NavLink> } */}
                    { !user && <NavLink to="/sign_up">Sign Up</NavLink> }
                    { !user && <NavLink to="/sign_in">Sign In</NavLink> }
                    { user && <SignOutButton />}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default RootLayout;