import './stepsCondition.css'
import Parent from '../../components/parent/Parent'
import Title from '../../components/pageTitle/Title'
export default function StepsCondition(){
    return (
        <Parent slider={false}>
            <div className="content">
                <Title title='خطوات و شروط النشر'/>
                <h3 className="pTitle">خطوات النشر</h3>
                <ul>
                    <li>يقوم الباحث بإرسال البحث المراد نشره إلى <strong>إيميل المجلة</strong>: <a href="mailto:contactRMPRS@gmail.com">contactRMPRS@gmail.com</a></li>
                    <li><strong>إرسال رسالة عبر الواتساب</strong> لتأكيد التوصل بالبحث.</li>
                    <li>يتم إبلاغ الباحث <strong>بالقبول المبدئي للبحث أو الرفض</strong> في أقل من 48 ساعة.</li>
                    <li>يتم إرسال البحث إلى <strong>ثلاثة محكمين على الأقل</strong> للتحكيم النهائي.</li>
                    <li>إبلاغ الباحث بنتيجة التحكيم النهائي والتعديلات المطلوبة إن وجدت، بعد تحكيم البحث في غضون <strong>4 إلى 10 أيام</strong>.</li>
                    <li>يقوم الباحث باستيفاء <strong>رسوم النشر</strong> في المجلة.</li>
                    <li>إصدار <strong>شهادة قبول النشر</strong>.</li>
                    <li>نشر البحث في <strong>العدد القادم للمجلة</strong>.</li>
                </ul>
                <h3 className="pTitle">شروط النشر</h3>
                <ul>
                    <li>ألا يكون قد سبق نشر البحث أو قدم للنشر إلى جهة أخرى، وألا يكون <strong>مستلا من كتاب مطبوع</strong>.</li>
                    <li>أن يتسم البحث <strong>بالأصالة والمنهجية العلمية و الجدة</strong> في الموضوع والعرض.</li>
                    <li>أن يكون <strong>صحيح اللغة، سليم الأسلوب، واضح الدلالة</strong>.</li>
                    <li>ألا يتجاوز عدد صفحات البحث <strong>30 صفحة</strong> (باستثناء المراجع والملاحق).</li>
                    <li>أن يرفق مع البحث <strong>ملخص باللغة التي كتب بها البحث</strong>.</li>
                    <li>أن يرفق مع البحث <strong>ما لا يقل عن 4 كلمات مفتاحية</strong> باللغة التي كتب بها البحث.</li>
                    <li>وضوح الأشكال التوضيحية والصور والوثائق والمخطوطات والجداول في البحث إن وجدت.</li>
                    <li>أن توضع الحواشي في الصفحات نفسها، وتكون مرتبطة مع المتن، على أن يكون الترقيم متواصلا.</li>
                </ul>
            </div>
        </Parent>
    )
}