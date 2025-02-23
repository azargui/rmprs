import { Link } from 'react-router-dom'
import './footer.css'
import Whatssap from '../whatssap/whatssap'

export default function Footer() {
  return (
    <>
        <footer>
            <div className="container">
            <div className="box">
                    <div className="fo-box">
                                        <h1>المجلة المغربية لنشر الأبحاث العلمية</h1>
                                        <hr/>
                                        <p>المجلة المغربية لنشر الأبحاث العلمية مجلة علمية محكمة متخصصة في نشر الأبحاث العلمية في مختلف التخصصات بداية كل شهر ميلادي.</p>
                    </div>
                    <div className="fo-box">
                                        <h1>تعليمات النشر للباحث</h1>
                                        <hr/>
                                        <ol>
                                                <li><Link to='/publishing_steps_and_conditions'>خطوات و شروط النشر</Link></li>
                                                <li><Link to='/publishing_ethics'>أخلاقيات النشر</Link></li>
                                        </ol>
                    </div>
                    <div className="fo-box">
                                        <h1>للإقتراحات</h1>
                                        <hr/>
                                        <p>نحن نعمل باستمرار على تحسين مجلتنا العلمية. لذلك  نقدر رأيك ونرحب بأي اقتراحات عبر الإيميل التالي: <span className="email">contactRMPRS@gmail.com</span></p>
                    </div>
            </div>
            </div>
        </footer>
        
        <div className="topfooter">
            <div className="container">
                    <span>جميع الحقوق محفوظة © المجلة المغربية لنشر الأبحاث العلمية</span>
                    <span>- Disagned by <a href="https://wa.me/+212643179113/" target="_blank" className="mynumber">yassine</a>© -</span>
            </div>
        </div>
        <Whatssap/>
    </>

  )
}
