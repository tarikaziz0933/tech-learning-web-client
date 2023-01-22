import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import QuesAnswering from "../../Pages/QuesAnswering/QuesAnswering";
import Registration from "../../Pages/Registration/Registration";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-tarikaziz0933.vercel.app/courses')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-tarikaziz0933.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-tarikaziz0933.vercel.app/courses/category/${params.id}`)
            },
            {
                path: '/courseDetails/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-tarikaziz0933.vercel.app/courses/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/answeringques',
                element: <QuesAnswering></QuesAnswering>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '*',
                element: <div>Page not found</div>
            }

        ]
    }
])