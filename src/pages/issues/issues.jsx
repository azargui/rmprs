import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import './issues.css'

export default function Issues (){
    
    return (
        <div>
            <Header/>
            <hr style={{
                border:'none',
                height:'1px',
                width:'100%',
                backgroundColor:'#3333'
            }}/>
            <main>
                <div className="container">
                    <SideBar/>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}