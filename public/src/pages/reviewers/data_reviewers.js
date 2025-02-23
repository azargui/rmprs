import { data } from "react-router-dom"


const data_reviewers =[
    {
        "image": "",
        "AR_name": "د. محمد حجولي",
        "Fr_name": "MOHAMMED HAJJOULI",
        "specialization": "الفقه-أصول الفقه-التصوف والغقيدة-الفكرالإسلامي-الدرس المصطلحي القرآني-الحوار الديني والثقافي في الحضترة الإسلامي",
        "attribute": "باحث في الدراسات الإسلامية"
    },
    {
        "image": "",
        "AR_name": "د. خريصي عبد الحكيم",
        "Fr_name": "KHRISSI ABDELHAKIM",
        "specialization": "علم الإجتماع و الأنثروبولوجيا",
        "attribute": "دكتور في علم الإجتماع"
    },
    {
        "image": "",
        "AR_name": "د. أحمد مفهوم",
        "Fr_name": "AHMED MAFHOUM",
        "specialization": "المعاملات المالية-الاقتصاد الإسلامي-العلوم الشرعية",
        "attribute": "دكتور في علم الإجتماع"
    },
    {
        "image": "",
        "AR_name": "د. أشرف نزهي",
        "Fr_name": "ACHRAF NAZHI",
        "specialization": "قانون الأعمال-قوانين العقار و التعمير-القانون المدني-قانون المالية-وغيرها من القوانين الأخرى",
        "attribute": "دكتور في القانون الخاص"
    },
    {
        "image": "",
        "AR_name": "د. نور الدين الخرازي",
        "Fr_name": "NOUREDDIN EL KHARRAZI",
        "specialization": "علوم اللسان العربي(النحو والصرف و البلاغة و المعجم)-الدراسات القرآنية(علوم القرآن و تفسيره)",
        "attribute": "دكتور"
    },
    {
        "image": "",
        "AR_name": "د. غني اولاكنلي اولاجدي",
        "Fr_name": "OLAJIDE GNIU OLAKUNIE",
        "specialization": "الدراسات الإسلامية(الفقه و أصوله,علوم القرآن,التفسير,علوم الحديث,الفكر الإسلامي),والقانون(القانون الولي الإنساني,المحاسبة العمومية,الحكامة المالية,الحكامة الجيدة,المالية العمومية,السياسات العمومية,القانون الجنائي العام)",
        "attribute": "دكتور"
    },
    {
        "image": "",
        "AR_name": "د. عثمان تاموسيت",
        "Fr_name": "OTHMANE TAMOUSSIT",
        "specialization": "الجغرافيا",
        "attribute": "---"
    },
    {
        "image": "",
        "AR_name": "د. سعيد الأشعري",
        "Fr_name": "SAID AL ACHARI",
        "specialization": "التراث الثقافي-علم الإجتماع-الأنثروبولوجيا",
        "attribute": "أستاذ محاضر"
    },
    {
        "image": "",
        "AR_name": "د. يوسف لشكر",
        "Fr_name": "YOUSSEF LACHGAR",
        "specialization": "قانون الأسرة -الوساطة و التحكيم-القانون و الدكاء الإصطناعي",
        "attribute": "دكتور في الحقوق و أستاد زائر"
    },
    {
        "image": "",
        "AR_name": "د. ميلود سوالمة",
        "Fr_name": "MILOUD SOUALMA",
        "specialization": "التاريخ",
        "attribute": "دكتور و أستاذ السلك الثاني"
    },
    {
        "image": "",
        "AR_name": "د. عبد الله الحرشي",
        "Fr_name": "ABDELLAH ELHARCHI",
        "specialization": "القانون الخاص (الأسرة,العقود,العقار)",
        "attribute": "دكتور في الحقوق"
    },
    {
        "image": "",
        "AR_name": "د. رضوان تاشفين",
        "Fr_name": "REDOUANE TACHFINE",
        "specialization": "القانون العام(العلوم السياسية,العلوم الإدارية...),القانون الخاص,الفلسفة",
        "attribute": "أستاذ زائر"
    },
    {
        "image": "",
        "AR_name": "د. قلعي عبد الملك",
        "Fr_name": "KALAI ABDELMALIK",
        "specialization": "علوم الإعلام والتواصل - الدراسات الامازيغية",
        "attribute": "----------"
    },
    {
        "image": "",
        "AR_name": "د. داود الهكيوي",
        "Fr_name": "DAOUD EL HAKKIOUI",
        "specialization": "الأدب العربي-النقد الأدبي-البلاغة العربية -اللغة العربية",
        "attribute": "----------"
    },
    {
        "image": "",
        "AR_name": "د. بدر القاسمي",
        "Fr_name": "BADR KASIMI",
        "specialization": "القانون الدستوري-القانون البرلماني-القانون الإداري-العلاقات الدولية-الدراسات الإستراتيجية",
        "attribute": "دكتور في القانون الغام"
    },
    {
        "image": "",
        "AR_name": "د. عبد المجيد باباابريك",
        "Fr_name": "ABDELMAJID BABA BREK",
        "specialization": "الدراسات الإسلامية(الفقه وأصوله) -ديداكتيك التربية الإسلامية",
        "attribute": "----------"
    },
    {
        "image": "",
        "AR_name": "د. محمد فتحي",
        "Fr_name": "MOHAMED FATHI",
        "specialization": "الجغرافيا الطبيعية-الجغرافيا البشرية-ديداكتيك مادة الإجتماعيات*علوم التربية*المقاربات البيداغوجية-بيداغوجيات التعلم",
        "attribute": "أستاذ باحث"
    },
    {
        "image": "",
        "AR_name": "د. بوشتى المشروح",
        "Fr_name": "BOUCHTA ELMACHROUH",
        "specialization": "التاريخ و السينما و التربية",
        "attribute": "أستاذ زائر"
    },
    {
        "image": "",
        "AR_name": "د. حسن قوبع",
        "Fr_name": "HASSAN KOUBAA",
        "specialization": "القانون العام",
        "attribute": "أستاذ زائر"
    },
    {
        "image": "",
        "AR_name": "د. ابراهيم الهيباوي",
        "Fr_name": "BRAHIM EL HIBAOUI",
        "specialization": "علم الإجتماع,الأنثروبولوجيا -الفلسفة الحديثة و المعاصرة",
        "attribute": "دكتور في علم الإجتماع"
    },
    {
        "image": "",
        "AR_name": "د. بوبكر اشو",
        "Fr_name": "Boubakar Ichou",
        "specialization": "العلوم الشرعية - التاريخ",
        "attribute": "إطار بوزارة التربية الوطنية"
    },
    {
        "image":"",
        "AR_name": "د. الهاني إلياس",
        "Fr_name": "EL HANI ELYASS",
        "specialization": "الفكر الإسلامي والحضارة.مناهج البحث و تقنياته.التاريخ والتاريخ الإسلامي.الفلسفة والفلسفة الإسلامية.الحركات الإسلامية الحديثة.المدارس الكلامية.التربية وأساليب التواصل.حوار الأديان و الحضارات.السنن الإجتماعية و فقه الواقع",
        "attribute": "أستاذ مساعد"
    },
    {
        "image":"",
        "AR_name": "د. يوسف اعسيلة",
        "Fr_name": "AASSILA YOUSSEF",
        "specialization": "ديداكتيك اللغة العربية",
        "attribute": "استاذ زائر"
    },
    {
        "image":"",
        "AR_name": "رشيد زاح",
        "Fr_name": "RACHID ZAHE",
        "specialization": "(......... الحقل التربوي(علوم التربية - الديداكتيك - البحوث التدخلية - البحوث التربويةالدراسات الإسلامية: الفقه و الأصول",
        "attribute": "دكتور و أستاذ باحث"
    },
    {
        "image":"",
        "AR_name": "د. اشرف ركراكي",
        "Fr_name": "ACHRAF REGURAGUI",
        "specialization": "القانون العقاري",
        "attribute": "دكتور في القانون الخاص"
    },
    {
        "image":"",
        "AR_name": "د. السعدية نوجدي",
        "Fr_name": "SAADIA NOUJDI",
        "specialization": "علم الإجتماع-التاريخ-الفلسفة-الآداب العربية",
        "attribute": "أستاذة باحثة"
    },
    {
        "image":"",
        "AR_name": "د. عبد العزيز الهلالي",
        "Fr_name": "ABDELAZIZ EL HILALI",
        "specialization": "القانون العام ",
        "attribute": "دكتور في القانون "
    },
    {
        "image":"",
        "AR_name": "د. طريق الخودي",
        "Fr_name": "TARIK  ELKHOUDI",
        "specialization": "الأدب العربي -السيميائيات-علوم اللغة -النقد الثقافي -الإعلام",
        "attribute": ""
    },
    {
        "image":"",
        "AR_name": "د. محمد احديدو",
        "Fr_name": "MOHAMMED HDIDOU",
        "specialization": "قضايا الجماعات الترابية و الحكامة و التنمية-القانون الإداري و علم الإدارة -المالية العامة -القانون الدستوري و علم السياسة ",
        "attribute": "دكتور في القانون العام"
    }
]



export default data_reviewers