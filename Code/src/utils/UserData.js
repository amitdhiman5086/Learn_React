import { createContext, useContext } from "react";

const UserData = createContext({
    user:{
        name : "Vishal"  ,
        email : "xyz@gmail.com"
    }
})

export default UserData ;