import { Timeline, useMatches } from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";
import PublicImage from "./PublicImage";

const EducationInfo = [
  {
    institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar (NIT Jalandhar)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Nov 2022 - June 2026",
    grade: "CGPA: 9.01",
  },
  {
    institute: "Dayanand Model Sr. Sec. School, Jalandhar",
    degree: "Senior Secondary School (CBSE XII)",
    duration: "Graduated: 2022",
    grade: "Percentage: 92.2%",
  },
  {
    institute: "Dayanand Model Sr. Sec. School, Jalandhar",
    degree: "Secondary School (CBSE X)",
    duration: "Graduated: 2020",
    grade: "Percentage: 91.8%",
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
      key={index}
      className="!pt-12 !mb-2 sm-mx:!p-1"
      bullet={<IconSchool className="!text-bgColor" size={size} />}
    >
      <div className="border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2">
        <div className="flex flex-col">
          <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base">
            {item.institute}
          </div>
          <div className="text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
            {item.degree} &#x2022; {item.duration}
          </div>
        </div>
        <div className="text-textColor text-lg font-medium md-mx:text-sm xs-mx:text-xs">
          {item.grade}
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
    xs: 25,
    md: 30,
  });

  return (
    <div
      className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono"
      id="Education"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">04.&nbsp;</span>Education
      </h1>
      <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
        {TimelineItem(EducationInfo)}
        <Timeline.Item
          bullet={<IconSchool className="!text-bgColor" size={size} />}
        ></Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
