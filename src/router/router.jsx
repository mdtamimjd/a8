import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }
])
export default router;