const ContactUs = () => {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Department Address */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Department Address</h3>
          <div className="space-y-2 text-gray-600 text-sm">
            <p>Department of Civil & Infrastructure Engineering</p>
            <p>Indian Institute of Technology Dharwad</p>
            <p>Permanent Campus, Chikkamalligawad</p>
            <p>Dharwad – 580011, Karnataka, India</p>
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="font-semibold text-gray-800">Department Head</p>
              <p>Prof. Giridhar Rajesh Bande</p>
            </div>
          </div>
        </div>

        {/* Card 2: Contact Points */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Points</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-800">Department Office</p>
              <a href="mailto:civiloffice@iitdh.ac.in" className="text-[#89288f] hover:underline">
                civiloffice@iitdh.ac.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Head (CIE)</p>
              <a href="mailto:head.civil@iitdh.ac.in" className="text-[#89288f] hover:underline">
                head.civil@iitdh.ac.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-800">PG Admissions (CIE)</p>
              <a href="mailto:pgadmissions@iitdh.ac.in" className="text-[#89288f] hover:underline">
                pgadmissions@iitdh.ac.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Training and Placement Officer (TPO)</p>
              <a href="mailto:tpo@iitdh.ac.in" className="text-[#89288f] hover:underline">
                tpo@iitdh.ac.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Associate Dean R&D, Projects</p>
              <a href="mailto:adean.rnd@iitdh.ac.in" className="text-[#89288f] hover:underline">
                adean.rnd@iitdh.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Location & Directions */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Location & Directions</h3>
          
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.890632363024!2d74.9350277!3d15.4876111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbd2a4c1b9b9c03%3A0xf6d9a2a7a4f1d4b6!2sIndian%20Institute%20of%20Technology%20DHARWAD!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
              className="w-full h-48 rounded-lg border border-gray-300"
              loading="lazy"
              title="IIT Dharwad Location"
            />
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800">By Air</p>
              <p>The nearest airport is Hubli Airport (HBX), approximately 20 km from campus.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">By Train</p>
              <p>Dharwad Railway Station is well connected to major cities.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">By Road</p>
              <p>IIT Dharwad is located on the Pune–Bangalore Highway (NH 48).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
