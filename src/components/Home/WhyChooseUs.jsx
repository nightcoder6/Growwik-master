import { BiLineChart } from "react-icons/bi";
import { FaRocket, FaUsers } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

function WhyChooseUse({}) {
  const features = [
    {
      icon: <BiLineChart className="w-8 h-8 text-white" />,
      title: "Result-Driven Approach",
      description:
        "Develop effective strategies that align with your brand goals and market needs.",
    },
    {
      icon: <MdAttachMoney className="w-8 h-8 text-white" />,
      title: "Cost Effective Solution",
      description:
        "High-impact campaign tailored to your budget, delivering maximum value.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-white" />,
      title: "Campaign Management",
      description:
        "Develop effective strategies that align with your brand goals and market needs.",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: "Wide Influencer Network",
      description:
        "Connect with top-tier influencers and streamline collaboration for maximum impact.",
    },
    {
      icon: <TbReportAnalytics className="w-8 h-8 text-white" />,
      title: "Detailed Campaign Reports",
      description:
        "Access detailed analytics to measure campaign success and influencer effectiveness.",
    },
  ];

  return (
    <>
      <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-12">
            Why Choose Us?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gray-600 p-4 rounded-xl">{feature.icon}</div>

                <div className="flex-1">
                  <h3 className="text-red-500 font-bold text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white text-sm tracking-wider">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUse;
