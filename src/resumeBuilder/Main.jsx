import React from "react";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import Create from "./Create";
import ResumeWrapper from "./ResumeWrapper";
import MyDetails from "./MyDetails";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function Main() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path = "/register" element = { <Registration />} />
            <Route path = "/" element = { <Login /> } />
            <Route path = "/create" element = {
                <>
                <Home /> 
                <Create />
                </>
            }
            />
            <Route path = "/new" element = { <ResumeWrapper /> } >
            <Route element = { <MyDetails /> } path = "mydetails" />
            <Route element = { <MyDetails /> } path = "mydetails/:id" />
            <Route element = { <AboutMe /> } path = "aboutme" />
            <Route element = { <AboutMe /> } path = "aboutme/:id" />
            <Route element = { <Skills /> } path = "skills" />
            <Route element = { <Skills /> } path = "skills/:id" />
            <Route element = { <WorkExperience /> } path = "work" />
            <Route element = { <WorkExperience /> } path = "work/:id" />

            </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
};

export default Main;