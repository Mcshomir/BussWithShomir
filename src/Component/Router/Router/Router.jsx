import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Header from "../../Home/Header/Header";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Header></Header>
            },

        ]
    }
])