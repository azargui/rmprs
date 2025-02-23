import './sideBar.css'
import CountdownTimer from '../countor/countor'
export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="DepositNumber">
            <strong>رقم الإيداع</strong>: 2024/03 ص
        </div>
        <div className="issn">
            <strong>ISSN</strong>: 3085-4873
        </div>
        <ol id='release-Date'>
            <li>موعد إصدار العدد القادم </li>
            <li>24 فبراير 2025</li>
            <li className="con"><CountdownTimer targetDate='2025-02-25T00:00:00'/></li>
        </ol>
        <div className="mokup">
            <img src={require('../../images/mokup.png')} alt="mokup" />
        </div>
        <ol id='last-Date'>
            <li>آخر أجل لإستلام البحوث </li>
            <li style={{color:"#ff4545"}}>15 فبراير 2025</li>
            <li className="con"><CountdownTimer targetDate='2025-02-16T00:00:00'/></li>
        </ol>
       {/* {<ol className='inf'>
        <li className="title">
            معلومات المجلة
        </li>
        <li style={{textAlign:'justify'}}>
            <div>
            الإسم : المجلة المغربية لنشر الأبحاث العلمية
            </div>
            <div style={{textAlign:'left'}}>
                Revue Marocaine de Publication des Recherches Scientifiques
            </div>
        </li>
        <li className="title">
            الإختصار : RMPRS
        </li>
        <li>
        تردد النشر: شهرياً
        </li>
        <li>
        فترة التحكيم : من 4 إلى 10 أيام
        </li>
        <li>
            رقم الإيداع : 03/صحافة/2024
        </li>
       </ol>} */}
    </div>
  )
}