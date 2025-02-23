import Parent from '../../components/parent/Parent'
import Title from '../../components/pageTitle/Title'
import './contact.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SendMessage from './sendMessage'

export default function Contact (){
    const [message, setMessage] = useState({
        name:'',
        email:'',
        message:''
    })
    //SendMessage()
    const [ flag, setFlag ] = useState(false)
    function handelChangeMessage (e) {
        setMessage({...message, [e.target.name] : e.target.value})
    }
    function validation(message){
        if (
            message.name.length <= 2 || 
            message.email.length < 6 || 
            !message.email.includes('@')  ||
            message.message ==''
        ){
            return false
        }
        return true
    }
    
    function handelSubmit(e){
        e.preventDefault();
        if(!validation(message)){
            return setFlag(true)
        }
        setMessage({
            name:'',
            email:'',
            message:''
        })
        setFlag(false)
    }
    
    return(
        <Parent slider={false} sideBar={false}>
            <div className='content contact'>
                <div>
                    <div>
                        <h4>تواصل معنا</h4>
                        <p>يتم الرد على جميع الاستفسارات في أقل من 24 ساعة من استلام الرسالة</p>
                        <form>
                            <label htmlFor="name">الإسم</label>
                            <input type="text" id='name' placeholder='Ex : mohamed' name='name' value={message.name} onChange={handelChangeMessage}/>
                            {
                                message.name.length < 2 && flag && 
                                <p className="error">المرجو إدخال اسم صالح</p>
                            }
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input type="email" name='email' id='email' placeholder='Ex : Mohamed@gmail.com' value={message.email} onChange={(e)=>handelChangeMessage(e)}/>
                            {
                                (message.email.length < 6 || !message.email.includes('@')) && flag &&
                                <p className="error">المرجو إدخال بريد صالح</p>
                            }
                            <label htmlFor="message">الرسالة</label>
                            <textarea name="message" id="message" placeholder='Message' value={message.message} onChange={handelChangeMessage}></textarea>
                            {
                                message.message.length <= 0 && flag &&
                                <p className="error">المرجو إدخال رسالة صالحة</p>
                            }
                            <input type="submit" placeholder='إرسال الرسالة'/>
                        </form>
                    </div>
                    <div>
                        <img src={require('../../images/contact-me.png')} alt="contact-me.png" />
                        <div>
                            <div className="cont">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <span>igrouzrou, Sidi Ifni</span>
                            </div>
                            <div className="cont">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <span>contactRMPRS@gmail.com</span>
                            </div>
                            <div className="cont">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <span>212-675920340+</span>
                            </div>
                        </div>
                        <div>
                            <Link style={{backgroundColor:'rgb(68 182 120)'}}>
                                <i className="fa-brands fa-whatsapp"></i>
                            </Link>
                            <Link style={{backgroundColor:'rgb(252 126 126)'}}>
                            <i className="fa-solid fa-envelope"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-facebook"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Parent>
    )
}