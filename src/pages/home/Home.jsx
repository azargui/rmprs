import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/pageTitle/Title";
import SideBar from "../../components/sideBar/SideBar";
import Slider from "../../components/slider/Slider";
import MetaTags from "../../SEO/MetaTags";
import './home.css'

export default function Home(){
    return (
        <div>
            <MetaTags title='rmprs.com' description='المجلة المغربية لنشر الأبحاث العلمية هي مجلة علمية محكمة، متخصصة في نشر الأبحاث العلمية في مختلف التخصصات' keyword=''/>
            <Header/>
            <Slider/>
            <main>
                <div className="container">
                    <SideBar/>
                    <div className="content">
                        <Title title='الرئيسية'/>
                        <h3 className="pTitle">المجلة المغربية لنشر الأبحاث العلمية</h3>
                        <p>المجلة المغربية لنشر الأبحاث العلمية هي مجلة علمية محكمة، متخصصة في نشر الأبحاث العلمية في مختلف التخصصات، تصدر بشكل دوري من المملكة المغربية، وتنشر أبحاثها باللغات: العربية والفرنسية والإنجليزية. يتم متابعة عمليات النشر للباحثين وفق قواعد وإجراءات رسمية ومتسلسلة، تبدأ من استقبال البحوث إلى تحكيمها وإصدار القبول الرسمي للباحث بموافقة نشر بحثه العلمي ومن ثم نشره بالمجلة.
                        </p>
                        <h3 className="pTitle">الرؤية والاهداف:</h3>
                        <p>تهدف إلى تشجيع البحث العلمي والنهوض به في مختلف الجامعات ومراكز البحث العلمية، وإتاحة الفرصة للباحثين والأكاديميين في نشر ابتكاراتهم وحلولهم البحثية، دون قيود أو صعوبات، والعمل على ربط الباحثين والأكاديميين من مختلف الجامعات العربية مع مجتمع البحث العلمي العالمي.
                        </p>
                        <p>
                        تتطلع المجلة بأن تكون قاعدة بيانات كبيرة تتبنى كافة البحوث والدراسات المختلفة من الباحثين في كافة الدول.
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}