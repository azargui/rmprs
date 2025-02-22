import { useParams } from 'react-router-dom'
import './oneIssue.css'
import Title from '../../../components/pageTitle/Title'
import { getIssue } from '../data'
import { useEffect, useState } from 'react'
import CountdownTimer from '../../../components/countor/countor'

export default function OneIssue(){
    const [oneIssues, setoneIssues] = useState({})
    const PARAMS = useParams()

    useEffect(() => {
        setoneIssues(getIssue(PARAMS.id) || {});
    }, [PARAMS.id]);

    return (
        <div className="content">
            {
                (!oneIssues?.issues)
                ? <p className="empty">لاوجود هذا الإصدار</p>
                :
                <>
                    <Title title={oneIssues.title}/>
                    <ol className="issues">
                        {
                            (oneIssues.issues && oneIssues.issues?.length >0) 
                            ?
                            <>
                                <div>
                                    <h3>1- تحميل العدد كاملا :</h3>
                                    <div style={{width:'250px'}}>
                                        <div className="img issue">
                                            <img src={require(`../../../images/${oneIssues.src}/mokup.png`)}/>
                                        </div>
                                        <a href={require(`../../../pdfs/${oneIssues.src}/${oneIssues.src}.pdf`)} className='downUrl' download>تحميل</a>
                                    </div>
                                </div>
                                <div>
                                    <h3>1- الهيئة العلمية و الإستشارية:</h3>
                                    <div>
                                        <div className="img issue">
                                            <img src={require(`../../../images/${oneIssues.src}/scientific_and_advisory_board.png`)}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3>2- محتويات العدد :</h3>
                                    <div>
                                        <div className="img issue">
                                            <img src={require(`../../../images/${oneIssues.src}/issue_content.png`)}/>
                                        </div>
                                    </div>
                                </div>
                                {
                                    oneIssues.issues.map((oneElement, index)=>
                                    <li key={index} className='oneResearch'>
                                        <h2>{oneElement.title}</h2>
                                        <p className="name">{oneElement.name}</p>
                                        <div className="buttons">
                                            <a href={require(`../../../pdfs/${oneIssues.src}/content/${index+1}.pdf`)} download={`rmprs.com: ${oneElement.title}.pdf`}>تحميل البحث PDF</a>
                                            <a href={`${oneIssues.src}/${index+1}`}>ملخص البحث</a>
                                        </div>
                                    </li>
                                )}
                                
                            </>
                            :
                            <p className='empty'>
                                سيتم إصدار 
                                {
                                    oneIssues.title+' '
                                }
                                في
                                :
                            <span style={{
                                textDecoration:'underline',
                                fontWeight:'900',
                                marginRight:"6px",
                                fontSize:'17px'
                            }}>{oneIssues.secondDate}</span>
                            <span style={{
                                fontWeight: '900',
                                marginRight: '5px',
                                display:'block',
                                marginTop: '9px',
                                fontSize: '19px',
                                color: '#edb400',
                            }} >
                                <CountdownTimer targetDate={oneIssues.date}/>
                            </span>
                            </p>
                        }
                    </ol>
                </>
            }
        </div>
    )
}