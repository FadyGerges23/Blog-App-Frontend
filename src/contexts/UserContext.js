import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const signUser = (user) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, signUser }}>
            { props.children }
        </UserContext.Provider>
    );
}

export default UserContextProvider;