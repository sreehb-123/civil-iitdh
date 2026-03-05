const TimeTable = () => {
  const timetablePdfUrl = "https://iitdh.ac.in/sites/default/files/2026-02/Time%20Table%202025-26%20Spring%20%281%29.pdf";

  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Time Table</h2>
      <p className="text-gray-600 mb-6">
        Below is the timetable for the current semester. You can navigate through the pages, view details, and download the complete schedule.
      </p>
      
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="w-full h-[500px] sm:h-[600px] mb-4">
          <iframe
            src={timetablePdfUrl}
            className="w-full h-full rounded-lg border border-gray-300"
            title="Time Table PDF"
          />
        </div>
        
        <div className="flex justify-center">
          <a
            href={timetablePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#faa519] text-white rounded-xl font-medium 
              hover:bg-[#faa519]/90 transition-all duration-200 shadow-md
              hover:shadow-lg"
          >
            Open Timetable
          </a>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
