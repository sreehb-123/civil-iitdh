import { useRef, useState } from "react";
import {
  FaAward,
  FaBriefcase,
  FaBullhorn,
  FaCrown,
  FaHandshake,
  FaMedal,
  FaShareAlt,
  FaUsers,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";

const sponsorshipTiers = [
  {
    id: "supporting",
    name: "Supporting Sponsor",
    amount: "₹25,000",
    summary: "A thoughtful entry tier for focused event visibility and participation.",
    badge: FaHandshake,
  },
  {
    id: "bronze",
    name: "Bronze Sponsor",
    amount: "₹50,000",
    summary: "A balanced tier for branding, reach, and early engagement with students.",
    badge: FaMedal,
  },
  {
    id: "silver",
    name: "Silver Sponsor",
    amount: "₹1,00,000",
    summary: "Stronger visibility across campus touchpoints and digital promotion.",
    badge: FaAward,
  },
  {
    id: "gold",
    name: "Gold Sponsor",
    amount: "₹2,00,000",
    summary: "Premium placement for maximum visibility, engagement, and recruitment access.",
    badge: FaCrown,
  },
];

const tierBenefits = {
  supporting: [
    {
      key: "brand-visibility",
      title: "Brand Visibility",
      icon: FaBullhorn,
      preview: "Name listed on event posters and brochures.",
      details: "Name listed on event posters and brochures.",
    },
    {
      key: "video-acknowledgement",
      title: "Video Acknowledgement",
      icon: FaVideo,
      preview: "Logo mention in post-event highlights.",
      details: "Logo mention in post-event highlights.",
    },
    {
      key: "social-media-promotion",
      title: "Social Media Promotion",
      icon: FaShareAlt,
      preview: "Mention in one post.",
      details: "Mention in one post.",
    },
    {
      key: "event-participation",
      title: "Event Participation",
      icon: FaUsers,
      preview: "Invitation to attend sessions.",
      details: "Invitation to attend sessions.",
    },
  ],
  bronze: [
    {
      key: "brand-visibility",
      title: "Brand Visibility",
      icon: FaBullhorn,
      preview: "Logo on event posters and brochures.",
      details: "Logo on event posters and brochures.",
    },
    {
      key: "video-acknowledgement",
      title: "Video Acknowledgement",
      icon: FaVideo,
      preview: "Logo display at session opening.",
      details: "Logo display at session opening.",
    },
    {
      key: "social-media-promotion",
      title: "Social Media Promotion",
      icon: FaShareAlt,
      preview: "Mention on CEA social channels.",
      details: "Mention on CEA social channels.",
    },
    {
      key: "event-participation",
      title: "Event Participation",
      icon: FaUsers,
      preview: "Invitation to attend sessions.",
      details: "Invitation to attend sessions.",
    },
    {
      key: "recruitment-access",
      title: "Recruitment Access",
      icon: FaBriefcase,
      preview: "Resume access to select students.",
      details: "Resume access to select students.",
    },
  ],
  silver: [
    {
      key: "brand-visibility",
      title: "Brand Visibility",
      icon: FaBullhorn,
      preview: "Prominent logo on event posters, brochures and banners.",
      details: "Prominent logo on event posters, brochures and banners.",
    },
    {
      key: "on-campus-branding",
      title: "On-Campus Branding",
      icon: FaAward,
      preview: "Logo on banners at select locations.",
      details: "Logo on banners at select locations.",
    },
    {
      key: "video-acknowledgement",
      title: "Video Acknowledgement",
      icon: FaVideo,
      preview: "Short message with logo at session opening.",
      details: "Short message with logo at session opening.",
    },
    {
      key: "social-media-promotion",
      title: "Social Media Promotion",
      icon: FaShareAlt,
      preview: "Featured post on CEA social channels.",
      details: "Featured post on CEA social channels.",
    },
    {
      key: "event-participation",
      title: "Event Participation",
      icon: FaUsers,
      preview: "Complimentary invitation to all sessions.",
      details: "Complimentary invitation to all sessions.",
    },
    {
      key: "recruitment-access",
      title: "Recruitment Access",
      icon: FaBriefcase,
      preview: "Resume access to select students.",
      details: "Resume access to select students.",
    },
  ],
  gold: [
    {
      key: "brand-visibility",
      title: "Brand Visibility",
      icon: FaBullhorn,
      preview: "Prime logo placement on all event materials.",
      details: "Prime logo placement on all event materials including posters, brochures and banners.",
    },
    {
      key: "on-campus-branding",
      title: "On-Campus Branding",
      icon: FaAward,
      preview: "Logo on banners at key campus locations.",
      details: "Logo on banners at key campus locations.",
    },
    {
      key: "video-acknowledgement",
      title: "Video Acknowledgement",
      icon: FaVideo,
      preview: "Personalized video message shared on social media.",
      details: "Personalized video message and logo at session opening, shared on social media.",
    },
    {
      key: "social-media-promotion",
      title: "Social Media Promotion",
      icon: FaShareAlt,
      preview: "Dedicated posts and event highlights.",
      details: "Dedicated posts on CEA social channels and event highlights.",
    },
    {
      key: "event-participation",
      title: "Event Participation",
      icon: FaUsers,
      preview: "VIP invitations to sessions and exclusive events.",
      details: "VIP invitations to all sessions and exclusive CEA events.",
    },
    {
      key: "recruitment-access",
      title: "Recruitment Access",
      icon: FaBriefcase,
      preview: "Direct access to top students.",
      details: "Direct access to top students for internships, placements and projects.",
    },
  ],
};

const SponsorshipBenefitCard = ({ benefit }) => {
  const Icon = benefit.icon;

  return (
    <div className="group w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <h3 className="text-base font-semibold text-gray-800">{benefit.title}</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">{benefit.preview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const sponsorReasons = [
  {
    title: "Brand Visibility",
    icon: FaBullhorn,
    summary: "Place your name in front of students, faculty, and industry attendees through CEA-led events and materials.",
  },
  {
    title: "Talent Recruitment",
    icon: FaUsers,
    summary: "Connect directly with civil engineering students for internships, placements, projects, and future hiring.",
  },
  {
    title: "Industry-Academia Collaboration",
    icon: FaBriefcase,
    summary: "Build meaningful relationships with IIT Dharwad through talks, engagement, and long-term collaboration.",
  },
  {
    title: "CSR & Educational Impact",
    icon: FaAward,
    summary: "Support a high-impact educational initiative that advances learning, visibility, and community engagement.",
  },
];

const sponsorStats = [
  {
    label: "STUDENT REACHED",
    value: "400+",
    icon: FaUsers,
  },
  {
    label: "EVENTS",
    value: "10+",
    icon: FaAward,
  },
  {
    label: "INDUSTRY EXPERT HOSTED",
    value: "15+",
    icon: FaBriefcase,
  },
];

const Sponsors = () => {
  const [selectedTier, setSelectedTier] = useState("gold");
  const benefitsSectionRef = useRef(null);

  const activeTier = sponsorshipTiers.find((tier) => tier.id === selectedTier) || sponsorshipTiers[0];
  const activeBenefits = tierBenefits[selectedTier] || [];

  const handleTierSelect = (tierId) => {
    setSelectedTier(tierId);

    window.requestAnimationFrame(() => {
      benefitsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="sidepage-container min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Sponsors</h1>
        </div>

        {/* <section className="mb-8 rounded-3xl border border-gray-200 bg-white/90 p-5 shadow-[0_24px_70px_rgba(39,38,53,0.08)] backdrop-blur sm:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl space-y-4 text-gray-700">
            <p className="text-sm leading-7 sm:text-base">
              Civil Engineering Association (CEA) at IIT Dharwad invites industry partners and organizations to collaborate with us to empower the next generation of civil engineers. As part of our mission to bridge the gap between academic learning and real-world practice, CEA organizes a series of Industry Expert Talks every academic year. These talks feature leading professionals from the civil engineering sector sharing their experiences, insights, and knowledge on emerging trends and best practices.
            </p>
            <p className="text-sm leading-7 sm:text-base">
              To make this initiative impactful and far-reaching, we welcome sponsorship support from visionary organizations that value innovation, education, and community engagement. Sponsorship opportunities are available in multiple tiers: Gold, Silver, Bronze, and Supporting Sponsorship, offering a range of benefits and visibility across our student and professional networks.
            </p>
          </div>
        </section> */}

        <section className="mb-8 rounded-3xl border border-gray-200 bg-white/90 p-4 shadow-[0_24px_70px_rgba(39,38,53,0.08)] backdrop-blur sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sponsorshipTiers.map((tier) => {
              const TierIcon = tier.badge;
              const selected = tier.id === selectedTier;

              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => handleTierSelect(tier.id)}
                  className={`group rounded-3xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)] ${
                    selected
                      ? "border-[#89288f] bg-gradient-to-br from-[#89288f] to-[#6f2274] text-white shadow-[0_20px_45px_rgba(137,40,143,0.22)]"
                      : "border-gray-200 bg-white text-gray-800"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${
                          selected
                            ? "border-white/25 bg-white/12 text-[#faa519]"
                            : "border-[#faa519]/20 bg-[#faa519]/10 text-[#89288f]"
                        }`}
                      >
                        <TierIcon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-xl font-bold">{tier.name}</h2>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                        selected ? "bg-white/12 text-[#faa519]" : "bg-[#faa519]/10 text-[#89288f]"
                      }`}
                    >
                      Tier
                    </span>
                  </div>

                  <div className="mt-4 text-2xl font-extrabold">{tier.amount}</div>
                  <p className={`mt-3 text-sm leading-6 ${selected ? "text-white/85" : "text-gray-600"}`}>
                    {tier.summary}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                    <FaCheckCircle className={selected ? "text-[#faa519]" : "text-[#89288f]"} />
                    <span>Click to explore benefits</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section ref={benefitsSectionRef} className="grid gap-6 lg:grid-cols-[1fr_1.25fr] scroll-mt-24">
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">
                  Selected Tier
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">{activeTier.name}</h2>
              </div>
              <div className="rounded-2xl bg-[#faa519]/10 px-4 py-2 text-right">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#89288f]">Contribution</div>
                <div className="text-lg font-extrabold text-[#89288f]">{activeTier.amount}</div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#89288f]/10 bg-[#f8f4ff] p-4 text-sm leading-6 text-gray-700">
              {activeTier.summary}
            </div>


          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-6 lg:p-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">
                  Benefits
                </p>
                {/* <h2 className="mt-2 text-2xl font-bold text-gray-800">Interactive benefit cards</h2> */}
              </div>
              <span className="rounded-full bg-[#faa519]/10 px-3 py-1 text-xs font-semibold text-[#89288f]">
                Tap each card
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {activeBenefits.map((benefit) => (
                <SponsorshipBenefitCard
                  key={benefit.key}
                  benefit={benefit}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-white/90 p-5 shadow-[0_24px_70px_rgba(39,38,53,0.08)] backdrop-blur sm:p-6 lg:p-8">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">
              Why Sponsor CEA IITDH?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">
              Sponsorship that builds reach, relationships, and real impact
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-600 sm:text-base">
              Support CEA at IIT Dharwad to strengthen visibility, engage emerging talent, and contribute to a strong bridge between academia and industry.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {sponsorStats.map((stat) => {
              const StatIcon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="flex min-h-[10rem] items-center gap-4 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                    <StatIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold leading-none text-[#89288f]">{stat.value}</div>
                    <div className="mt-2 text-sm font-semibold tracking-wide text-gray-600">{stat.label}</div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sponsorReasons.map((reason) => {
              const ReasonIcon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
                      <ReasonIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{reason.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{reason.summary}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
