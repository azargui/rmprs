import Header from '../../components/header/Header'
import './notFound.css'

export default function NotFound(){
    const pathname = window.location.pathname
    return(
        <>
            <Header/>
            <main className="notFound">
                <i className="fa-regular fa-face-frown"></i>
                <h1>404 error</h1>
                <p>"{pathname}"</p>
                <h1>لم يتم العثور على الصفحة</h1>
            </main>
        </>
    )
}