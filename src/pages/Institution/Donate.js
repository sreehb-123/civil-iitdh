import { FaPlane, FaUniversity, FaLandmark, FaMoneyBillWave, FaPiggyBank, FaReceipt, FaShieldAlt, FaUniversity as FaInstitute } from "react-icons/fa";

const impactAreas = [
  "Structural engineering",
  "Geotechnical engineering",
  "Water resource engineering",
  "Transportation engineering",
  "Research and student support",
  "Specialized equipment and facilities",
];

const donationHighlights = [
  {
    title: "Support Research Growth",
    summary:
      "Your contribution directly strengthens innovative research, student development, and the department's ability to respond to emerging infrastructure challenges.",
    icon: FaShieldAlt,
  },
  {
    title: "Enable Academic Travel",
    summary:
      "Funding helps scholars present research at international conferences and build stronger academic networks.",
    icon: FaPlane,
  },
  {
    title: "Improve Facilities",
    summary:
      "Contributions support specialized equipment, research contingencies, and the growth of a globally competitive academic environment.",
    icon: FaUniversity,
  },
];

const bankDetails = [
  { label: "Name", value: "IIT Dharwad CSR and Donation", icon: FaPiggyBank },
  { label: "Account Number", value: "4070101002353", icon: FaMoneyBillWave },
  { label: "IFSC Code", value: "CNRB0004070", icon: FaReceipt },
  { label: "Bank & Branch", value: "Canara Bank, Belur Industrial Area, SME, Dharwad", icon: FaLandmark },
];

const doneeDetails = [
  { label: "Name of the Donee", value: "Indian Institute of Technology Dharwad" },
  { label: "PAN No. of the Donee", value: "AAAGI0111B" },
  {
    label: "Address of the Donee",
    value: "WALMI Campus, Belur Industrial Area, NH 4, Pune Bengaluru Road, Near High Court, Dharwad – 580011, Karnataka",
  },
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pb-10 pt-14 sm:pt-16">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Donate</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">Support the Department</h1>
        </div>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
          <div className="mx-auto max-w-5xl space-y-4 text-gray-700">
            <p className="text-sm leading-7 sm:text-base">
              The <strong>Department of Civil and Infrastructure Engineering</strong> at IIT Dharwad is steadily growing into a hub of innovation, sustainability, and advanced research. With a strong focus on addressing real-world infrastructure challenges, our faculty and students are engaged in impactful research across structural engineering, geotechnical engineering, water resource engineering, and transportation engineering.
            </p>
            <p className="text-sm leading-7 sm:text-base">
              As a young and evolving department, we are committed to nurturing talent and building a globally competitive academic and research environment. For funding, we depend on competitive grants from government and private agencies, which often fall short in meeting the broader needs of our students and scholars, especially in areas such as travel for presenting research at international conferences, procuring specialized equipment, and supporting day-to-day research contingencies.
            </p>
            <p className="text-sm leading-7 sm:text-base">
              To bridge this gap, we invite generous contributions from individuals, alumni, and organizations who believe in the power of education and research to shape a better future. Your support will directly enhance our students' academic and professional journeys and strengthen our capacity for high-impact research.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {donationHighlights.map((item) => {
            const ItemIcon = item.icon;

            return (
              <article key={item.title} className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-gray-600">{item.summary}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                <FaUniversity className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">How to Donate</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Bank transfer details</h2>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  While donating, we kindly request that you mention that the contribution is intended for the Civil and Infrastructure Engineering Department.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {bankDetails.map((detail) => {
                const DetailIcon = detail.icon;

                return (
                  <div key={detail.label} className="flex items-start gap-4 rounded-3xl border border-gray-200 bg-gray-50/80 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                      <DetailIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{detail.label}</p>
                      <p className="mt-1 text-sm font-medium leading-7 text-gray-800">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                <FaInstitute className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">80G Details</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Tax exemption information</h2>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Donations/Contributions made to the Institute can be claimed as a deduction under Section 80G of the Income Tax Act, subject to the stated conditions and modes of payment.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {doneeDetails.map((detail) => (
                <div key={detail.label} className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{detail.label}</p>
                  <p className="mt-2 text-sm font-medium leading-7 text-gray-800">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-[#89288f]/10 bg-[#f8f4ff] p-4 text-sm leading-7 text-gray-700">
              The donation/contribution made to the Institute is eligible for 100% Deduction Without Qualifying Limit as per section 80G (2)(a)(iii) of the Income Tax Act 1961.
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Impact Areas</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Where your support helps</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;