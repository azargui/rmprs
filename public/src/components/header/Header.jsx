import './header.css'
import Logo from '../../images/logo.PNG'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { issuesName_Src } from '../../pages/issues/data'

export default function Header(){
    const [IssuesName_Src, setIssuesName_Src]= useState(issuesName_Src || [])
    const [showMenu ,setShowMenu] = useState(false)

    useEffect(()=>{
        setIssuesName_Src(issuesName_Src)
        document.querySelectorAll(' header .mobile nav a').forEach((oneLink)=>{
            oneLink.addEventListener('click', function(){
                setShowMenu(false)
            })
        })
    }, [issuesName_Src])

    const subMenu = (menuList) =>{
        return (
        <div className="subMenu">
            <div>
                {
                    menuList.map((element, index)=> 
                        <Link 
                            to={`/issues/${element.src}`}
                            key={index} >
                            <span>{element.title}</span>
                         </Link>
                    )
                }
            </div>
        </div>
        )
    }
    return (
        <header>
            <div className="desk">
                <div className="top">
                    <div className="container">
                        <nav>
                            <ol>
                                <li><Link to='/'>الرئيسية</Link>
                                </li>
                                <li>
                                    <Link to='/issues'>إصدارات المجلة<i className="fa-solid fa-caret-up"></i></Link>
                                    {
                                        subMenu(IssuesName_Src)
                                    }
                                </li>
                                <li><Link to="/publishing_steps_and_conditions">خطوات و شروط النشر</Link></li>
                                <li><Link to="/publishing_ethics">أخلاقيات النشر</Link></li>
                                <li><Link to="/reviewers">الهيئة العلمية والاستشارية</Link></li>
                                <li><Link to='/contact'>توصل معنا</Link></li>
                            </ol>
                        </nav>
                        <div className="social-media">
                            <ol>
                                <li>
                                    <Link to='https://wa.me/0716288654' target='_blank'><i className="fa-brands fa-whatsapp"></i></Link>
                                </li>
                                <li>
                                    <Link to='https://www.facebook.com/RMPRS1' target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="container">
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="container">
                    <div>
                        <nav>
                            <div className="show" onClick={()=>setShowMenu(true)} >
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <ol style={
                                showMenu ? {right:'0'}
                                : {right:'-100%'}
                            }>
                                <div className="close" onClick={()=>setShowMenu(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <h1>القائمة</h1>
                                <li><Link to='/'>الرئيسية</Link></li>
                                <li>
                                    <Link to='issues'>إصدارات المجلة</Link>
                                    {
                                        subMenu(IssuesName_Src)
                                    }
                                </li>
                                <li><Link to="/publishing_steps_and_conditions">خطوات و شروط النشر</Link></li>
                                <li><Link to="/publishing_ethics">أخلاقيات النشر</Link></li>
                                <li><Link to="/reviewers">الهيئة العلمية والاستشارية</Link></li>
                                <li><Link to='/contact'>توصل معنا</Link></li>
                            </ol>
                        </nav>
                        <div className="logo">
                            <Link to='/'>
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="social-media">
                        <ol>
                        <li>
                            <Link to='https://wa.me/0716288654' target='_blank'><i className="fa-brands fa-whatsapp"></i></Link>
                        </li>
                        <li>
                            <Link to='https://www.facebook.com/RMPRS1' target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
                        </li>
                        </ol>
                    </div>
                </div>
            </div>
            
        </header>
    )
}