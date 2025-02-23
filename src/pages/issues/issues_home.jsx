import { Link } from "react-router-dom";
import Title from "../../components/pageTitle/Title";
import { issuesName_Src } from "./data";
import { useEffect, useState } from "react";
import MetaTags from "../../SEO/MetaTags";

export default function Issues_home() {
    const [ IssuesName_Src , setIssuesName_Src] = useState([])
    useEffect(()=>{
        setIssuesName_Src(issuesName_Src)
    },[issuesName_Src])
  return (

    <div className="content">
        <MetaTags title='إصدارات المجلة' description=' إصدارات المجلة المغربية لنشر الأبحاث العلمية'/>
        <Title title='إصدارات المجلة'/>
        <ul className="issues">
            {
                issuesName_Src.length == 0 ?
                    <p className="empty">ليس  هناك إصدارات  في المجلة</p>
                : (IssuesName_Src.map((oneIssue, index) =>
                    <li key={index}>
                        <Link to={oneIssue.src}><h2>{oneIssue.title}</h2></Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
