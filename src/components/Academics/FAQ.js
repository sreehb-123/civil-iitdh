import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "What are the office hours of the CIE department?",
      answer: "The department office is open Monday to Friday from 9:00 AM to 6:00 PM. The office remains closed on weekends and public holidays."
    },
    {
      question: "How can I schedule a visit to the department?",
      answer: "To schedule a visit, please email civiloffice@iitdh.ac.in with your details and purpose of visit at least one week in advance."
    },
    {
      question: "How do I contact a specific faculty member?",
      answer: "Faculty contact information is available on the People section of our website. You can directly email the faculty member using their individual email addresses."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
      
      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 
                hover:bg-gray-100 transition-colors duration-200 text-left"
            >
              <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-[#89288f] transition-transform duration-200 ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-white text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-[#89288f]/5 rounded-xl border border-[#89288f]/20">
        <p className="text-gray-700 text-sm">
          <strong>Still have questions?</strong> Contact the Academic Office at{" "}
          <a href="mailto:academicstaff@iitdh.ac.in" className="text-[#89288f] hover:underline">
            academicstaff@iitdh.ac.in
          </a>{" "}
          or visit during office hours (Monday–Friday, 9:00 AM – 6:00 PM).
        </p>
      </div>
    </div>
  );
};

export default FAQ;
