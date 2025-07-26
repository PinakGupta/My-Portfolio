import { Timeline, useMatches } from "@mantine/core";
import { IconSchool, IconAward, IconCalendar } from "@tabler/icons-react";
import PublicImage from "./PublicImage";

const EducationInfo = [
  {
    institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar (NIT Jalandhar)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Nov 2022 - June 2026",
    grade: "CGPA: 9.05",
    logo: "nit-jalandhar.png", // Add logo if available
    status: "current"
  },
  {
    institute: "Dayanand Model Sr. Sec. School, Jalandhar",
    degree: "Senior Secondary School (CBSE XII)",
    duration: "Graduated: 2022",
    grade: "Percentage: 92.2%",
    logo: "school.png", // Add logo if available
    status: "completed"
  },
  {
    institute: "Dayanand Model Sr. Sec. School, Jalandhar",
    degree: "Secondary School (CBSE X)",
    duration: "Graduated: 2020",
    grade: "Percentage: 91.8%",
    logo: "school.png", // Add logo if available
    status: "completed"
  },
];

const TimelineItem = (items: any) => {
  const size = useMatches({
    xs: 15,
    md: 20,
  });

  return items.map((item: any, index: number) => (
    <Timeline.Item
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={index * 200}
      key={index}
      className="!pt-12 !mb-4 sm-mx:!pt-8"
      bullet={
        <div className={`p-2 rounded-full ${item.status === 'current' ? 'bg-primaryColor' : 'bg-primaryColor/80'}`}>
          <IconSchool className="!text-bgColor" size={size} />
        </div>
      }
    >
      <div className="border shadow-[0_0_15px_0_#64FFDA30] hover:-translate-y-3 hover:shadow-[0_0_25px_0_#64FFDA50] transition-all duration-500 ease-in-out flex flex-col gap-4 border-primaryColor/60 hover:border-primaryColor p-6 rounded-2xl bg-bgColor/50 backdrop-blur-sm group sm-mx:p-4">
        
        {/* Header with Logo and Status */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Institution Logo (if available) */}
              {item.logo && (
                <div className="w-12 h-12 rounded-full bg-primaryColor/10 border border-primaryColor/30 flex items-center justify-center">
                  <IconSchool size={24} className="text-primaryColor" />
                </div>
              )}
              {item.status === 'current' && (
                <span className="px-3 py-1 bg-primaryColor/20 text-primaryColor text-xs font-bold rounded-full border border-primaryColor/40 animate-pulse">
                  CURRENT
                </span>
              )}
            </div>
            
            {/* Institution Name */}
            <div className="text-white text-2xl font-bold group-hover:text-primaryColor transition-colors duration-300 mb-3 sm-mx:text-xl xs-mx:text-lg leading-tight">
              {item.institute}
            </div>
          </div>
        </div>

        {/* Degree Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <IconAward className="w-5 h-5 text-primaryColor mt-1 flex-shrink-0" />
              <div>
                <p className="text-primaryColor text-sm font-medium mb-1">Degree</p>
                <p className="text-white font-semibold text-lg md-mx:text-base sm-mx:text-sm leading-tight">
                  {item.degree}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <IconCalendar className="w-5 h-5 text-primaryColor mt-1 flex-shrink-0" />
              <div>
                <p className="text-primaryColor text-sm font-medium mb-1">Duration</p>
                <p className="text-textColor font-medium md-mx:text-sm xs-mx:text-xs">
                  {item.duration}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grade */}
        <div className="flex items-center justify-between pt-4 border-t border-primaryColor/20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primaryColor rounded-full animate-pulse"></div>
            <span className="text-primaryColor text-sm font-medium">Academic Performance</span>
          </div>
          <div className="px-4 py-2 bg-primaryColor/10 border border-primaryColor/30 rounded-lg">
            <span className="text-primaryColor font-bold text-lg md-mx:text-base">
              {item.grade}
            </span>
          </div>
        </div>
      </div>
    </Timeline.Item>
  ));
};

const Education = () => {
  const size = useMatches({
    xs: 15,
    md: 20,
  });
  const dot = useMatches({
    xs: 35,
    md: 40,
  });

  return (
    <div
      className="px-16 mx-20 md-mx:px-6 sm-mx:px-4 xs-mx:px-2 lg-mx:mx-0 my-20 mb-32 font-mono"
      id="Education"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white mb-4">
          <span className="text-primaryColor">04.&nbsp;</span>Education
        </h1>
        <div className="w-24 h-1 bg-primaryColor mx-auto rounded-full mb-4"></div>
        <p className="text-textColor text-lg md-mx:text-base sm-mx:text-sm max-w-2xl mx-auto">
          My academic journey and educational background
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <Timeline 
          color="#64FFDA" 
          active={EducationInfo.length} 
          bulletSize={dot} 
          lineWidth={3}
          className="relative"
        >
          {TimelineItem(EducationInfo)}
          
          {/* Final Timeline Item */}
          <Timeline.Item
            bullet={
              <div className="p-2 rounded-full bg-primaryColor/60">
                <IconSchool className="!text-bgColor" size={size} />
              </div>
            }
            className="!pt-8"
          >
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 border border-primaryColor/30 text-primaryColor rounded-full bg-primaryColor/5">
                <span className="w-2 h-2 bg-primaryColor rounded-full animate-pulse"></span>
                <span className="font-medium">Journey Continues...</span>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;