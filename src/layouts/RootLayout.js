import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <div>
            <header>
                <nav>
                    <h3>Blog App</h3>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/sign_up">Sign Up</NavLink>
                    <NavLink to="/sign_in">Sign In</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default RootLayout;