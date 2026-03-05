const AcademicRules = () => {
  const academicRulesPdfUrl = "/path-to-academic-rules.pdf";

  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Academic Rules</h2>
      <p className="text-gray-600 mb-6">
        View the complete academic rules and regulations for the department.
      </p>
      
      <div className="flex justify-center">
        <a
          href="https://res.cloudinary.com/dncpxsaxa/image/upload/v1753990375/UG_Rulebook_23Jul24_ibzl9c.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#faa519] text-white rounded-xl font-medium 
            hover:bg-[#faa519]/90 transition-all duration-200 shadow-md
            hover:shadow-lg"
        >
          View Academic Rules (PDF)
        </a>
      </div>
    </div>
  );
};

export default AcademicRules;
