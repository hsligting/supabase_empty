import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Signup} from "./Signup";
import {Login} from "./Login";
import {NewPost} from "./NewPost";
import {Posts} from "./Posts";

function App() {
    return (
        <div className={"h-full bg-white"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"signup"} element={<Signup></Signup>} />
                    <Route path={"login"} element={<Login></Login>} />
                    <Route path={"posts"} element={<Posts></Posts>} />
                    <Route path={"new-post"} element={<NewPost></NewPost>} />
                    <Route path={"*"} element={<Navigate to={"login"} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
