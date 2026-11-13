export const doctor = {
  name: "Dr. Monjur Shoyeb Khan",
  shortName: "Dr. Shoyeb Khan",
  nameBn: "ডাঃ মনজুর শোয়েব খান",
  title: "Cancer Specialist / Clinical Oncologist",
  titleBn: "ক্যান্সার বিশেষজ্ঞ",
  specialtyBn: "কেমোথেরাপি, রেডিওথেরাপি ও ইমিউনোথেরাপি",
  hospital: "National Institute of Cancer Research and Hospital",
  hospitalBn: "জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট ও হাসপাতাল",
  city: "Mohakhali, Dhaka",
  bmdc: "A-71361",
  bcs: "35th BCS (Health)",
  years: "10+",
  mobile: "01723978142",
  mobileHref: "tel:+8801723978142",
  whatsapp: "https://wa.me/8801723978142",
  email: "monjurshoyeb.cmc51@gmail.com",
  emailHref: "mailto:monjurshoyeb.cmc51@gmail.com",
  address:
    "Building 18, Flat 11/D, Government Officers Quarters, Paikpara, Mirpur-1, Dhaka",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Care" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Experience" },
  { href: "#chambers", label: "Chambers" },
  { href: "#visit", label: "Visit" },
];

export const degrees = [
  { short: "MD", label: "Clinical Oncology, Bangladesh Medical University (January 2025)" },
  { short: "MBBS", label: "Chittagong Medical College (January 2014)" },
  { short: "FCPS", label: "Medicine, FP" },
  { short: "MACP", label: "American College of Physicians (USA)" },
];

export const degreeChips = [
  "MBBS",
  "BCS (Health)",
  "MD (Clinical Oncology)",
  "FCPS (Medicine, FP)",
  "MACP (USA)",
];

export const objective =
  "Dedicated clinical oncologist with a practice built around chemotherapy, radiotherapy, immunotherapy, targeted therapy, and multidisciplinary cancer care. He works toward evidence-based treatment plans, academic contribution, and better outcomes for people living with cancer.";

export const summary = [
  "Clinical oncologist with over 10 years of Bangladesh Civil Service (Health) experience.",
  "Experienced in diagnosis, staging and management of solid malignancies.",
  "Skilled in chemotherapy, radiotherapy, immunotherapy, targeted therapy and multidisciplinary tumor board participation.",
];

export const stats = [
  { value: "10+", label: "Years in BCS (Health)" },
  { value: "MD", label: "Clinical Oncology, 2025" },
  { value: "2", label: "Private chambers" },
  { value: doctor.bmdc, label: "BMDC registration" },
];

export const expertise = [
  {
    number: "01",
    title: "Cancer treatment",
    titleBn: "ক্যান্সার চিকিৎসা",
    text: "Systemic and locoregional care for cancer: chemotherapy, radiotherapy and immunotherapy, with follow-up through active treatment.",
    points: ["Chemotherapy", "Radiotherapy", "Immunotherapy"],
    tone: "teal",
  },
  {
    number: "02",
    title: "Targeted therapy",
    titleBn: "টার্গেটেড থেরাপি",
    text: "Treatment aimed at specific genes or proteins of the cancer, including HER2, EGFR, ALK and BRAF-directed options, tailored to the person.",
    points: ["HER2, EGFR, ALK, BRAF and related targets", "Care shaped to genetic features"],
    tone: "orchid",
  },
  {
    number: "03",
    title: "Diagnosis & consultation",
    titleBn: "ক্যান্সার রোগ নির্ণয় ও পরামর্শ",
    text: "Modern diagnostic support with blood tests, imaging and biopsy, then staging, a written treatment plan, and structured follow-up counselling.",
    points: ["Blood, imaging and biopsy", "Staging and treatment planning", "Follow-up review and counselling"],
    tone: "forest",
  },
  {
    number: "04",
    title: "Palliative care",
    titleBn: "প্যালিয়েটিভ কেয়ার সেবা",
    text: "Pain and symptom control, attention to quality of life, and psychological support for patients and families.",
    points: ["Pain and symptom control", "Quality of life", "Support for patients and families"],
    tone: "copper",
  },
];

export const experience = [
  {
    role: "Cancer Specialist / Clinical Oncologist",
    place: "National Institute of Cancer Research and Hospital, Mohakhali, Dhaka",
    when: "Present",
    detail:
      "Cancer diagnosis, staging, chemotherapy, radiotherapy, immunotherapy, targeted therapy, follow-up and supportive care.",
  },
  {
    role: "Bangladesh Medical University",
    place: "Shahbag, Dhaka",
    when: "2020–2025",
    detail:
      "MD (Clinical Oncology) at Bangladesh Medical University (Bangabandhu Sheikh Mujib Medical University), Shahbag, Dhaka, with a government posting during training.",
  },
  {
    role: "Dhaka Medical College Hospital",
    place: "Dhaka",
    when: "2015–2017",
    detail: "Earlier posting in the 35th BCS (Health) cadre, with about 10 years of government service overall.",
  },
];

export const chambers = [
  {
    id: "gazipur",
    name: "Popular Diagnostic Centre Ltd.",
    nameBn: "পপুলার ডায়াগনস্টিক সেন্টার লিঃ",
    area: "Gazipur branch",
    address: "Shibbari Mor, Joydebpur, Gazipur Sadar, Gazipur",
    addressBn: "শিববাড়ী মোড়, জয়দেবপুর, গাজীপুর সদর, গাজীপুর",
    hours: "Every Friday, 5:00 PM – 8:00 PM",
    hoursBn: "প্রতি শুক্রবার বিকাল ৫টা থেকে রাত ৮টা",
    phones: [{ label: "Serial hotline", value: "09666787816", href: "tel:09666787816" }],
    email: "info@populardiagnostic.com",
    web: "https://populardiagnostic.com",
    photo: "/images/card-popular.jpg",
    photoAlt:
      "Visiting card for the Gazipur chamber at Popular Diagnostic Centre Ltd.",
  },
  {
    id: "mirpur",
    name: "New Peacy Lab Ltd.",
    nameBn: "নিউ পিসি ল্যাব লিঃ",
    subtitle: "Diagnostic & Consultation Complex",
    subtitleBn: "ডায়াগনস্টিক এন্ড কনসালটেশন কমপ্লেক্স",
    area: "Mirpur-1, Dhaka",
    address:
      "Apex Bhaban (3rd floor / Lift 3), 2-A/1 Darkus Salam Road, Mirpur-1, Dhaka-1216",
    addressBn:
      "অফিসঃ অ্যাপেক্স ভবন (লিফটের তিন), ২-এ/১ দারুস সালাম রোড, মিরপুর-১, ঢাকা-১২১৬",
    landmark: "Beside Tanin Bhaban, Pubali Bank, Mirpur-1 (above the shops)",
    hours: "Evenings, 7:00 PM – 10:00 PM",
    hoursBn: "সন্ধ্যা ৭টা–১০টা",
    phones: [
      { label: "Chamber", value: "01887-020029", href: "tel:+8801887020029" },
      { label: "Chamber", value: "01929-349099", href: "tel:+8801929349099" },
      { label: "Landline", value: "02-5805453", href: "tel:+88025805453" },
    ],
    email: "peacylab@gmail.com",
    photo: "/images/award.jpg",
    photoAlt:
      "Dr. Monjur Shoyeb Khan with colleagues at a professional conference.",
  },
];

export const research = {
  title: "Thesis: Research on Gastric Cancer Chemotherapy Regimen",
  membership: "MACP — Membership of the American College of Physicians",
  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Professional" },
  ],
  computers: ["Microsoft Word", "Microsoft PowerPoint"],
};

export const photos = [
  {
    src: "/images/portrait.jpg",
    alt: "Dr. Monjur Shoyeb Khan standing beside a scientific poster at MOSB 2025.",
    title: "MOSB 2025",
    caption: "Paediatric oncology case poster — diagnostic and therapeutic considerations.",
    className: "md:col-span-2 md:row-span-2",
    object: "object-[72%_18%]",
  },
  {
    src: "/images/congress.jpg",
    alt: "Dr. Monjur Shoyeb Khan at Sylhet Cancer Congress 2023, Grand Sylhet Hotel and Resort.",
    title: "Sylhet Cancer Congress 2023",
    caption: "SCSG — Grand Sylhet Hotel and Resort.",
    object: "object-[center_62%]",
  },
  {
    src: "/images/awareness.jpg",
    alt: "Dr. Monjur Shoyeb Khan speaking at a cancer awareness program on an outdoor stage.",
    title: "Cancer awareness program",
    caption: "Early detection, better tomorrow — prevent, detect, treat.",
    object: "object-center",
  },
  {
    src: "/images/seminar.jpg",
    alt: "Dr. Monjur Shoyeb Khan receiving a crest at a scientific seminar at Forest Lounge.",
    title: "Scientific seminar",
    caption: "Crest presented at Forest Lounge.",
    className: "md:col-span-2",
    object: "object-[center_30%]",
  },
  {
    src: "/images/award.jpg",
    alt: "Dr. Monjur Shoyeb Khan with colleagues holding a framed certificate at a professional event.",
    title: "Professional recognition",
    caption: "With colleagues at a conference award moment.",
    object: "object-[center_20%]",
  },
  {
    src: "/images/iftar.jpg",
    alt: "Dr. Monjur Shoyeb Khan receiving a gift at Iftar Mahfil, Forest Lounge, Dhanmondi, 18 March 2025.",
    title: "Iftar Mahfil, 2025",
    caption: "18 March 2025 · The Forest Lounge, Dhanmondi.",
    object: "object-[center_35%]",
  },
];

export const concerns = [
  "Chemotherapy",
  "Radiotherapy",
  "Immunotherapy",
  "Targeted therapy",
  "Diagnosis, staging and a treatment plan",
  "Palliative and supportive care",
  "A general oncology consultation",
];
