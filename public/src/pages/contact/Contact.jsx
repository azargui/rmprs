import Parent from '../../components/parent/Parent'
import './contact.css'
import { Link } from 'react-router-dom'

export default function Contact (){
    const bStyle={
        margin:'0 5px 0 0 '
    }
    return(
        <Parent slider={false} sideBar={true}>
            <div className='content contact'>
                <div>
                    <div>
                        <div>
                        
                        </div>
                    </div>
                    
                    <div>
                        <h4>تواصل معنا</h4>
                        <p>يتم الرد على جميع الاستفسارات في أقل من 24 ساعة من استلام الرسالة</p>
                        <div>
                            <div className="cont">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <span>البريد لإلكتروني :
                                    <b style={bStyle}>contactRMPRS@gmail.com</b>
                                </span>
                            </div>
                            <div className="cont">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <span>الرقم الخاص بالمجلة:
                                    <b style={bStyle}>212716288654+</b>
                                </span>
                            </div>
                        </div>
                        <div>
                            <p>روابط مباشرة للتواصل معنا :</p>
                            <Link to='https://wa.me/0716288654' style={{backgroundColor:'rgb(68 182 120)'}} target='_blank'>
                                <i className="fa-brands fa-whatsapp"></i>
                            </Link>
                            <Link to='mailto:contactRMPRS@gmail.com' style={{backgroundColor:'rgb(252 126 126)'}} target='_blank'> 
                            <i className="fa-solid fa-envelope"></i>
                            </Link>
                            <Link to='https://www.facebook.com/RMPRS1' target='_blank'>
                                <i className="fa-brands fa-facebook"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Parent>
    )
}