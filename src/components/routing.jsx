import { Route, Routes } from "react-router"
import { Login } from "./login"
import { Register } from "./register"
import ToDoList from "./ToDoList"

export const Routing = () => {
    return <Routes>
        <Route path="/" element={<ToDoList></ToDoList>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
}