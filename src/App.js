import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Home from './pages/Home';
import './App.css'
import Navbar from './components/common/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import OpenRoute from './components/cors/Auth/OpenRoute';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivateRoute from './components/cors/Auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/cors/Dashboard/MyProfile';
import Settings from './components/cors/Dashboard/Settings/index';
import EnrolledCourses from './components/cors/Dashboard/EnrolledCourses';
import Cart from './components/cors/Dashboard/Cart';
import AddCourse from './components/cors/Dashboard/AddCourse'
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_TYPE } from "./utils/constants";
import MyCourses from './components/cors/Dashboard/MyCourses';
import EditCourse from './components/cors/Dashboard/EditCourse';
import CourseDetails from './pages/CourseDetails';
import Catalog from './pages/Catalog'
import ViewCourse from './pages/ViewCourse'
import VideoDetails from './components/cors/ViewCourse/VideoDetails'
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
            <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  
         <Route
          path="forgot-password"
          element={
            <OpenRoute>                
              <ForgotPassword/>
            </OpenRoute>
          }
        />
         <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />  
      <Route
          path="about"
          element={
            
              <About/>
            
          }
        />  
        <Route path="contact" 
        element={<Contact/>}/>
         <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
      >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      <Route path="dashboard/settings" element={<Settings />} />
      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          {/* <Route path="dashboard/instructor" element={<Instructor />} /> */}
          <Route path="dashboard/add-course" element={<AddCourse />} />
           <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} /> 
          
          </>
        )
      }

      </Route>
      <Route path="catalog/:catalogName" element={<Catalog/>} />
      <Route path="courses/:courseId" element={<CourseDetails/>} />
          
      <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>

     </Routes>
    </div>
  );
}

export default App;