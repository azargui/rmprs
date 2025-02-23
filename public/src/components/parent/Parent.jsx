import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import Slider from "../../components/slider/Slider";
import MetaTags from "../../SEO/MetaTags";

export default function Parent (props){
    const {slider, children} = props
    const sideBar = props.sideBar == false ? false : true
    return (
        <div style={{backgroundColor : !sideBar ? '#f1e8ca' : 'white'}}>
            <MetaTags title='rmprs.com' decription='المجلة المغربية لنشر الأبحاث العلمية هي مجلة علمية محكمة، متخصصة في نشر الأبحاث العلمية في مختلف التخصصات' keyword='' />
            <Header/>
            {
                slider ? <Slider/>
                :
                <hr style={{
                border:'none',
                height:'1px',
                width:'100%',
                backgroundColor:'#3333'
            }}/>
            }
            
            <main>
                <div className="container">
                    {
                        sideBar &&  <SideBar/>
                    }
                    { children }
                </div>
            </main>
            <Footer/>
        </div>
    )
}