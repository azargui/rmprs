import { Link, useParams } from 'react-router-dom'
import '../oneIssue.css'
import Title from '../../../../components/pageTitle/Title'
import { getResearch } from '../../data'
import { useEffect, useState } from 'react'
import './researchSummary.css'

export default function ResearchSummary(){
    const {issueId ,researchId} = useParams()
    const [researchSum ,setResearchSum] = useState(null)
    const [researchLen ,setResearchLen] = useState(null)

    useEffect(() => {
        const {issues ,researchLen} = getResearch(issueId ,researchId) || { issues:null ,researchLen:null}
        setResearchLen(researchLen)
        setResearchSum(issues)
    }, [issueId ,researchId]);
    
    const noneVisibleStyle={
        display:'none'
    }
    const paginationStyle = {
        display:'flex',
        justifyContent : researchId == 1 ? 'end' : 'space-between'
    }

    return (
        <div className="content researchSummary">
            {
                researchSum ? <>
                    <Title title={'ملخص البحث :'}/>
                    <div className="gen-info">
                        <h3>{researchSum.title}</h3>
                        <div>
                            <p>الباحث {researchSum.name}</p>
                            {
                                researchSum.caracteres.map((caractere ,index) => 
                                    <p key={index}>{caractere}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="summary">
                        <h3>الملخص :</h3>
                        <p>{researchSum.summary}</p>
                    </div>
                    <div className="keywords">
                        <h3>الكلمات المفاتيح</h3>
                        <p>{researchSum.keywords}</p>
                    </div>
                    <div className="down">
                        <h3>تحميل البحث كاملا :</h3>
                        <a href={require(`../../../../pdfs/${issueId}/content/${researchId}.pdf`)}  download={`rmprs.com: ${researchSum.title}.pdf`}>ملف pdf</a>
                    </div>
                    <div className="pagination" style={paginationStyle}>
                        <Link className="next" to={`/issues/${issueId}/${+researchId-1}`} 
                        style={
                            researchId == 1 ? noneVisibleStyle :{}
                        }>
                            <span><i className="fa-solid fa-arrow-right"></i></span>المقال السابق </Link>
                        <Link className="prev" to={`/issues/${issueId}/${+researchId+1}`} 
                        style={
                            researchId == researchLen ? noneVisibleStyle : {}
                        }
                        >المقال اللاحق<span><i className="fa-solid fa-arrow-left"></i></span></Link>
                    </div>
                </> :
                <p className="empty">
                    لا وجود لهذا الملخص
                </p>
            }
             
        </div>
    )
}