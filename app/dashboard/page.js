import { ButtonsShowcase, Button, CategoryButton, AddIcon, ArrowIcon } from '../components/buttons';
import CourseCard from '../components/cards/courses/CourseCard';
import BookCard from '../components/cards/books/BookCard';
import CategoryCard from '../components/cards/categories/CategoryCard';
import { ToggleSwitch, RadioButton } from '../components/selectioncontrol';
import CourseTrackerShowcase from '../components/coursetracker/CourseTrackerShowcase';
import AIChatInputWrapper from '../components/chat/AIChatInputWrapper';
import { LearningHoursChart, CompletedLessonsChart, CourseDistributionChart, LoginCountChart, TopLessonsChart } from '../components/charts';
import Image from 'next/image';
import image1 from "../../public/image1.svg";
import image2 from "../../public/image2.png";
import { ActivityCardWrapper } from '../components/cards/activity';
const Page = () => {
  return (
    <div className="p-4">
      

      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="m" text="استمر في التعلم" />
          <Button variant="outline" size="lg" text="تصفح جميع الدورات" withIcon={false} />
          <Button variant="ghost" size="s" text="ابدأ الآن" />
          <CategoryButton text="تصفح جميع الدورات" />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            size="m" 
            text="زر بصورة خارجية" 
            iconSrc="/next.svg" 
            iconWidth={20} 
            iconHeight={20} 
            iconAlt="Next.js Logo" 
          />
          <Button 
            variant="outline" 
            size="m" 
            text="زر بمكون أيقونة مخصص" 
            icon={<ArrowIcon color="#01DD86" />} 
          />
          <CategoryButton 
            text="زر فئة بصورة" 
            iconSrc="/vercel.svg" 
            iconWidth={20} 
            iconHeight={20} 
            iconAlt="Vercel Logo" 
          />
        </div>
          <CourseCard 
          title="دورة تصميم تجربة وواجهة المستخدم"
          imageSrc="/placeholder-course.jpg"
          hasCertificate={true}
          videosCount={12}
          duration="10 ساعات"
          buttonText="إبدأ الآن"
        />
        
        {/* Another Course Card */}
        <CourseCard 
          title="أساسيات تطوير الويب"
          imageSrc="/placeholder-course2.jpg"
          hasCertificate={false}
          videosCount={24}
          duration="15 ساعة"
          buttonText="مواصلة التعلم"
        />

<BookCard 
          title="اسم الكتاب"
          imageSrc="/placeholder-book.jpg"
          category="الكتب التعليمية"
          buttonText="قراءة الان"
          buttonVariant="primary"
        />
        
        {/* Another Book Card */}
        <BookCard 
          title="رواية جديدة"
          imageSrc="/placeholder-book2.jpg"
          category="الروايات"
          buttonText="اقرأ المزيد"
          buttonVariant="outline"
        />
        
        {/* Yet Another Book Card */}
        <BookCard 
          title="كتاب تطوير الذات"
          imageSrc="/placeholder-book3.jpg"
          category="تطوير الذات"
          buttonText="استكشف الكتاب"
          buttonVariant="primary"
          withIcon={true}
        />
      </div>

      {/* Selection Controls Section */}
      {/* Category Cards Section */}
      <div className="mt-10 p-6 border border-gray-200 rounded-xl w-full">
        <h2 className="text-xl font-bold mb-6 text-right">فئات الدورات</h2>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-6">
              {/* Category Card Examples */}
              <CategoryCard 
                title="دورات البرمجة الأساسية" 
                imageSrc={
                  <Image 
                    src={image2} 
                    alt="Programming" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                }
              />
              
              <CategoryCard 
                title="تصميم واجهات المستخدم" 
                imageSrc={
                  <Image 
                    src={image1} 
                    alt="UI Design" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Selection Controls Section */}
      <div className="mt-10 p-6 border border-gray-200 rounded-xl w-full">
        <h2 className="text-xl font-bold mb-6 text-right">مكونات التحكم بالاختيار</h2>
        
        <div className="space-y-6">
          {/* Toggle Switch */}
          <div className="flex flex-col gap-4 mb-8">
            <h3 className="text-lg font-semibold text-right">أزرار التبديل (Toggle Switch)</h3>
            
            <div className="flex flex-wrap gap-8 p-4 border border-dashed border-gray-300 rounded-lg">
              {/* Default Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">الحالة الافتراضية:</span>
                <ToggleSwitch checked={false} />
              </div>
              
              {/* Active Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">الحالة النشطة:</span>
                <ToggleSwitch checked={true} />
              </div>
              
              {/* Toggle with Text */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">تفعيل الإشعارات:</span>
                <ToggleSwitch checked={true} />
              </div>
              
              {/* Disabled Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">الحالة المعطلة:</span>
                <ToggleSwitch disabled={true} />
              </div>
              
              {/* Custom Color Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">لون مخصص:</span>
                <ToggleSwitch checked={true} activeColor="#01DD86" />
              </div>
            </div>
          </div>
          
          {/* Radio Button */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-right">أزرار الاختيار (Radio Button)</h3>
            
            <div className="flex flex-wrap gap-8 p-4 border border-dashed border-gray-300 rounded-lg">
              {/* Radio Group Example */}
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium">اختر نوع الاشتراك:</div>
                
                <div className="flex flex-col gap-3 mr-4">
                  {/* Default Radio */}
                  <div className="flex items-center gap-2">
                    <RadioButton name="subscription"   />
                    <span className="text-sm">اشتراك شهري</span>
                  </div>
                  
                  {/* Unchecked Radio */}
                  <div className="flex items-center gap-2">
                    <RadioButton name="subscription" />
                    <span className="text-sm">اشتراك سنوي</span>
                  </div>
                  
                  {/* Disabled Radio */}
                  <div className="flex items-center gap-2">
                    <RadioButton name="subscription" value="lifetime" disabled={true} />
                    <span className="text-sm text-gray-400">اشتراك مدى الحياة (غير متاح)</span>
                  </div>
                </div>
                {/* <Image
                src="/image1.svg"
                alt="Book"
                width={100}
                height={100}
                
                /> */}
                <Image
                src="/image1.webp"
                alt="Book"
                width={100}
                height={100}
                />
                <Image
                src={image1}
                alt="Book"
                width={100}
                height={100}
                quality={80}
                />


                <Image
                src="/image2.png"
                alt="Book"
                width={100}
                height={100}
                />
    <Image
                src={image2}
                alt="Book"
                width={100}
                height={100}
                />


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Progress Tracker Section */}
      <div className="mt-10 p-6 border border-gray-200 rounded-xl w-full">
        <h2 className="text-xl font-bold mb-6 text-right">تتبع تقدم الدورة</h2>
        <CourseTrackerShowcase />
      </div>
      
      {/* AI Chat Input Section */}
      <div className="mt-10 p-6 border border-gray-200 rounded-xl w-full">
        <h2 className="text-xl font-bold mb-6 text-right">مكون محادثة الذكاء الاصطناعي</h2>
        
        {/* Variant A - Vertical Layout */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-right">النموذج A - تصميم عمودي</h3>
          <div className="flex justify-end">
            <AIChatInputWrapper variant="A" />
          </div>
        </div>
        
        {/* Variant B - Horizontal Layout */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-right">النموذج B - تصميم أفقي</h3>
          <AIChatInputWrapper variant="B" />
        </div>
      </div>
      {/* إحصائيات التعلم */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-right">إحصائيات التعلم</h3>
        <div className="grid grid-cols-1 gap-8 mb-8">
          <LearningHoursChart 
            totalHours={35} 
            growthPercentage={1.3} 
            currentMonth="مايو 2024" 
            currentMonthHours={8}
          />
          
          <CompletedLessonsChart 
            selectedMonth="مايو 2024"
          />
        </div>
      </div>
      
      {/* بطاقة النشاط */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-right">آخر الأنشطة</h3>
        <ActivityCardWrapper/>  
      </div>

      <CourseDistributionChart/>
      
      {/* إحصائيات تسجيل الدخول */}
      <div className="mb-8 mt-8">
        <h3 className="text-lg font-semibold mb-4 text-right">إحصائيات تسجيل الدخول</h3>
        <LoginCountChart />
      </div>
      
      {/* أعلى الدروس مشاهدة */}
      <div className="mb-8 mt-8">
        <h3 className="text-lg font-semibold mb-4 text-right">أعلى الدروس مشاهدة</h3>
        <div className="flex justify-center md:justify-start">
          <TopLessonsChart />
        </div>
      </div>
    </div>
  )
}

export default Page