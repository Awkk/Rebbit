import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Admin from "./pages/Admin";
import { UserContext } from "./context/UserContext";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState({});

  const value = useMemo(() => user, [user]);

  useEffect(() => {
    const token =
      localStorage.getItem("rebbitAuth") ||
      sessionStorage.getItem("rebbitAuth");
    if (token) {
      setIsAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthed) {
      const userStorage =
        localStorage.getItem("rebbitAuth") ||
        sessionStorage.getItem("rebbitAuth");
      setUser(JSON.parse(userStorage));
    }
  }, [isAuthed]);

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Navbar isAuthed={isAuthed} setIsAuthed={setIsAuthed} />
        <Switch>
          <Route
            path="/register"
            exact
            render={(props) => (
              <Register {...props} setIsAuthed={setIsAuthed} />
            )}
          />
          <Route
            path="/login"
            exact
            render={(props) => <Login {...props} setIsAuthed={setIsAuthed} />}
          />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/"  component={Admin} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
