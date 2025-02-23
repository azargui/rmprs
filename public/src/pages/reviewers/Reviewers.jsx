import Title from '../../components/pageTitle/Title'
import Parent from '../../components/parent/Parent'
import './reviewers.css'
import Data_reviewers from './data_reviewers'


export default function Reviewers(){
    const data = Data_reviewers;
    return(
        <Parent slider={false}>
            <div className="content reviewers">
                <Title title={'الهيئة العلمية والاستشارية'}/>
                <ol className="con">
                    {
                        data.map((one,index)=> <li>
                            {one.AR_name} {one.Fr_name}, <span>المغرب</span>
                        </li>)
                    }
                </ol>
            </div>
        </Parent>
    )
}