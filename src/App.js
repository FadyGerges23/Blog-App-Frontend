import SignInForm from "./components/SignInForm";
import SignupForm from "./components/SignupForm";
import ViewProfile from './components/ViewProfile';
import EditProfile from './components/EditProfile';
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./components/LandingPage";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Cookies from 'js-cookie';
import Unauthorized from "./components/Unauthorized";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import { useLazyLoadQuery } from "react-relay";
import CurrentUserQuery from "./graphql/queries/CurrentUserQuery";
import PostDetails from "./components/PostDetails";
import PostsFetch from "./components/PostsFetch";
import UserPostsFetch from "./components/UserPostsFetch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <LandingPage /> } />
      <Route path="/users/:id/home" element={ <UserPostsFetch /> } />
      <Route path="/users/sign_up" element={ <SignupForm /> } />
      <Route path="/users/sign_in" element={ <SignInForm /> } />
      <Route path="/users/:id/profile" element={ <ViewProfile /> } />
      <Route path="/users/:id/edit_profile" element={ <EditProfile /> } />
      <Route path="/users/:id/create_post" element={ <CreatePost /> } />
      <Route path="/users/:user_id/posts/:id/edit" element={ <EditPost /> } />
      <Route path="/posts" element={ <PostsFetch /> } />
      <Route path="/posts/:id" element={ <PostDetails /> } />
      <Route path="/unauthorized" element={ <Unauthorized /> } />
    </Route>
  )
);

function App() {
  const { signUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const data = useLazyLoadQuery(CurrentUserQuery, {}, { fetchPolicy: 'network-only' });

  useEffect(() => {
    
    const userCookie = Cookies.get('user');
    if(userCookie && !data.currentUser.error) {
        try {
            signUser(data.currentUser);
        }
        catch(error) {
            console.error('Error parsing user data from the cookie:', error);
        }
    }
    setLoading(false)
    // eslint-disable-next-line
  }, [])

  return (
    !loading && <RouterProvider router={router} />
  );
}

export default App;
