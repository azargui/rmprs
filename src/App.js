import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import './Asset/all.min.css'
import Issues from "./pages/issues/issues";
import OneIssue from "./pages/issues/oneIssue/OneIssue";
import Issues_home from "./pages/issues/issues_home";
import ResearchSummary from "./pages/issues/oneIssue/ResearchSummary/ResearchSummary";
import StepsCondition from "./pages/stepsCondition/StepsCondition";
import Ethics from "./pages/ethics/Ethics";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/notFound";
import Reviewers from "./pages/reviewers/Reviewers";

export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index  element={<Home/>}/>
                    <Route path="issues" element={<Issues/>}>
                        <Route index element={<Issues_home/>}/>
                        <Route path=":id" element={<OneIssue/>}/>
                        <Route path=":issueId/:researchId" element={<ResearchSummary/>}/>
                    </Route>
                    <Route path="/publishing_steps_and_conditions" element={<StepsCondition/>}/>
                    <Route path="/publishing_ethics" element={<Ethics/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path='/reviewers' element={<Reviewers/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}