import CourseDetailsClient from './course-details-client';

const courses = [
  {
    id: '1',
    title: 'دورة تصميم تجربة وواجهة المستخدم',
    imageSrc: '/courses/course1.png',
    hasCertificate: true,
    videosCount: 12,
    duration: '10 ساعات',
    totalTime: '1 ساعة و 18 دقيقة',
    teacher: 'أحمد محمد',
    progress: 45,
    lessons: [
      { time: '10:30', title: 'مقدمة في تصميم واجهات المستخدم', status: 'completed' },
      { time: '15:20', title: 'أساسيات تجربة المستخدم والتصميم التفاعلي', status: 'completed' },
      { time: '12:45', title: 'تصميم واجهات المستخدم الفعالة', status: 'in-progress' },
      { time: '08:15', title: 'استراتيجيات تصميم تجربة المستخدم', status: 'not-started' },
      { time: '14:30', title: 'تحليل سلوك المستخدم في التصميم', status: 'not-started' },
      { time: '11:20', title: 'أدوات تصميم واجهات المستخدم الحديثة', status: 'not-started' },
      { time: '09:40', title: 'مبادئ التصميم التفاعلي', status: 'not-started' }
    ],
    description: `تهدف دورة تصميم تجربة المستخدم (UX) وتصميم واجهة المستخدم (UI) إلى تعليم العناصر الأساسية في تطوير البرمجيات الحديثة. تهدف تجربة المستخدم إلى تحسين تفاعل المستخدم مع المنتج، بينما يركز تصميم واجهة المستخدم على الجوانب المرئية والتفاعلية للمنتج مثل الألوان والأشكال والتخطيط. من خلال دمج هذين الاتجاهين، يمكن للشركات تقديم منتجات مبتكرة تلبي احتياجات المستخدمين وتحقق نجاحاً في السوق.`,
  },
  {
    id: '2',
    title: 'دورة تصميم الرسوم المتحركة',
    imageSrc: '/courses/course1.png',
    hasCertificate: true,
    videosCount: 15,
    duration: '12 ساعة',
    totalTime: '1 ساعة و 45 دقيقة',
    teacher: 'سارة أحمد',
    progress: 30,
    lessons: [
      { time: '12:30', title: 'أساسيات الرسوم المتحركة', status: 'completed' },
      { time: '15:45', title: 'برامج الرسوم المتحركة', status: 'completed' },
      { time: '10:20', title: 'تقنيات التحريك المتقدمة', status: 'in-progress' },
      { time: '14:10', title: 'إنشاء الشخصيات المتحركة', status: 'not-started' },
      { time: '08:55', title: 'تحريك الواجهات والتطبيقات', status: 'not-started' }
    ],
    description: `دورة تصميم الرسوم المتحركة تقدم مهارات وتقنيات إنشاء الرسوم المتحركة الاحترافية باستخدام برامج التصميم الحديثة. تغطي الدورة جميع مراحل إنتاج الرسوم المتحركة من فكرة أولية إلى منتج نهائي، مع التركيز على مبادئ الحركة والتوقيت والإخراج البصري.`,
  },
  {
    id: '3',
    title: 'دورة تطوير تطبيقات المحمول',
    imageSrc: '/courses/course1.png',
    hasCertificate: true,
    videosCount: 20,
    duration: '15 ساعة',
    totalTime: '2 ساعة و 10 دقائق',
    teacher: 'محمد علي',
    progress: 60,
    lessons: [
      { time: '15:10', title: 'مقدمة في تطوير تطبيقات الموبايل', status: 'completed' },
      { time: '18:45', title: 'تطوير تطبيقات الأندرويد', status: 'completed' },
      { time: '20:30', title: 'تطوير تطبيقات iOS', status: 'completed' },
      { time: '14:25', title: 'تطوير تطبيقات عبر المنصات', status: 'in-progress' },
      { time: '12:15', title: 'اختبار وتحسين تطبيقات الموبايل', status: 'not-started' }
    ],
    description: `تقدم هذه الدورة مهارات تطوير تطبيقات المحمول لمنصات أندرويد و iOS، مع التركيز على أطر العمل الحديثة والأدوات المستخدمة في الصناعة. ستتعلم كيفية إنشاء واجهات مستخدم جذابة، ودمج قواعد البيانات، واستهلاك واجهات برمجة التطبيقات، وتطوير تطبيقات متكاملة جاهزة للنشر.`,
  },
  {
    id: '4',
    title: 'دورة تحليل البيانات',
    imageSrc: '/courses/course1.png',
    hasCertificate: true,
    videosCount: 18,
    duration: '14 ساعة',
    totalTime: '1 ساعة و 50 دقيقة',
    teacher: 'ليلى حسن',
    progress: 75,
    lessons: [
      { time: '13:20', title: 'أساسيات تحليل البيانات', status: 'completed' },
      { time: '18:15', title: 'جمع وتنظيف البيانات', status: 'completed' },
      { time: '12:40', title: 'تحليل البيانات الإحصائي', status: 'completed' },
      { time: '15:30', title: 'تصور البيانات وعرضها', status: 'completed' },
      { time: '10:25', title: 'نماذج التنبؤ وتعلم الآلة', status: 'in-progress' }
    ],
    description: `تغطي دورة تحليل البيانات المهارات الأساسية اللازمة لاستخراج المعرفة والرؤى القيمة من البيانات. ستتعلم كيفية استخدام أدوات وتقنيات تحليل البيانات، وتطبيق الأساليب الإحصائية، وإنشاء تصورات بيانات فعالة، واستخدام تقنيات التعلم الآلي للتنبؤ بالاتجاهات المستقبلية.`,
  },
  {
    id: '5',
    title: 'دورة التسويق الرقمي',
    imageSrc: '/courses/course1.png',
    hasCertificate: true,
    videosCount: 16,
    duration: '10 ساعات',
    totalTime: '1 ساعة و 30 دقيقة',
    teacher: 'فاطمة محمود',
    progress: 20,
    lessons: [
      { time: '08:30', title: 'أساسيات التسويق الرقمي', status: 'completed' },
      { time: '12:15', title: 'تحسين محركات البحث SEO', status: 'in-progress' },
      { time: '10:45', title: 'التسويق عبر وسائل التواصل الاجتماعي', status: 'not-started' },
      { time: '14:20', title: 'التسويق بالمحتوى', status: 'not-started' },
      { time: '09:35', title: 'تحليلات التسويق الرقمي', status: 'not-started' }
    ],
    description: `تقدم دورة التسويق الرقمي فهماً شاملاً لاستراتيجيات التسويق عبر الإنترنت، من تحسين محركات البحث إلى التسويق عبر وسائل التواصل الاجتماعي. ستتعلم كيفية تطوير حملات تسويقية فعالة، وإنشاء محتوى جذاب، وتحليل أداء الحملات، وتحسين معدلات التحويل.`,
  }
];

export default async function CoursePage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-['Noto_Kufi_Arabic'] text-center">الدورة غير موجودة</h1>
      </div>
    );
  }

  return (
    <CourseDetailsClient course={course} />
  );
}
