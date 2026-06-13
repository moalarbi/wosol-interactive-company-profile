const categories = {
  lifestyle: { en: "Lifestyle Management", ar: "إدارة نمط الحياة" },
  travel: { en: "Travel & Mobility", ar: "السفر والتنقل" },
  access: { en: "Luxury Access", ar: "الوصول الخاص" },
  events: { en: "Corporate & Private Events", ar: "المناسبات والضيافة" },
  assets: { en: "Assets, Spaces & Culture", ar: "العقارات والفن والتصميم" }
};

const serviceBlueprints = [
  {
    id: "lifestyle-concierge",
    categoryKey: "lifestyle",
    en: {
      title: "Lifestyle Concierge",
      tagline: "Daily life handled with privacy, taste, and operational calm.",
      description: "Personalized services that simplify everyday complexity while curating refined experiences around your lifestyle.",
      outcome: "Your time returns to what matters while the details move quietly in the background.",
      forWhom: ["Private individuals", "HNW families", "Frequent travelers", "Households needing trusted coordination"],
      whenItMatters: ["Busy personal calendars", "High-touch home and lifestyle requests", "Private occasions", "Recurring errands and arrangements"],
      wosolHandles: ["Lifestyle request intake", "Vendor coordination", "Calendar-sensitive planning", "Experience curation", "Follow-through and confirmation"],
      experienceStandard: "Responsive, discreet, and aligned with the client's preferences rather than a generic service menu.",
      difference: "WOSOL builds familiarity over time, so requests become faster, more precise, and less repetitive.",
      sampleRequests: ["Curated dining plan", "Home service coordination", "Private celebration preparation", "Personal shopping appointment", "Weekend experience itinerary"],
      audienceRelevance: "For clients who value continuity, privacy, and fewer operational interruptions.",
      cta: "Request Lifestyle Support",
      imageLabel: "Private lifestyle management"
    },
    ar: {
      title: "كونسيرج نمط الحياة",
      tagline: "تفاصيل الحياة اليومية بإدارة هادئة وخصوصية عالية وذوق رفيع.",
      description: "خدمات شخصية مصممة لتبسيط التعقيد اليومي وصناعة تجارب منتقاة حول أسلوب حياة العميل.",
      outcome: "يعود وقتك لما يستحق الانتباه، بينما تتحرك التفاصيل بهدوء خلف المشهد.",
      forWhom: ["الأفراد من أصحاب نمط الحياة عالي القيمة", "العائلات الخاصة", "كثيرو السفر", "المنازل التي تحتاج تنسيقاً موثوقاً"],
      whenItMatters: ["الجداول الشخصية المزدحمة", "طلبات المنزل ونمط الحياة", "المناسبات الخاصة", "المهام المتكررة والترتيبات الدقيقة"],
      wosolHandles: ["استقبال الطلب وتحليله", "تنسيق المورّدين", "التخطيط وفق الوقت والحساسية", "ترشيح التجارب", "المتابعة والتأكيد"],
      experienceStandard: "استجابة دقيقة وسرية ومصممة حول تفضيلات العميل، لا حول قائمة خدمات عامة.",
      difference: "تبني وصول معرفة تراكمية بالعميل، فتتحول الطلبات مع الوقت إلى تنفيذ أسرع وأكثر دقة.",
      sampleRequests: ["خطة عشاء منتقاة", "تنسيق خدمات منزلية", "تحضير مناسبة خاصة", "موعد تسوق شخصي", "برنامج نهاية أسبوع خاص"],
      audienceRelevance: "لمن يقدّر الاستمرارية والخصوصية وتقليل الانشغال بالتفاصيل التشغيلية.",
      cta: "اطلب دعماً خاصاً لنمط الحياة",
      imageLabel: "إدارة نمط حياة خاصة"
    }
  },
  {
    id: "travel-management",
    categoryKey: "travel",
    en: {
      title: "Travel Management",
      tagline: "Journeys coordinated from first intention to final arrival.",
      description: "End-to-end travel planning across flights, accommodation, transfers, and logistics for journeys that feel seamless and considered.",
      outcome: "Every movement feels connected, prepared, and free from unnecessary friction.",
      forWhom: ["Private travelers", "Families", "Couples", "Guests requiring premium journey coordination"],
      whenItMatters: ["Multi-city itineraries", "Family holidays", "Luxury leisure travel", "Last-minute route changes"],
      wosolHandles: ["Flight coordination", "Accommodation matching", "Transfers", "Arrival handling", "Itinerary monitoring"],
      experienceStandard: "Clear, flexible, and designed around comfort, timing, privacy, and personal preferences.",
      difference: "Travel is managed as a complete experience rather than isolated bookings.",
      sampleRequests: ["Full leisure itinerary", "Airport to villa transfer", "Hotel and dining coordination", "Family travel plan", "Route adjustment while traveling"],
      audienceRelevance: "For clients who want the journey to feel as refined as the destination.",
      cta: "Plan a Private Journey",
      imageLabel: "Seamless luxury travel"
    },
    ar: {
      title: "إدارة السفر",
      tagline: "رحلات منسقة من النية الأولى حتى الوصول الأخير.",
      description: "تخطيط شامل للسفر يشمل الرحلات والإقامة والتنقلات واللوجستيات لصناعة رحلة سلسة ومدروسة.",
      outcome: "كل حركة في الرحلة تبدو مترابطة ومهيأة وخالية من التعقيد غير الضروري.",
      forWhom: ["المسافرون الخاصون", "العائلات", "الأزواج", "الضيوف الذين يحتاجون تنسيقاً راقياً للرحلة"],
      whenItMatters: ["برامج متعددة المدن", "العطلات العائلية", "السفر الترفيهي الفاخر", "تغييرات المسار المفاجئة"],
      wosolHandles: ["تنسيق الرحلات", "ترشيح الإقامة", "ترتيب التنقلات", "خدمة الوصول", "متابعة البرنامج أثناء السفر"],
      experienceStandard: "وضوح ومرونة وتجربة مبنية حول الراحة والوقت والخصوصية وتفضيلات العميل.",
      difference: "تتعامل وصول مع السفر كتجربة متكاملة، لا كسلسلة حجوزات منفصلة.",
      sampleRequests: ["برنامج رحلة ترفيهية كامل", "تنقل من المطار إلى الفيلا", "تنسيق الفندق والمطاعم", "خطة سفر عائلية", "تعديل المسار أثناء الرحلة"],
      audienceRelevance: "لمن يريد أن تكون الرحلة بذات رقي الوجهة.",
      cta: "خطط رحلة خاصة",
      imageLabel: "سفر فاخر وسلس"
    }
  },
  {
    id: "private-aviation",
    categoryKey: "travel",
    en: {
      title: "Private Aviation",
      tagline: "Air travel arranged with discretion, precision, and time certainty.",
      description: "Customized private aviation coordination, from aircraft options and routing to in-flight preferences and arrival logistics.",
      outcome: "Time-sensitive movement becomes private, punctual, and aligned with the client's schedule.",
      forWhom: ["Business leaders", "UHNW individuals", "Families", "Executives requiring flexible movement"],
      whenItMatters: ["Urgent meetings", "Multi-city travel", "Confidential movement", "VIP arrivals", "Family trips with privacy requirements"],
      wosolHandles: ["Aircraft coordination", "Preferred routes", "Ground transfers", "In-flight preferences", "Documentation and arrival support"],
      experienceStandard: "Private, punctual, discreet, and tailored around the client rather than a commercial flight schedule.",
      difference: "The flight is only one layer; WOSOL coordinates the full movement before and after the aircraft.",
      sampleRequests: ["Private jet charter coordination", "Multi-city executive itinerary", "Airport to residence transfer", "In-flight preference arrangement", "VIP arrival handling"],
      audienceRelevance: "For clients whose time, privacy, and route control are critical.",
      cta: "Coordinate Private Aviation",
      imageLabel: "Private jet cabin and arrival"
    },
    ar: {
      title: "الطيران الخاص",
      tagline: "سفر جوي منسق بسرية ودقة ويقين في الوقت.",
      description: "تنسيق حلول الطيران الخاص من خيارات الطائرات والمسارات إلى تفضيلات الرحلة وخدمات الوصول.",
      outcome: "تتحول الحركة الحساسة للوقت إلى تجربة خاصة ومنضبطة ومتوافقة مع جدول العميل.",
      forWhom: ["قادة الأعمال", "الأفراد ذوو الملاءة العالية جداً", "العائلات", "المديرون التنفيذيون ذوو الجداول المرنة"],
      whenItMatters: ["اجتماعات عاجلة", "رحلات متعددة المدن", "تنقلات سرية", "وصول ضيوف رفيعي المستوى", "رحلات عائلية تتطلب خصوصية"],
      wosolHandles: ["تنسيق الطائرة", "المسارات المفضلة", "النقل الأرضي", "تفضيلات الرحلة", "الدعم في الوثائق والوصول"],
      experienceStandard: "خصوصية وانضباط وسرية وتجربة تدور حول العميل لا حول جدول رحلة تجارية.",
      difference: "الطائرة جزء واحد فقط؛ وصول تنسق الحركة الكاملة قبل الرحلة وبعدها.",
      sampleRequests: ["تنسيق استئجار طائرة خاصة", "برنامج تنفيذي متعدد المدن", "نقل من المطار إلى المقر", "ترتيب تفضيلات الرحلة", "خدمة وصول خاصة"],
      audienceRelevance: "لمن تمثل له الخصوصية والوقت والتحكم بالمسار عناصر حاسمة.",
      cta: "نسّق الطيران الخاص",
      imageLabel: "مقصورة طائرة خاصة ووصول هادئ"
    }
  },
  {
    id: "luxury-accommodation",
    categoryKey: "access",
    en: {
      title: "Luxury Accommodation",
      tagline: "Residences selected for privacy, comfort, and lifestyle fit.",
      description: "Curated villas, chalets, penthouses, and premium stays worldwide, paired with services such as private chefs, security, and household support.",
      outcome: "A stay feels like a private residence prepared around the way you live.",
      forWhom: ["Families", "Long-stay travelers", "Private guests", "Clients seeking secure residences"],
      whenItMatters: ["Seasonal stays", "Family holidays", "High-security travel", "Celebrations", "Remote work retreats"],
      wosolHandles: ["Property matching", "Service layering", "Private chef coordination", "Security and driver planning", "Check-in and stay support"],
      experienceStandard: "Selected, prepared, and serviced to match the client's privacy, comfort, and guest profile.",
      difference: "WOSOL evaluates the residence as an operating environment, not only as a beautiful property.",
      sampleRequests: ["Private villa with chef", "Mountain chalet for family stay", "Penthouses near business districts", "Security-supported residence", "Arrival grocery and household setup"],
      audienceRelevance: "For clients who need the privacy of a residence with the reliability of premium hospitality.",
      cta: "Curate a Private Stay",
      imageLabel: "Private villa and residence"
    },
    ar: {
      title: "الإقامة الفاخرة",
      tagline: "مساكن مختارة للخصوصية والراحة وملاءمة نمط الحياة.",
      description: "فلل وشاليهات وبنتهاوس وإقامات عالمية مختارة، مع خدمات مثل الطهاة الخاصين والأمن والدعم المنزلي.",
      outcome: "تبدو الإقامة كمنزل خاص مجهز حول طريقة حياة العميل.",
      forWhom: ["العائلات", "المسافرون للإقامات الطويلة", "الضيوف الخاصون", "العملاء الباحثون عن مساكن آمنة"],
      whenItMatters: ["الإقامات الموسمية", "العطلات العائلية", "السفر عالي الخصوصية", "الاحتفالات", "إقامات العمل عن بعد"],
      wosolHandles: ["ترشيح العقار", "إضافة طبقات الخدمة", "تنسيق الطاهي الخاص", "ترتيب الأمن والسائقين", "دعم الوصول والإقامة"],
      experienceStandard: "اختيار وتجهيز وخدمة تناسب خصوصية العميل وراحته وطبيعة ضيوفه.",
      difference: "تقيّم وصول المسكن كبيئة تشغيل كاملة، لا كعقار جميل فقط.",
      sampleRequests: ["فيلا خاصة مع طاهٍ", "شاليه جبلي للعائلة", "بنتهاوس قرب منطقة أعمال", "سكن مدعوم بخدمة أمنية", "تجهيز المنزل قبل الوصول"],
      audienceRelevance: "لمن يحتاج خصوصية السكن مع موثوقية الضيافة الفاخرة.",
      cta: "رشّح إقامة خاصة",
      imageLabel: "فيلا ومسكن خاص"
    }
  },
  {
    id: "yacht-charters",
    categoryKey: "access",
    en: {
      title: "Yacht Charters",
      tagline: "Bespoke yacht days and voyages shaped around the guest profile.",
      description: "Tailored yacht experiences, from quiet coastal movement to private harbor events and multi-day sea itineraries.",
      outcome: "Time on water becomes private, hosted, and precise without visible effort.",
      forWhom: ["Families", "Private groups", "Corporate hosts", "Travelers seeking sea-based experiences"],
      whenItMatters: ["Coastal escapes", "Harbor events", "Celebrations", "Client hosting", "Multi-day charters"],
      wosolHandles: ["Yacht selection", "Route coordination", "Crew and catering preferences", "Transfer planning", "Guest experience details"],
      experienceStandard: "Elegant, discreet, safety-conscious, and tuned to the tone of the occasion.",
      difference: "The charter is curated around mood, guests, privacy, and operational timing.",
      sampleRequests: ["Sunset yacht charter", "Private family voyage", "Harbor event hosting", "Chef-led onboard dinner", "Multi-day coastal itinerary"],
      audienceRelevance: "For clients who want a private marine setting without coordinating the many hidden details.",
      cta: "Arrange a Yacht Experience",
      imageLabel: "Yacht deck at sunset"
    },
    ar: {
      title: "تأجير اليخوت",
      tagline: "تجارب بحرية خاصة مصممة حول طبيعة الضيوف والمناسبة.",
      description: "تنظيم تجارب يخوت مصممة حسب التفضيلات، من رحلات ساحلية هادئة إلى مناسبات خاصة في المرافئ وبرامج بحرية متعددة الأيام.",
      outcome: "يتحول الوقت في البحر إلى تجربة خاصة ومضيفة ودقيقة بلا جهد ظاهر.",
      forWhom: ["العائلات", "المجموعات الخاصة", "المضيفون من الشركات", "المسافرون الباحثون عن تجارب بحرية"],
      whenItMatters: ["الهروب الساحلي", "مناسبات المرفأ", "الاحتفالات", "استضافة العملاء", "الرحلات البحرية متعددة الأيام"],
      wosolHandles: ["اختيار اليخت", "تنسيق المسار", "تفضيلات الطاقم والضيافة", "تنظيم التنقلات", "تفاصيل تجربة الضيوف"],
      experienceStandard: "أناقة وسرية ووعي بالسلامة وتجربة مضبوطة على نبرة المناسبة.",
      difference: "تُصمم التجربة حول المزاج والضيوف والخصوصية والتوقيت التشغيلي.",
      sampleRequests: ["رحلة يخت وقت الغروب", "رحلة عائلية خاصة", "استضافة مناسبة بحرية", "عشاء بطاهٍ على اليخت", "برنامج ساحلي لعدة أيام"],
      audienceRelevance: "لمن يريد بيئة بحرية خاصة دون الانشغال بتفاصيلها الخفية.",
      cta: "رتّب تجربة يخت",
      imageLabel: "سطح يخت عند الغروب"
    }
  },
  {
    id: "health-wellness-resorts",
    categoryKey: "access",
    en: {
      title: "Health & Wellness Resorts",
      tagline: "Restorative retreats curated with privacy and measured comfort.",
      description: "Premium wellness programs and holistic retreats selected to renew mind, body, and rhythm in luxurious settings.",
      outcome: "Wellness becomes a considered reset rather than an improvised escape.",
      forWhom: ["Executives", "Couples", "Families", "Clients seeking recovery, balance, or preventive wellness"],
      whenItMatters: ["Burnout recovery", "Seasonal resets", "Post-travel renewal", "Family wellness escapes", "Discreet health retreats"],
      wosolHandles: ["Retreat matching", "Program coordination", "Accommodation", "Wellness preferences", "Travel and privacy logistics"],
      experienceStandard: "Calm, respectful, confidential, and tailored to the client's pace and health boundaries.",
      difference: "WOSOL prioritizes suitability, privacy, and continuity over trend-led wellness packages.",
      sampleRequests: ["Luxury detox retreat", "Executive recovery weekend", "Holistic resort stay", "Private trainer and chef coordination", "Family wellness program"],
      audienceRelevance: "For clients who need renewal without exposure, inconvenience, or generic programming.",
      cta: "Curate a Wellness Retreat",
      imageLabel: "Private wellness resort"
    },
    ar: {
      title: "منتجعات الصحة والاستشفاء",
      tagline: "تجارب استشفاء مختارة بخصوصية وراحة محسوبة.",
      description: "برامج عافية وتجارب استشفاء شاملة تُرشح لتجديد الذهن والجسد والإيقاع في بيئات فاخرة.",
      outcome: "تصبح العافية إعادة توازن مدروسة، لا هروباً عابراً.",
      forWhom: ["المديرون التنفيذيون", "الأزواج", "العائلات", "العملاء الباحثون عن التعافي أو التوازن أو الوقاية"],
      whenItMatters: ["التعافي من الإرهاق", "إعادة ضبط موسمية", "تجديد ما بعد السفر", "رحلات عافية عائلية", "برامج صحية بسرية عالية"],
      wosolHandles: ["ترشيح المنتجع", "تنسيق البرنامج", "الإقامة", "تفضيلات العافية", "لوجستيات السفر والخصوصية"],
      experienceStandard: "هدوء واحترام وسرية وتجربة تناسب وتيرة العميل وحدوده الصحية.",
      difference: "تركز وصول على الملاءمة والخصوصية والاستمرارية بدلاً من باقات عافية رائجة.",
      sampleRequests: ["برنامج استشفاء فاخر", "نهاية أسبوع للتعافي التنفيذي", "إقامة في منتجع شمولي", "تنسيق مدرب وطاهٍ خاص", "برنامج عافية عائلي"],
      audienceRelevance: "لمن يحتاج التجدد دون انكشاف أو إزعاج أو برامج عامة.",
      cta: "صمّم تجربة استشفاء",
      imageLabel: "منتجع عافية خاص"
    }
  },
  {
    id: "shopping-gifting",
    categoryKey: "lifestyle",
    en: {
      title: "Shopping & Gifting",
      tagline: "Taste-led sourcing for personal style, rare gifts, and meaningful gestures.",
      description: "Exclusive fashion, gifting, and rare collectible sourcing aligned with the client's style, occasion, and relationship context.",
      outcome: "Every selection feels personal, considered, and appropriate to the moment.",
      forWhom: ["Private clients", "Executives", "Families", "Hosts seeking exceptional gifts"],
      whenItMatters: ["Milestone gifts", "Wardrobe refreshes", "Last-minute occasions", "Rare item sourcing", "Corporate gifting with discretion"],
      wosolHandles: ["Preference profiling", "Sourcing", "Presentation and wrapping", "Delivery coordination", "Occasion-sensitive recommendations"],
      experienceStandard: "Curated, tasteful, discreet, and never generic.",
      difference: "WOSOL balances access with meaning, ensuring the item fits the person and the relationship.",
      sampleRequests: ["Rare collectible sourcing", "Luxury gift curation", "Personal shopping appointment", "Private fashion edit", "Occasion gift delivery"],
      audienceRelevance: "For clients who want refined choices without time-consuming search or visible effort.",
      cta: "Curate a Gift or Edit",
      imageLabel: "Luxury gifting still life"
    },
    ar: {
      title: "التسوق والإهداء",
      tagline: "اختيارات تقودها الذائقة للأناقة الشخصية والهدايا النادرة واللفتات ذات المعنى.",
      description: "خدمات أزياء وإهداء واقتناء قطع نادرة مصممة حول أسلوب العميل والمناسبة وطبيعة العلاقة.",
      outcome: "كل اختيار يبدو شخصياً ومدروساً وملائماً للحظة.",
      forWhom: ["العملاء الخاصون", "المديرون التنفيذيون", "العائلات", "المضيفون الباحثون عن هدايا استثنائية"],
      whenItMatters: ["هدايا المناسبات المهمة", "تجديد الخزانة", "المناسبات المفاجئة", "البحث عن قطع نادرة", "الإهداء المؤسسي بسرية"],
      wosolHandles: ["فهم التفضيلات", "البحث والاقتناء", "التغليف والتقديم", "تنسيق التسليم", "ترشيحات حساسة لطبيعة المناسبة"],
      experienceStandard: "اختيار منتقى وذوق رفيع وسرية وابتعاد عن الخيارات العامة.",
      difference: "توازن وصول بين الوصول والمعنى، لتناسب القطعة الشخص والعلاقة.",
      sampleRequests: ["البحث عن قطعة نادرة", "تنسيق هدية فاخرة", "موعد تسوق شخصي", "تحرير اختيارات أزياء خاصة", "توصيل هدية مناسبة"],
      audienceRelevance: "لمن يريد اختيارات راقية دون بحث طويل أو جهد ظاهر.",
      cta: "نسّق هدية أو اختياراً خاصاً",
      imageLabel: "تفاصيل هدية فاخرة"
    }
  },
  {
    id: "business-travel-management",
    categoryKey: "travel",
    en: {
      title: "Business Travel Management",
      tagline: "Executive movement coordinated around meetings, privacy, and productivity.",
      description: "Business-oriented travel planning across flights, accommodation, transfers, meeting logistics, and contingency support.",
      outcome: "The executive arrives prepared, on time, and free to focus on the purpose of the trip.",
      forWhom: ["Executives", "Founders", "Board members", "Corporate teams", "Visiting delegations"],
      whenItMatters: ["Board meetings", "Roadshows", "Investor visits", "Multi-city agendas", "High-stakes corporate hosting"],
      wosolHandles: ["Executive itinerary design", "Flight and hotel coordination", "Ground movement", "Meeting logistics", "Real-time adjustments"],
      experienceStandard: "Precise, confidential, punctual, and compatible with business pressure.",
      difference: "WOSOL treats business travel as a productivity environment, not only an itinerary.",
      sampleRequests: ["C-suite travel week", "Delegation arrival plan", "Airport-boardroom-residence route", "Hotel near meeting venue", "Last-minute schedule recovery"],
      audienceRelevance: "For leaders and teams whose travel must protect time, privacy, and decision quality.",
      cta: "Plan Executive Travel",
      imageLabel: "Executive travel planning"
    },
    ar: {
      title: "إدارة سفر الأعمال",
      tagline: "تنقل تنفيذي منسق حول الاجتماعات والخصوصية والإنتاجية.",
      description: "تخطيط سفر موجه للأعمال يشمل الرحلات والإقامة والتنقلات ولوجستيات الاجتماعات والدعم عند التغيير.",
      outcome: "يصل التنفيذي جاهزاً وفي الوقت المناسب ومتحرراً للتركيز على هدف الرحلة.",
      forWhom: ["المديرون التنفيذيون", "المؤسسون", "أعضاء المجالس", "فرق الشركات", "الوفود الزائرة"],
      whenItMatters: ["اجتماعات المجلس", "الجولات الاستثمارية", "زيارات المستثمرين", "الجداول متعددة المدن", "استضافة الشركات عالية الأهمية"],
      wosolHandles: ["تصميم برنامج السفر التنفيذي", "تنسيق الرحلات والفنادق", "الحركة الأرضية", "لوجستيات الاجتماعات", "تعديلات فورية عند الحاجة"],
      experienceStandard: "دقة وسرية وانضباط زمني وملاءمة لضغط الأعمال.",
      difference: "تتعامل وصول مع سفر الأعمال كبيئة إنتاجية، لا كبرنامج تنقل فقط.",
      sampleRequests: ["أسبوع سفر للقيادة التنفيذية", "خطة وصول وفد", "مسار من المطار إلى الاجتماع ثم المقر", "فندق قريب من موقع الاجتماع", "معالجة جدول مفاجئ"],
      audienceRelevance: "للقادة والفرق التي يجب أن يحمي سفرها الوقت والخصوصية وجودة القرار.",
      cta: "خطط سفر الأعمال",
      imageLabel: "تخطيط سفر تنفيذي"
    }
  },
  {
    id: "personal-assistant",
    categoryKey: "lifestyle",
    en: {
      title: "Personal Assistant",
      tagline: "Specialized requests managed with judgment, discretion, and follow-through.",
      description: "Personal assistance for complex, sensitive, or highly specific requests, from elusive access to carefully orchestrated personal moments.",
      outcome: "The request is understood, prioritized, and executed without burdening the client.",
      forWhom: ["Private individuals", "Executives", "Families", "Clients with limited time"],
      whenItMatters: ["Time-sensitive personal needs", "Complex coordination", "Private celebrations", "Guest care", "Unusual sourcing"],
      wosolHandles: ["Request scoping", "Feasibility review", "Provider coordination", "Confidential communication", "Completion tracking"],
      experienceStandard: "Measured, respectful, and realistic while still pursuing the highest possible outcome.",
      difference: "WOSOL protects the client's time by translating unclear requests into executable steps.",
      sampleRequests: ["Securing hard-to-find tickets", "Coordinating a private celebration", "Managing guest arrivals", "Sourcing a specific item", "Handling a sensitive errand"],
      audienceRelevance: "For clients who need dependable personal execution without explaining everything repeatedly.",
      cta: "Assign a Private Request",
      imageLabel: "Discreet personal assistance"
    },
    ar: {
      title: "المساعد الشخصي",
      tagline: "طلبات متخصصة تُدار بحكمة وسرية ومتابعة دقيقة.",
      description: "مساعدة شخصية للطلبات المعقدة أو الحساسة أو شديدة الخصوصية، من الوصول النادر إلى تنظيم اللحظات الشخصية بعناية.",
      outcome: "يُفهم الطلب ويُرتب حسب الأولوية ويُنفذ دون تحميل العميل تفاصيله.",
      forWhom: ["الأفراد الخاصون", "المديرون التنفيذيون", "العائلات", "العملاء محدودو الوقت"],
      whenItMatters: ["احتياجات شخصية عاجلة", "تنسيق معقد", "احتفالات خاصة", "رعاية الضيوف", "البحث عن طلب غير معتاد"],
      wosolHandles: ["تحديد نطاق الطلب", "مراجعة القابلية للتنفيذ", "تنسيق المورّدين", "تواصل سري", "متابعة الإنجاز"],
      experienceStandard: "هدوء واحترام وواقعية مع السعي لأفضل نتيجة ممكنة.",
      difference: "تحمي وصول وقت العميل بتحويل الطلبات غير الواضحة إلى خطوات قابلة للتنفيذ.",
      sampleRequests: ["تأمين تذاكر صعبة", "تنسيق احتفال خاص", "إدارة وصول الضيوف", "البحث عن قطعة محددة", "إنجاز مهمة حساسة"],
      audienceRelevance: "لمن يحتاج تنفيذاً شخصياً يعتمد عليه دون تكرار الشرح.",
      cta: "كلّفنا بطلب خاص",
      imageLabel: "مساعدة شخصية بسرية"
    }
  },
  {
    id: "special-request",
    categoryKey: "lifestyle",
    en: {
      title: "Special Request",
      tagline: "Unusual needs turned into structured, discreet execution.",
      description: "Personalized handling for unique or exclusive needs, making complex requests possible through trusted partners and careful coordination.",
      outcome: "A difficult request becomes a managed project with clear next steps.",
      forWhom: ["Private clients", "Family offices", "Executives", "Hosts with unusual requirements"],
      whenItMatters: ["Rare access needs", "Complex gifting", "Cross-border coordination", "Confidential arrangements", "High-pressure deadlines"],
      wosolHandles: ["Request clarification", "Partner identification", "Risk and privacy review", "Execution plan", "Status updates"],
      experienceStandard: "Discreet, realistic, and transparent about what can be done well.",
      difference: "WOSOL brings structure to requests that do not fit standard service categories.",
      sampleRequests: ["A rare destination experience", "A private cultural visit", "Confidential guest handling", "Sourcing a difficult item", "Coordinating a surprise itinerary"],
      audienceRelevance: "For clients who need a trusted point of contact when the request is not ordinary.",
      cta: "Submit a Special Request",
      imageLabel: "Bespoke access and execution"
    },
    ar: {
      title: "الطلبات الخاصة",
      tagline: "احتياجات غير معتادة تتحول إلى تنفيذ منظم وسري.",
      description: "إدارة شخصية للاحتياجات الفريدة أو الحصرية، لجعل الطلبات المعقدة قابلة للتحقق عبر شركاء موثوقين وتنسيق دقيق.",
      outcome: "يتحول الطلب الصعب إلى مشروع مدار بخطوات واضحة.",
      forWhom: ["العملاء الخاصون", "المكاتب العائلية", "المديرون التنفيذيون", "المضيفون ذوو المتطلبات غير التقليدية"],
      whenItMatters: ["احتياجات وصول نادرة", "إهداء معقد", "تنسيق عابر للحدود", "ترتيبات سرية", "مواعيد ضغط عالية"],
      wosolHandles: ["توضيح الطلب", "تحديد الشركاء", "مراجعة المخاطر والخصوصية", "خطة التنفيذ", "تحديثات الحالة"],
      experienceStandard: "سرية وواقعية ووضوح حول ما يمكن تنفيذه بجودة.",
      difference: "تمنح وصول هيكلاً للطلبات التي لا تنتمي إلى فئة خدمات تقليدية.",
      sampleRequests: ["تجربة وجهة نادرة", "زيارة ثقافية خاصة", "رعاية ضيوف بسرية", "البحث عن قطعة صعبة", "تنسيق برنامج مفاجئ"],
      audienceRelevance: "لمن يحتاج نقطة اتصال موثوقة عندما يكون الطلب غير عادي.",
      cta: "أرسل طلباً خاصاً",
      imageLabel: "وصول خاص وتنفيذ حسب الطلب"
    }
  },
  {
    id: "transportation-services",
    categoryKey: "travel",
    en: {
      title: "Transportation Services",
      tagline: "Ground movement with comfort, discretion, and route confidence.",
      description: "Comprehensive transportation solutions, from self-drive options to chauffeured services with premium vehicles and experienced drivers.",
      outcome: "Arrivals, departures, and daily movement feel punctual, private, and composed.",
      forWhom: ["Executives", "Families", "VIP guests", "Event hosts", "Travelers requiring secure movement"],
      whenItMatters: ["Airport transfers", "Daily driver needs", "Event arrivals", "Multi-car coordination", "City-to-city movement"],
      wosolHandles: ["Vehicle matching", "Chauffeur coordination", "Route planning", "Guest manifests", "Timing and contingency management"],
      experienceStandard: "Clean, punctual, discreet, and aligned with the client's comfort and security expectations.",
      difference: "WOSOL manages the movement logic behind the vehicle, not just the car itself.",
      sampleRequests: ["Chauffeured luxury sedan", "Family van coordination", "Executive convoy", "Self-drive premium vehicle", "Event guest transfer plan"],
      audienceRelevance: "For clients who need ground travel to remain calm, private, and reliable.",
      cta: "Arrange Transportation",
      imageLabel: "Executive car arrival"
    },
    ar: {
      title: "خدمات التنقل",
      tagline: "حركة أرضية براحة وسرية وثقة في المسار.",
      description: "حلول تنقل شاملة من خيارات القيادة الذاتية إلى خدمات السائقين بمركبات فاخرة وسائقين ذوي خبرة.",
      outcome: "تبدو الوصولات والمغادرات والحركة اليومية منضبطة وخاصة وهادئة.",
      forWhom: ["المديرون التنفيذيون", "العائلات", "الضيوف الخاصون", "مضيفو المناسبات", "المسافرون الذين يحتاجون حركة آمنة"],
      whenItMatters: ["نقل المطار", "احتياج سائق يومي", "وصول المناسبات", "تنسيق عدة مركبات", "تنقل بين المدن"],
      wosolHandles: ["مطابقة المركبة", "تنسيق السائق", "تخطيط المسار", "قوائم الضيوف", "إدارة الوقت والبدائل"],
      experienceStandard: "نظافة وانضباط وسرية وتوافق مع توقعات الراحة والأمان.",
      difference: "تدير وصول منطق الحركة خلف المركبة، لا السيارة وحدها.",
      sampleRequests: ["سيارة فاخرة بسائق", "تنسيق مركبة عائلية", "موكب تنفيذي", "سيارة فاخرة للقيادة الذاتية", "خطة نقل ضيوف مناسبة"],
      audienceRelevance: "لمن يحتاج تنقلاً أرضياً هادئاً وخاصاً وموثوقاً.",
      cta: "رتّب التنقل",
      imageLabel: "وصول سيارة تنفيذية"
    }
  },
  {
    id: "corporate-concierge-services",
    categoryKey: "events",
    en: {
      title: "Corporate Concierge Services",
      tagline: "Executive and company needs handled through one discreet coordination layer.",
      description: "Tailored concierge services for executives and companies, managing meetings, logistics, guest care, and luxury access requirements.",
      outcome: "Corporate hospitality becomes precise, private, and aligned with the brand's level of expectation.",
      forWhom: ["Executives", "Corporate offices", "Board teams", "Investor relations", "Guest relations teams"],
      whenItMatters: ["Executive hosting", "Delegation visits", "Board meetings", "Client entertainment", "High-value employee or partner care"],
      wosolHandles: ["Meeting support", "Travel and transport", "Dining and venue access", "Guest itineraries", "On-ground coordination"],
      experienceStandard: "Professional, discreet, punctual, and tuned to corporate reputation.",
      difference: "WOSOL gives companies a private hospitality layer without building an internal concierge function.",
      sampleRequests: ["Executive guest itinerary", "Meeting logistics", "Board dinner coordination", "Partner arrival support", "Corporate lifestyle benefit handling"],
      audienceRelevance: "For organizations that host high-value people and cannot afford fragmented coordination.",
      cta: "Design Corporate Support",
      imageLabel: "Corporate private hospitality"
    },
    ar: {
      title: "خدمات الكونسيرج للشركات",
      tagline: "احتياجات التنفيذيين والشركات عبر طبقة تنسيق واحدة وسرية.",
      description: "خدمات كونسيرج مصممة للمديرين والشركات، تدير الاجتماعات واللوجستيات ورعاية الضيوف ومتطلبات الوصول الفاخر.",
      outcome: "تتحول ضيافة الشركات إلى تجربة دقيقة وخاصة ومتوافقة مع مستوى العلامة.",
      forWhom: ["المديرون التنفيذيون", "مكاتب الشركات", "فرق المجالس", "علاقات المستثمرين", "فرق رعاية الضيوف"],
      whenItMatters: ["استضافة التنفيذيين", "زيارات الوفود", "اجتماعات المجلس", "ترفيه العملاء", "رعاية شركاء أو موظفين عالي القيمة"],
      wosolHandles: ["دعم الاجتماعات", "السفر والتنقل", "الوصول للمطاعم والمواقع", "برامج الضيوف", "التنسيق الميداني"],
      experienceStandard: "احتراف وسرية وانضباط زمني ووعي بسمعة الشركة.",
      difference: "تمنح وصول الشركات طبقة ضيافة خاصة دون الحاجة لبناء وظيفة كونسيرج داخلية.",
      sampleRequests: ["برنامج ضيف تنفيذي", "لوجستيات اجتماع", "تنسيق عشاء مجلس", "دعم وصول شريك", "إدارة مزايا نمط الحياة للشركات"],
      audienceRelevance: "للمنظمات التي تستضيف أشخاصاً عالي القيمة ولا يناسبها التنسيق المجزأ.",
      cta: "صمّم دعماً للشركة",
      imageLabel: "ضيافة شركات خاصة"
    }
  },
  {
    id: "event-planning",
    categoryKey: "events",
    en: {
      title: "Event Planning",
      tagline: "Private gatherings and grand moments orchestrated with exacting care.",
      description: "Memorable event planning from intimate gatherings to larger celebrations, with attention to atmosphere, guest journey, and every operational detail.",
      outcome: "The host remains present while the event moves with elegance and control.",
      forWhom: ["Private hosts", "Families", "Executives", "Corporate clients", "Celebration committees"],
      whenItMatters: ["Milestone birthdays", "Private dinners", "Launch events", "Family celebrations", "Executive receptions"],
      wosolHandles: ["Concept direction", "Venue and supplier coordination", "Guest flow", "Catering and entertainment", "Event-day management"],
      experienceStandard: "Polished, emotionally aware, and quietly controlled from planning to close.",
      difference: "WOSOL aligns the event with the host's privacy, taste, and social context.",
      sampleRequests: ["Private dinner", "Milestone celebration", "Corporate reception", "Destination event support", "Surprise occasion planning"],
      audienceRelevance: "For hosts who need atmosphere and execution to meet the same standard.",
      cta: "Plan a Private Event",
      imageLabel: "Private event table detail"
    },
    ar: {
      title: "تخطيط المناسبات",
      tagline: "تجمعات خاصة ولحظات كبيرة تُنظم بعناية دقيقة.",
      description: "تخطيط مناسبات لا تُنسى من اللقاءات الحميمة إلى الاحتفالات الكبرى، مع عناية بالأجواء ورحلة الضيف وكل التفاصيل التشغيلية.",
      outcome: "يبقى المضيف حاضراً في لحظته بينما تتحرك المناسبة بأناقة وسيطرة.",
      forWhom: ["المضيفون الخاصون", "العائلات", "المديرون التنفيذيون", "عملاء الشركات", "لجان الاحتفال"],
      whenItMatters: ["أعياد ميلاد مهمة", "عشاءات خاصة", "فعاليات إطلاق", "احتفالات عائلية", "استقبالات تنفيذية"],
      wosolHandles: ["اتجاه الفكرة", "تنسيق الموقع والمورّدين", "حركة الضيوف", "الضيافة والترفيه", "إدارة يوم المناسبة"],
      experienceStandard: "صقل ووعي عاطفي وسيطرة هادئة من التخطيط حتى الختام.",
      difference: "تربط وصول المناسبة بخصوصية المضيف وذائقته وسياقه الاجتماعي.",
      sampleRequests: ["عشاء خاص", "احتفال بمناسبة مهمة", "استقبال مؤسسي", "دعم مناسبة في وجهة خارجية", "تخطيط مفاجأة خاصة"],
      audienceRelevance: "للمضيفين الذين يريدون أن يلتقي الجو والتنفيذ على مستوى واحد.",
      cta: "خطط مناسبة خاصة",
      imageLabel: "تفاصيل مائدة مناسبة خاصة"
    }
  },
  {
    id: "arts-design",
    categoryKey: "assets",
    en: {
      title: "Arts & Design",
      tagline: "Spaces, collections, and cultural access shaped with taste and expertise.",
      description: "Functional and beautiful design support for living and working spaces, alongside private gallery viewings, personalized acquisitions, and access to renowned designers.",
      outcome: "The client's environment and collection reflect personal identity with discretion and depth.",
      forWhom: ["Homeowners", "Collectors", "Executives", "Family offices", "Clients refining private spaces"],
      whenItMatters: ["New residence setup", "Office refinement", "Art acquisition", "Private gallery access", "Interior refresh"],
      wosolHandles: ["Designer introductions", "Art viewing coordination", "Acquisition support", "Space brief development", "Supplier alignment"],
      experienceStandard: "Cultured, understated, and aligned with the client's personal context.",
      difference: "WOSOL connects design, art, and lifestyle needs rather than treating them as separate tasks.",
      sampleRequests: ["Private gallery viewing", "Interior designer introduction", "Artwork acquisition coordination", "Home styling brief", "Cultural experience arrangement"],
      audienceRelevance: "For clients whose spaces and collections need privacy, taste, and trusted access.",
      cta: "Curate Art or Design Support",
      imageLabel: "Private gallery and interior detail"
    },
    ar: {
      title: "الفنون والتصميم",
      tagline: "مساحات ومجموعات ووصول ثقافي يتشكل بذائقة وخبرة.",
      description: "حلول تصميم عملية وجميلة لمساحات السكن والعمل، مع تنسيق زيارات معارض خاصة واقتناء أعمال فنية وتواصل مع مصممين معروفين.",
      outcome: "تعكس بيئة العميل ومجموعته هويته الشخصية بخصوصية وعمق.",
      forWhom: ["ملاك المنازل", "جامعو الأعمال", "المديرون التنفيذيون", "المكاتب العائلية", "العملاء الذين يطورون مساحاتهم الخاصة"],
      whenItMatters: ["تجهيز مسكن جديد", "تحسين مكتب", "اقتناء عمل فني", "زيارة معرض خاصة", "تجديد داخلي"],
      wosolHandles: ["التعريف بالمصممين", "تنسيق مشاهدة الأعمال الفنية", "دعم الاقتناء", "تطوير موجز المساحة", "مواءمة المورّدين"],
      experienceStandard: "ذائقة ثقافية وهدوء وملاءمة للسياق الشخصي للعميل.",
      difference: "تربط وصول بين التصميم والفن ونمط الحياة بدلاً من التعامل معها كمهام منفصلة.",
      sampleRequests: ["زيارة معرض خاصة", "ترشيح مصمم داخلي", "تنسيق اقتناء عمل فني", "موجز تنسيق منزل", "ترتيب تجربة ثقافية"],
      audienceRelevance: "لمن تحتاج مساحاته ومجموعاته إلى خصوصية وذائقة ووصول موثوق.",
      cta: "نسّق دعماً فنياً أو تصميمياً",
      imageLabel: "معرض خاص وتفاصيل داخلية"
    }
  },
  {
    id: "vip-access",
    categoryKey: "access",
    en: {
      title: "VIP Access",
      tagline: "Privileged access pursued through trusted channels and careful judgment.",
      description: "Exclusive access coordination for high-profile events, luxury venues, and restricted experiences where eligibility, timing, and discretion matter.",
      outcome: "Access feels considered and protected, never loud or transactional.",
      forWhom: ["Private clients", "Executives", "Traveling guests", "Corporate hosts", "Lifestyle clients"],
      whenItMatters: ["High-profile events", "Private venues", "Cultural occasions", "Premium dining", "Restricted experiences"],
      wosolHandles: ["Access request review", "Partner coordination", "Guest requirements", "Timing and arrival planning", "Confidential handling"],
      experienceStandard: "Respectful, discreet, and transparent about availability and conditions.",
      difference: "WOSOL avoids shallow promises and pursues access through suitable, trusted routes.",
      sampleRequests: ["Private dining access", "Event admission coordination", "Members-only venue inquiry", "Cultural event access", "Guest arrival handling"],
      audienceRelevance: "For clients who value meaningful access without public exposure or overstatement.",
      cta: "Explore Private Access",
      imageLabel: "Exclusive venue access"
    },
    ar: {
      title: "الوصول الخاص",
      tagline: "وصول مميز عبر قنوات موثوقة وحكم دقيق.",
      description: "تنسيق الوصول إلى فعاليات رفيعة ومواقع فاخرة وتجارب محدودة، حيث تهم الأهلية والتوقيت والسرية.",
      outcome: "يبدو الوصول مدروساً ومحميّاً، لا صاخباً ولا تجارياً.",
      forWhom: ["العملاء الخاصون", "المديرون التنفيذيون", "الضيوف المسافرون", "مضيفو الشركات", "عملاء نمط الحياة"],
      whenItMatters: ["فعاليات رفيعة", "مواقع خاصة", "مناسبات ثقافية", "مطاعم مميزة", "تجارب محدودة الوصول"],
      wosolHandles: ["مراجعة طلب الوصول", "تنسيق الشركاء", "متطلبات الضيوف", "تخطيط التوقيت والوصول", "التعامل السري"],
      experienceStandard: "احترام وسرية ووضوح حول التوفر والشروط.",
      difference: "تتجنب وصول الوعود السطحية وتسعى للوصول عبر مسارات مناسبة وموثوقة.",
      sampleRequests: ["وصول إلى عشاء خاص", "تنسيق حضور فعالية", "استفسار عن موقع خاص بالأعضاء", "وصول إلى مناسبة ثقافية", "رعاية وصول الضيوف"],
      audienceRelevance: "لمن يقدّر الوصول ذي المعنى دون انكشاف أو مبالغة.",
      cta: "استكشف الوصول الخاص",
      imageLabel: "وصول إلى موقع حصري"
    }
  },
  {
    id: "real-estate",
    categoryKey: "assets",
    en: {
      title: "Real Estate",
      tagline: "Premium property access informed by lifestyle fit and trusted partners.",
      description: "Support for premium real estate opportunities, luxury residences, investment properties, and lifestyle-led property experiences through trusted partners and private market intelligence.",
      outcome: "Property decisions are guided by lifestyle, privacy, and long-term suitability.",
      forWhom: ["Private buyers", "Investors", "Family offices", "Relocating executives", "Clients seeking second homes"],
      whenItMatters: ["Private residence search", "Second-home exploration", "Investment property review", "Relocation", "Lifestyle-led property visits"],
      wosolHandles: ["Requirement mapping", "Trusted partner introductions", "Private viewings", "Lifestyle fit review", "Stay and visit logistics"],
      experienceStandard: "Confidential, informed, and selective without public-market noise.",
      difference: "WOSOL frames property around how the client will live, host, travel, and protect privacy.",
      sampleRequests: ["Private villa search", "Luxury apartment viewing", "Second-home destination review", "Investment property introduction", "Relocation stay planning"],
      audienceRelevance: "For clients who need property access and evaluation to respect lifestyle and confidentiality.",
      cta: "Discuss Property Access",
      imageLabel: "Luxury residence access"
    },
    ar: {
      title: "العقارات",
      tagline: "وصول عقاري فاخر يستند إلى ملاءمة نمط الحياة وشركاء موثوقين.",
      description: "دعم العملاء في الوصول إلى فرص عقارية فاخرة ومساكن راقية وعقارات استثمارية وتجارب عقارية مرتبطة بنمط الحياة عبر شركاء موثوقين ومعرفة سوقية خاصة.",
      outcome: "تصبح قرارات العقار موجهة بنمط الحياة والخصوصية والملاءمة طويلة الأمد.",
      forWhom: ["المشترون الخاصون", "المستثمرون", "المكاتب العائلية", "المديرون المنتقلون", "الباحثون عن منزل ثانٍ"],
      whenItMatters: ["البحث عن مسكن خاص", "استكشاف منزل ثانٍ", "مراجعة عقار استثماري", "الانتقال", "زيارات عقارية مرتبطة بنمط الحياة"],
      wosolHandles: ["تحديد المتطلبات", "التعريف بشركاء موثوقين", "تنسيق زيارات خاصة", "مراجعة ملاءمة نمط الحياة", "لوجستيات الإقامة والزيارة"],
      experienceStandard: "سرية ومعرفة وانتقائية بعيداً عن ضجيج السوق العام.",
      difference: "تنظر وصول للعقار من زاوية كيف سيعيش العميل ويستضيف ويسافر ويحمي خصوصيته.",
      sampleRequests: ["بحث عن فيلا خاصة", "زيارة شقة فاخرة", "مراجعة وجهة منزل ثانٍ", "تعريف بفرصة استثمارية", "تخطيط إقامة انتقالية"],
      audienceRelevance: "لمن يحتاج وصولاً وتقييماً عقارياً يحترم نمط الحياة والسرية.",
      cta: "ناقش الوصول العقاري",
      imageLabel: "وصول إلى مسكن فاخر"
    }
  }
];

const arabicServiceCopy = {
  "lifestyle-concierge": {
    title: "إدارة نمط الحياة",
    tagline: "تحويل تفاصيلك اليومية وتطلعاتك إلى واقع ملموس بمسار هادئ.",
    description: "في وصول كونسيرج، نحن لا نحجز الخدمات، بل نُدير نمط حياتك عبر واجهة رقمية تمنحك ذكاء الوصول والتحكم الكامل في تفاصيل يومك.",
    outcome: "تفاصيل يومية مُدارة بسلاسة، ووقت محفوظ لما يستحق انتباهك فعلاً.",
    forWhom: ["الأعضاء", "الأسر", "كثيرو السفر", "أصحاب الجداول المزدحمة"],
    whenItMatters: ["جدول مزدحم", "طلبات منزلية", "مناسبة خاصة", "مهام متكررة"],
    wosolHandles: ["فهم الطلب", "تحديد الأولوية", "تنسيق الجهات", "متابعة التأكيد", "حفظ التفضيلات"],
    difference: "نعتمد على التخطيط المدروس الذي يسبق الفعل، لضمان أن كل ترتيب يأتي كامتداد طبيعي لأسلوب حياتك الخاص.",
    sampleRequests: ["ترتيب عشاء", "تنسيق خدمة منزلية", "برنامج نهاية أسبوع", "موعد تسوق", "تجهيز مناسبة شخصية"],
    cta: "اطلب تقييماً خاصاً",
    imageLabel: "تفاصيل يومية خاصة"
  },
  "travel-management": {
    title: "إدارة السفر",
    tagline: "ذكاء الوصول والتحكم في رحلاتك عبر نقطة اتصال واحدة تحيد أي عناء.",
    description: "يشارك العضو تطلعاته، ليتولى فريقنا خلف الكواليس تحليل احتياجاته وتنسيق الخيارات الموثوقة وتنفيذ تطلعاته بسلاسة مطلقة.",
    outcome: "رحلة أكثر سهولة وسكينة، دون الانشغال بإدارة التفاصيل التشغيلية.",
    forWhom: ["الأعضاء المسافرون", "الأسر", "الأزواج", "الضيوف"],
    whenItMatters: ["رحلات متعددة", "عطلات أسرية", "سفر خاص", "تغيير في الخطة"],
    wosolHandles: ["تخطيط المسار", "اختيار الإقامة", "تنسيق التنقل", "متابعة الوصول", "تعديل البرنامج"],
    difference: "لا نقترح خياراً قبل أن نتأكد من ملاءمته التامة لأسلوب حياتكم.",
    sampleRequests: ["برنامج سفر", "استقبال من المطار", "تنسيق إقامة", "خطة سفر أسرية", "تعديل مسار"],
    cta: "راجع ترتيب الرحلة",
    imageLabel: "رحلة مرتبة"
  },
  "private-aviation": {
    title: "الطيران الخاص",
    tagline: "تنقل جوي يتسم بالسهولة والوضوح ويوافق جدولك المزدحم.",
    description: "نختار لك بعناية ما يطابق معاييرك، ونستعرض جوهر الحلول الأكثر ملاءمة لتتخذ قرارك بثقة تامة.",
    outcome: "تنقل جوي خاص يتوافق مع إيقاعك، ويختصر عنك الاحتكاك اللوجستي.",
    forWhom: ["التنفيذيون", "الأسر", "المكاتب", "الضيوف الخاصون"],
    whenItMatters: ["اجتماع عاجل", "رحلة متعددة", "تنقل خاص", "وصول مهم", "سفر أسري"],
    wosolHandles: ["مراجعة المسار", "تنسيق الطائرة", "ترتيب التوقيت", "النقل الأرضي", "متابعة الوصول"],
    difference: "الطيران الخاص في وصول ليس رحلة فقط، بل مسار وصول كامل قبل الإقلاع وبعد الوصول.",
    sampleRequests: ["ترتيب طائرة", "رحلة تنفيذية", "نقل من المطار", "متطلبات الرحلة", "استقبال عند الوصول"],
    cta: "راجع خيار الطيران",
    imageLabel: "رحلة خاصة"
  },
  "luxury-accommodation": {
    title: "الإقامة الخاصة",
    tagline: "اختيارات سكنية (فيلل، شاليهات، بنتهاوس) تتشكل حول طبيعة طلبك.",
    description: "ننسق الإقامات الخاصة من فلل وشاليهات وبنتهاوس بما يتوافق مع الخصوصية، الراحة، وإيقاع الرحلة.",
    outcome: "إقامة تمنحك السكون والخصوصية، لا مجرد مكان للوصول.",
    forWhom: ["الأسر", "الإقامات الطويلة", "الضيوف الخاصون", "من يحتاجون سكنًا موثوقًا"],
    whenItMatters: ["إقامة موسمية", "عطلة أسرية", "رحلة خاصة", "احتفال", "عمل عن بعد"],
    wosolHandles: ["تحديد المتطلبات", "اختيار الإقامة", "تنسيق الخدمات", "تجهيز الوصول", "متابعة الإقامة"],
    difference: "نعتمد على ذكاء الانتقاء، لا على القوائم الثابتة أو الخيارات الجاهزة.",
    sampleRequests: ["فيلا مناسبة", "شاليه للأسرة", "جناح خاص", "سكن مع دعم", "تجهيز قبل الوصول"],
    cta: "راجع إقامة مناسبة",
    imageLabel: "إقامة مناسبة"
  },
  "yacht-charters": {
    title: "تأجير اليخوت",
    tagline: "تنسيق تجارب بحرية خاصة تُصمم بدقة حول ضيوفك.",
    description: "ننسق تجارب بحرية ويخوت صُممت حول مناسباتك، مع إدارة الأجواء والمتابعة الدقيقة خلف الكواليس.",
    outcome: "إبحار حصري وسكينة مُدارة دون انشغال بتفاصيل التشغيل.",
    forWhom: ["الأسر", "المجموعات الخاصة", "المضيفون", "الجهات"],
    whenItMatters: ["رحلة بحرية", "مناسبة خاصة", "استضافة ضيوف", "احتفال", "برنامج قصير"],
    wosolHandles: ["اختيار اليخت", "تحديد المسار", "تنسيق الضيافة", "متابعة الطاقم", "حركة الضيوف"],
    difference: "كل تجربة تُصمم حول المناسبة، الضيوف، ودرجة الخصوصية المطلوبة.",
    sampleRequests: ["رحلة غروب", "رحلة أسرية", "عشاء على اليخت", "استضافة بحرية", "برنامج ساحلي"],
    cta: "راجع تجربة بحرية",
    imageLabel: "ترتيب بحري خاص"
  },
  "health-wellness-resorts": {
    title: "العافية والاستشفاء",
    tagline: "استعادة التوازن عبر برامج صحية وراحة ذهنية منتقاة.",
    description: "ننسق برامج صحية وتأملية بعيدة عن المألوف، وفق احتياجك وإيقاع وقتك ومستوى الخصوصية المطلوب.",
    outcome: "راحة ذهنية وبرامج مختارة بعيداً عن الخيارات العامة.",
    forWhom: ["التنفيذيون", "الأزواج", "الأسر", "من يحتاجون هدوءًا"],
    whenItMatters: ["إرهاق العمل", "إعادة توازن", "بعد السفر", "عطلة صحية", "برنامج خاص"],
    wosolHandles: ["مراجعة الهدف", "اختيار الوجهة", "تنسيق البرنامج", "ترتيب الإقامة", "متابعة الخصوصية"],
    difference: "لا نختار الوجهة لشهرتها فقط، بل لملاءمتها لسياقك وهدفك من الراحة.",
    sampleRequests: ["برنامج عافية", "نهاية أسبوع هادئة", "إقامة استشفاء", "مدرب خاص", "رحلة عائلية هادئة"],
    cta: "راجع برنامج العافية",
    imageLabel: "راحة خاصة"
  },
  "shopping-gifting": {
    title: "التسوق والإهداء",
    tagline: "انتقاء مدروس يعكس ذوقك الرفيع في اختيار المقتنيات والهدايا.",
    description: "ننسق الأزياء والإهداء بانتقاء يعكس الذوق، العلاقة، والمناسبة، بعيداً عن الخيارات المكررة أو غير الملائمة.",
    outcome: "هدية أو مقتنى يصل بالطريقة التي تليق بالمناسبة والعلاقة.",
    forWhom: ["الأعضاء", "الأسر", "التنفيذيون", "المضيفون"],
    whenItMatters: ["هدية مهمة", "مناسبة مفاجئة", "قطعة نادرة", "تسوق خاص", "إهداء جهة"],
    wosolHandles: ["فهم الذوق", "البحث", "الاختيار", "التغليف", "تنسيق التسليم"],
    difference: "الانتقاء في وصول لا يقوم على الاسم، بل على المعنى والذوق وسياق العلاقة.",
    sampleRequests: ["هدية خاصة", "قطعة نادرة", "موعد تسوق", "تنسيق إهداء", "تسليم هدية"],
    cta: "نسق اختيارًا خاصًا",
    imageLabel: "إهداء خاص"
  },
  "business-travel-management": {
    title: "تنقلات الأعمال",
    tagline: "إدارة رحلات الأعمال بدقة تنفيذية تضمن لك الفعالية والراحة.",
    description: "نُحيد الاحتكاك اللوجستي من مسار العمل، وندير السفر والتنقل والإقامة بما يدعم أولويات جدولكم المزدحم.",
    outcome: "تنقلات أعمال أكثر فعالية، ووقت محفوظ للقرارات الأهم.",
    forWhom: ["التنفيذيون", "المؤسسون", "المكاتب", "الوفود"],
    whenItMatters: ["اجتماع مهم", "جولة عمل", "زيارة مستثمرين", "جدول مزدحم", "استضافة وفد"],
    wosolHandles: ["برنامج السفر", "الإقامة والرحلات", "التنقلات", "دعم الاجتماعات", "التعديلات"],
    difference: "نحوّل السفر التنفيذي إلى بنية تشغيلية هادئة تدعم الإنتاجية لا تعطلها.",
    sampleRequests: ["أسبوع تنفيذي", "وصول وفد", "تنقل بين الاجتماعات", "إقامة قريبة", "تعديل جدول"],
    cta: "راجع سفر الأعمال",
    imageLabel: "سفر أعمال منسق"
  },
  "personal-assistant": {
    title: "إدارة التطلعات",
    tagline: "تحويل احتياجاتكم إلى واقع ملموس عبر مسار متابعة هادئ ومتقن.",
    description: "نستوعب تفاصيل الطلب وتطلعات العضو، ثم نحوله إلى مسار متابعة واضح يضمن اكتمال الترتيب كما ينبغي.",
    outcome: "راحة ذهنية ومسؤولية متابعة واضحة من البداية حتى الاكتمال.",
    forWhom: ["الأعضاء", "التنفيذيون", "الأسر", "أصحاب الوقت المحدود"],
    whenItMatters: ["طلب عاجل", "تنسيق معقد", "مناسبة خاصة", "رعاية ضيوف", "مهمة حساسة"],
    wosolHandles: ["فهم الطلب", "تحديد الأولوية", "تنسيق الجهات", "تواصل هادئ", "متابعة الإنجاز"],
    difference: "من خلال نقطة اتصال واحدة، لا يحتاج العضو إلى شرح الطلب لأكثر من جهة.",
    sampleRequests: ["تذاكر صعبة", "تنسيق احتفال", "استقبال ضيوف", "بحث عن قطعة", "مهمة خاصة"],
    cta: "ناقش طلبًا شخصيًا",
    imageLabel: "متابعة شخصية"
  },
  "special-request": {
    title: "التجارب الاستثنائية",
    tagline: "براعة في تفكيك الطلبات المعقدة وتحويلها إلى خطوات واضحة قابلة للتنفيذ.",
    description: "نتعامل مع الطلبات غير التقليدية عبر فهم السياق، تحديد المسار، وانتقاء الشركاء أو الحلول المناسبة بدقة.",
    outcome: "طلب معقد يتحول إلى مسار واضح قابل للتنفيذ.",
    forWhom: ["الأعضاء", "المكاتب العائلية", "التنفيذيون", "المضيفون"],
    whenItMatters: ["وصول نادر", "طلب حساس", "تنسيق خارج المدينة", "وقت محدود", "تجربة مختارة"],
    wosolHandles: ["توضيح الطلب", "بحث الخيارات", "مراجعة الخصوصية", "ترتيب التنفيذ", "تحديثات مختصرة"],
    difference: "يبدأ كل طلب بوضوح تام قبل الالتزام، ثم يُدار وفق المسار الأنسب.",
    sampleRequests: ["تجربة مختارة", "زيارة خاصة", "رعاية ضيوف", "قطعة صعبة", "برنامج مفاجئ"],
    cta: "ابدأ طلبًا خاصًا",
    imageLabel: "طلب خاص"
  },
  "transportation-services": {
    title: "الخدمات اللوجستية الخاصة",
    tagline: "تنقل منسق يضمن لك ولضيوفك وصولاً خاصاً وجدولاً زمنياً ساكناً.",
    description: "ننسق الحركة والتنقل بما يضمن السهولة والوضوح، ويُحيد الاحتكاك اللوجستي من مسار يومك أو مناسبة ضيوفك.",
    outcome: "حركة أكثر سكوناً، ووصول خاص، وجدول زمني واضح.",
    forWhom: ["التنفيذيون", "الأسر", "الضيوف", "مضيفو المناسبات"],
    whenItMatters: ["نقل المطار", "سائق يومي", "وصول مناسبة", "عدة مركبات", "تنقل بين المدن"],
    wosolHandles: ["اختيار المركبة", "تنسيق السائق", "تخطيط المسار", "قوائم الضيوف", "متابعة التوقيت"],
    difference: "التنقل هنا ليس مركبة فقط، بل تنسيق كامل لحركة العضو وضيوفه.",
    sampleRequests: ["سيارة بسائق", "مركبة للأسرة", "تنقل تنفيذي", "سيارة للقيادة", "خطة نقل ضيوف"],
    cta: "رتب التنقل",
    imageLabel: "تنقل خاص"
  },
  "corporate-concierge-services": {
    title: "كونسيرج الشركات",
    tagline: "دعم التنفيذيين والوفود بطبقة تنسيق تليق بمكانتكم.",
    description: "نمنح المؤسسات والشركات طبقة تنسيق رفيعة المستوى لإدارة ضيافة الوفود والضيوف، بما يعكس بروتوكولات الرقي والإتقان.",
    outcome: "ضيافة مؤسسية تليق بمكانة الجهة وتُدار بسلاسة وخصوصية.",
    forWhom: ["الشركات", "المكاتب التنفيذية", "فرق الضيافة", "علاقات المستثمرين"],
    whenItMatters: ["استضافة تنفيذيين", "زيارة وفد", "اجتماع مجلس", "ضيافة عملاء", "رعاية شركاء"],
    wosolHandles: ["دعم الاجتماعات", "السفر والتنقل", "المطاعم والمواقع", "برامج الضيوف", "التنسيق الميداني"],
    difference: "تحصل الجهة على واجهة تنسيق واحدة تحافظ على خصوصية التجربة وجودتها.",
    sampleRequests: ["برنامج ضيف", "لوجستيات اجتماع", "عشاء مجلس", "استقبال شريك", "دعم وفد"],
    cta: "راجع دعم الجهة",
    imageLabel: "ضيافة شركات"
  },
  "event-planning": {
    title: "تخطيط المناسبات",
    tagline: "إدارة كواليس مناسباتك الخاصة بهدوء لتتفرغ كلياً لضيوفك.",
    description: "نتولى كواليس مناسباتكم الخاصة بهدوء واحترافية، لنمنحكم رفاهية التفرغ التام لضيوفكم واهتماماتكم.",
    outcome: "مناسبة مكتملة الأجواء، ومضيف حاضر بلا انشغال.",
    forWhom: ["المضيفون", "الأسر", "الجهات", "التنفيذيون"],
    whenItMatters: ["عشاء خاص", "احتفال", "إطلاق", "استقبال تنفيذي", "مناسبة أسرية"],
    wosolHandles: ["فكرة المناسبة", "الموقع والموردون", "حركة الضيوف", "الضيافة", "إدارة اليوم"],
    difference: "يتولى فريقنا إدارة الأجواء والمتابعة الدقيقة حتى تكتمل الترتيبات.",
    sampleRequests: ["عشاء خاص", "احتفال", "استقبال جهة", "مناسبة خارجية", "ترتيب مفاجأة"],
    cta: "راجع مناسبة خاصة",
    imageLabel: "مناسبة خاصة"
  },
  "arts-design": {
    title: "رعاية المقتنيات",
    tagline: "إدارة ذكية لمساحاتك الخاصة ومقتنياتك الثمينة لتعزيز قيمتها.",
    description: "ننسق الفن والتصميم ورعاية المقتنيات والوصول إلى المعارض الحصرية، بما يعكس ذوقك ويعزز قيمة مساحاتك الخاصة.",
    outcome: "مقتنيات ومساحات تُدار بعناية، وتنسجم مع الذوق والقيمة والاستخدام.",
    forWhom: ["ملاك المنازل", "جامعو الأعمال", "التنفيذيون", "المكاتب العائلية"],
    whenItMatters: ["تجهيز منزل", "تحسين مكتب", "اقتناء عمل", "زيارة معرض", "تحديث مساحة"],
    wosolHandles: ["ترشيح مصممين", "زيارات معارض", "دعم الاختيار", "موجز المساحة", "تنسيق الموردين"],
    difference: "الاختيار لا يتوقف عند المظهر، بل يمتد إلى الراحة والاستدامة وطريقة الاستخدام.",
    sampleRequests: ["زيارة معرض", "ترشيح مصمم", "تنسيق اقتناء", "موجز تصميم", "تجربة ثقافية"],
    cta: "راجع دعم التصميم",
    imageLabel: "فن وتصميم"
  },
  "vip-access": {
    title: "ذكاء الوصول",
    tagline: "تنسيق مسبق للوصول إلى الفرص والمساحات الأكثر حصرية في العالم.",
    description: "نراجع إمكانية الوصول وفق التوقيت، درجة الخصوصية، ومعايير العضو الخاصة، بما يضمن الوضوح قبل الالتزام.",
    outcome: "وصول خاص أكثر وضوحاً، وتنسيق مدروس قبل أي التزام.",
    forWhom: ["الأعضاء", "التنفيذيون", "الضيوف", "مضيفو الجهات"],
    whenItMatters: ["فعالية مهمة", "موقع خاص", "مطعم مناسب", "تجربة محدودة", "مناسبة ثقافية"],
    wosolHandles: ["مراجعة الطلب", "تنسيق الشركاء", "متطلبات الضيوف", "تخطيط الوصول", "حفظ الخصوصية"],
    difference: "الوصول ليس وعداً عاماً، بل ذكاء انتقاء يخضع للملاءمة والتوقيت.",
    sampleRequests: ["عشاء خاص", "حضور فعالية", "موقع خاص", "تجربة مختارة", "استقبال ضيوف"],
    cta: "راجع إمكانية الوصول",
    imageLabel: "وصول خاص"
  },
  "real-estate": {
    title: "عقارات منتقاة",
    tagline: "وصول عقاري يستند إلى الخصوصية والملاءمة.",
    description: "ننسق الوصول إلى عقارات منتقاة وفق الخصوصية، الملاءمة، وطبيعة الاستخدام، بعيداً عن ضجيج الخيارات العامة.",
    outcome: "خيارات عقارية أكثر صلة، وزيارات تُدار بهدوء ووضوح.",
    forWhom: ["المشترون", "المستثمرون", "المكاتب العائلية", "المنتقلون"],
    whenItMatters: ["بحث عن مسكن", "منزل ثان", "فرصة استثمارية", "انتقال", "زيارة عقارية"],
    wosolHandles: ["فهم المتطلبات", "تعريف بشركاء", "زيارات خاصة", "مراجعة الملاءمة", "تنسيق الزيارة"],
    difference: "يُراجع العقار حسب الاستخدام والموقع والخصوصية والحركة، لا حسب الاسم وحده.",
    sampleRequests: ["بحث عن فيلا", "زيارة شقة", "مراجعة منزل ثان", "تعريف بفرصة", "خطة انتقال"],
    cta: "ناقش طلبًا عقاريًا",
    imageLabel: "عقار خاص"
  }
};

for (const blueprint of serviceBlueprints) {
  if (arabicServiceCopy[blueprint.id]) {
    Object.assign(blueprint.ar, arabicServiceCopy[blueprint.id]);
  }
}

const content = {
  en: {
    meta: "",
    nav: { explore: "Private Assessment", services: "Request Pathways", copy: "Copy", copied: "Copied" },
    cover: {
      label: "",
      title: "Every Detail, Quietly Handled.",
      desc: "WOSOL begins with a private review of your context, then recommends the right path for travel, access, hosting, lifestyle, or executive coordination.",
      sub: "Private assessment · discreet coordination · request-led access",
      visual: "A private operating layer for people whose time, privacy, and standards require careful judgment."
    },
    summary: "WOSOL Concierge is a <strong>private operating relationship</strong>, not a public catalogue. Each request is reviewed for fit, timing, sensitivity, availability, and the level of coordination required before a service path is recommended.",
    sections: {
      essence: {
        num: "02",
        title: "The Private Layer",
        label: "Relationship Before Service",
        body: [
          "WOSOL is built for requests that need judgment before action. The first step is understanding the client, the context, and the outcome that matters.",
          "The relationship stays intentionally private. What appears simple to the client is supported by scoping, partner review, confirmations, and follow-through."
        ],
        cards: [
          ["Assessment", "Every request is reviewed before it is positioned, priced, or handed to a partner."],
          ["Judgment", "The team identifies what should be arranged, what should be avoided, and what needs confirmation."],
          ["Privacy", "Client context is kept within the smallest practical circle required to execute the request."]
        ]
      },
      principles: {
        num: "03",
        title: "What WOSOL Protects",
        label: "The Standard Behind Each Request",
        cards: [
          ["Time", "The client should not have to manage every supplier, route, change, or confirmation."],
          ["Privacy", "Personal movement, guest details, and sensitive preferences are handled with restraint."],
          ["Clarity", "The client receives what is possible, what is conditional, and what requires further review."]
        ]
      },
      global: {
        num: "04",
        title: "Where The Relationship Moves",
        label: "By Request, Context, And Availability",
        body: ["WOSOL supports private requests across destinations, residences, hospitality, events, travel, access, and lifestyle coordination.", "Each movement depends on destination, timing, client fit, partner terms, and the level of privacy required."],
        metrics: [["Private", "Assessment first"], ["Selected", "Partner network"], ["Global", "By request"], ["Separate", "Third-party costs"]]
      },
      ecosystem: {
        num: "05",
        title: "Partnership Network",
        label: "Selected Access, Not A Public Promise",
        body: ["WOSOL works through selected partners across hospitality, aviation, residences, yachts, lifestyle, and premium services.", "Partner access is always subject to availability, timing, client fit, request sensitivity, pricing, and the partner’s own terms."],
        items: ["Luxury Hotels", "Private Aviation", "Yachts", "Private Resorts", "Fine Dining", "Wellness Retreats", "Real Estate", "Luxury Fashion", "Art & Design", "Private Events"]
      },
      services: {
        num: "06",
        title: "Request Pathways",
        label: "What May Be Reviewed Privately",
        all: "All Pathways",
        empty: "No services match the current filter.",
        explore: "Review Pathway"
      },
      segments: {
        num: "08",
        title: "Client Segments",
        label: "Pathways By Client Need",
        cards: [
          ["Private Individuals", "Need discreet coordination for travel, hosting, access, and personal requests.", "Assessment, scoping, execution"],
          ["Executives & Offices", "Need reliable handling for movement, guests, meetings, and time-sensitive details.", "Travel, hosting, logistics"],
          ["Families & Estates", "Need continuity, trusted communication, and careful management of preferences.", "Residence, travel, lifestyle"],
          ["VIP Guests", "Need quiet arrival care, route planning, and carefully selected access.", "Reception, movement, access"],
          ["Luxury Partners", "Need a private concierge layer that protects the quality of their client experience.", "Guest care, events, support"]
        ]
      },
      process: {
        num: "09",
        title: "How WOSOL Works",
        label: "Private Assessment To Execution",
        steps: [
          ["Private Inquiry", "The request is received with the minimum information needed to understand intent, timing, and sensitivity."],
          ["Private Assessment", "WOSOL reviews fit, feasibility, privacy needs, partner options, and likely conditions."],
          ["Recommended Path", "The client receives a practical route, including what is possible and what remains conditional."],
          ["Execution", "Confirmations, partners, timelines, changes, and communication are coordinated through one layer."],
          ["Relationship Memory", "Useful preferences are retained so future requests require less repetition and more precision."]
        ]
      },
      standard: {
        num: "10",
        title: "Boundaries & Standards",
        label: "What Keeps The Relationship Precise",
        cards: [
          ["No Open Access Claims", "Partner access is reviewed case by case and is never presented as unlimited or automatic."],
          ["Separate Costs", "Hotels, aviation, yachts, suppliers, venues, and other third-party costs remain separate."],
          ["No Regulated Advice", "WOSOL does not provide legal, financial, medical, or investment advice."],
          ["Request Review", "Some requests may be declined, deferred, or redirected if fit, timing, or standards are not suitable."],
          ["Discretion", "Luxury is handled without unnecessary display or excessive explanation."],
          ["Continuity", "The relationship improves as preferences and expectations become clearer over time."]
        ]
      },
      inquiry: {
        label: "Private Assessment",
        title: "Begin Privately.",
        body: "Share the request, destination, occasion, or context. WOSOL will review whether the request fits the relationship and recommend the next step discreetly.",
        request: "Request Private Assessment",
        email: "Email",
        phone: "Phone",
        website: "Website"
      }
    },
    serviceLabels: {
      forWhom: "For Whom",
      bestFor: "Best For",
      when: "When It Matters",
      handles: "WOSOL Handles",
      standard: "Experience Standard",
      difference: "What Makes It Different",
      wosolDifference: "The WOSOL Difference",
      samples: "Sample Requests",
      typicalRequests: "Typical Requests",
      audience: "Target Audience Relevance",
      outcome: "Outcome",
      back: "Back to Services"
    }
  },
  ar: {
    meta: "",
    nav: { explore: "اطلب تقييماً خاصاً", services: "مسارات الطلب", copy: "نسخ", copied: "تم النسخ" },
    cover: {
      label: "",
      title: "كل التفاصيل، مُعتنى بها.",
      desc: "في وصول كونسيرج، نحن لا نحجز الخدمات، بل نُدير نمط حياتك. عضويتنا هي مساحة حصرية صُممت لمن يثمنون وقتهم فوق كل شيء.",
      sub: "Luxury is feeling handled",
      visual: "الفخامة أن تشعر أن كل شيء مُدار عنك."
    },
    summary: "في وصول كونسيرج، نحن لا نحجز الخدمات، بل نُدير نمط حياتك. عضويتنا هي مساحة حصرية صُممت لمن يثمنون وقتهم فوق كل شيء. عبر واجهتنا الرقمية، نمنحك <strong>ذكاء الوصول</strong> والتحكم الكامل في تفاصيل يومك وسفرك، بينما يتولى فريقنا خلف الكواليس دور <strong>الأوركسترا التشغيلية</strong>؛ حيث نُحلل احتياجاتك، نُنسق الخيارات الموثوقة، ونضمن تنفيذ تطلعاتك بسلاسة مطلقة ومن نقطة اتصال واحدة تضمن لك <strong>السكينة المُدارة</strong>.",
    sections: {
      essence: {
        num: "02",
        title: "منهجية العمل",
        label: "إيقاع يوافق أسلوب حياتك",
        body: [
          "تعتمد منهجيتنا على التخطيط المدروس الذي يسبق الفعل، لضمان أن كل ترتيب يأتي كامتداد طبيعي لأسلوب حياتك الخاص."
        ],
        cards: [
          ["فهم السياق", "لا نبدأ بأي إجراء قبل الاستيعاب العميق لتفضيلاتك وإيقاع وقتك، ليكون كل ما نقدمه متسقاً مع تطلعاتك الشخصية."],
          ["الانتقاء الذكي", "نبتعد عن كثرة الخيارات المربكة؛ نختار لك بعناية ما يطابق معاييرك، ونستعرض جوهر الحلول الأكثر ملاءمة لتتخذ قرارك بثقة تامة."],
          ["التحوط والسرية", "مساحتك الشخصية مقدسة؛ لذا تُدار بياناتك وتطلعاتك بخصوصية مطلقة وضمن نطاق محدود جداً من فريقنا المختص."]
        ]
      },
      principles: {
        num: "03",
        title: "ما تحفظه وصول لك",
        label: "الراحة الذهنية، ثروة الوقت، الخصوصية المطلقة",
        cards: [
          ["الراحة الذهنية", "اتخاذ قرارات واثقة دون عناء البحث أو المقارنة بين خيارات لا تليق بذوقك."],
          ["ثروة الوقت", "نُحيد الاحتكاك اللوجستي من مسار حياتك، لنحفظ وقتك لما يستحق انتباهك فعلاً."],
          ["الخصوصية المطلقة", "التزام تام بحماية مساحتك الشخصية وسرية تامة في إدارة أدق التفاصيل."]
        ]
      },
      global: {
        num: "04",
        title: "التنسيق الموثوق",
        label: "بمجرد اختيار المسار",
        body: ["بمجرد اختيار المسار المفضل، نتحمل نحن مسؤولية إدارة الأجواء والمتابعة الدقيقة.", "تكتمل ترتيباتك بأعلى معايير الإتقان السعودي (Hafawah)، لتبقى أنت على اطلاع دائم بالنتائج دون الانشغال بإدارة التفاصيل التشغيلية بنفسك."],
        metrics: [["سياق", "يُفهم بعمق"], ["انتقاء", "ذكي ومدروس"], ["تنسيق", "عبر نقطة واحدة"], ["سكينة", "مُدارة بالكامل"]]
      },
      ecosystem: {
        num: "05",
        title: "وصول عالمي وشبكة شراكات ذكية",
        label: "انتقاء الشريك المناسب",
        body: ["لا نؤمن في وصول بالقوائم الثابتة. ذكاؤنا يكمن في انتقاء الشريك المناسب لكل طلب بناءً على التوقيت، مستوى الخصوصية، ومعايير العضو الخاصة.", "نحن نصلك بشبكة عالمية من الشركاء الذين يشاركوننا فلسفة الخدمة غير المرئية والإتقان في التنفيذ."],
        items: ["ملاذات الضيافة", "الطيران التنفيذي", "الإبحار الحصري", "الخلوات الخاصة", "تجارب التذوق", "الرفاه والاستشفاء", "عقارات منتقاة", "الأزياء والإهداء", "الفن والتصميم", "الاستضافة الخاصة"]
      },
      services: {
        num: "06",
        title: "ما يمكن تنسيقه عبر عضويتك",
        label: "بنية تحتية أرقى للحياة",
        all: "كل المسارات",
        empty: "نعمل حالياً على ضبط التفاصيل لتتوافق مع معاييركم الخاصة.",
        explore: "راجع المسار"
      },
      segments: {
        num: "08",
        title: "لمن نُصمّم التجربة؟",
        label: "إلى النخبة التي تُقدّر قيمة الوقت والخصوصية",
        cards: [
          ["أصحاب الرؤية والذوق الخاص", "لمن يفضلون وجود جهة موثوقة تتولى هندسة تفاصيل حياتهم، ليتفرغوا هم للاستمتاع بجودتها.", "إدارة التطلعات، السفر الخاص، المتابعة الدقيقة"],
          ["القيادات التنفيذية والمكاتب الخاصة", "دعم استراتيجي للجداول المزدحمة، حيث نُحيّد الاحتكاك اللوجستي ونضمن كفاءة التنفيذ في الطلبات المعقدة.", "جداول، ضيوف، تنقل"],
          ["العائلات الخاصة", "نمنحكم السكينة عبر تنسيق احتياجات الأجيال المختلفة، من الإقامات السكنية الطويلة إلى المناسبات العائلية الحميمة.", "سفر، إقامة، مناسبات"],
          ["المؤسسات والشركات", "طبقة تنسيق رفيعة المستوى لإدارة ضيافة الوفود والضيوف الدبلوماسيين، بما يعكس بروتوكولات الرقي والإتقان.", "ضيافة، وفود، اجتماعات"],
          ["الزوار والضيوف الدوليون", "بوابتكم لذكاء الوصول داخل المملكة وخارجها، حيث تندمج الخبرة المحلية بالمعايير العالمية.", "وصول، تنقل، إقامة"]
        ]
      },
      process: {
        num: "09",
        title: "منهجية وصول",
        label: "إيقاع يوافق أسلوب حياتك",
        steps: [
          ["استيعاب السياق", "كل رحلة تبدأ بفهم عميق لإيقاع وقتكم الخاص؛ لا نقترح خياراً قبل أن نتأكد من ملاءمته التامة لأسلوب حياتكم."],
          ["الانتقاء الذكي", "نبتعد عن القوائم التقليدية المزدحمة؛ نختار لكم بعناية جوهر الحلول التي تطابق معاييركم."],
          ["السرية المطلقة", "تُدار تفاصيلكم وتطلعاتكم كأصول ثمينة، ضمن نطاق ضيق جداً من فريقنا المختص."],
          ["التنسيق الموثوق", "بمجرد اختيار المسار المفضل، نتولى إدارة الأجواء والمتابعة اللحظية لضمان اكتمال الترتيبات."],
          ["التخصيص الفائق", "ذكاؤنا يكمن في انتقاء الشريك المناسب لكل طلب، بناءً على التوقيت ودرجة الخصوصية المطلوبة."]
        ]
      },
      standard: {
        num: "10",
        title: "مبادئنا",
        label: "التزام بالوضوح والواقعية التشغيلية",
        cards: [
          ["النزاهة في الوعد", "نراجع كل طلب بدقة قبل التأكيد، لضمان قدرتنا على تنفيذه بما يليق بمعاييرنا ومعاييركم."],
          ["الشفافية التامة", "وضوح كامل في التكاليف والاشتراطات قبل البدء، لضمان تجربة خالية من المفاجآت الإدارية."],
          ["مراجعة الطلب", "تقييم الطلب وتحديد آلية التعامل المناسبة قبل بدء أي ترتيب تشغيلي."],
          ["التحفظ المهني", "نتعامل مع معلوماتكم بعناية فائقة، حيث الخصوصية ليست ميزة، بل هي الأساس الذي تقوم عليه عضويتنا."],
          ["المعرفة المتراكمة", "نحفظ تفضيلاتكم لنبني عليها مستقبلاً؛ فكلما زاد تعاملنا، زاد فهمنا لإيقاعكم الخاص دون حاجة للتكرار."],
          ["الملاءمة المستمرة", "نضمن أن يكون كل ترتيب تشغيلي متسقاً مع سياق الطلب والبيئة المحيطة، سواء كانت رحلة عمل أو خلوة خاصة."]
        ]
      },
      inquiry: {
        label: "تقييم خاص",
        title: "ابدأ بطلب خاص",
        body: "الخطوة الأولى نحو حياة أكثر سهولة تبدأ بطلب واحد. شاركنا تطلعاتك عبر تطبيق وصول كونسيرج، وسيقوم فريقنا بمراجعته واقتراح المسار الذي يضمن لك أقصى درجات الراحة الذهنية.",
        request: "اطلب تقييماً خاصاً",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        website: "الموقع الإلكتروني"
      }
    },
    serviceLabels: {
      forWhom: "مناسب لـ",
      bestFor: "عند الحاجة إلى",
      when: "متى تحتاجها",
      handles: "ما تتولاه وصول",
      standard: "معيار التعامل",
      difference: "ما يميز الترتيب",
      wosolDifference: "دور وصول",
      samples: "أمثلة طلبات",
      typicalRequests: "أمثلة طلبات",
      audience: "لمن يناسب",
      outcome: "النتيجة",
      back: "العودة إلى الخدمات"
    }
  }
};

const imagePrompts = {
  "lifestyle-concierge": "Editorial photograph of a quiet luxury concierge desk in a private residence, cream stone, navy notebook, no visible logos, discreet service details, soft natural light.",
  "travel-management": "Premium travel planning still life with passport, bespoke itinerary, luxury hotel key, cream and navy palette, international but understated, no logos.",
  "private-aviation": "Private jet cabin detail with champagne beige leather, navy accents, runway light through window, quiet executive atmosphere, no people, no logos.",
  "luxury-accommodation": "Private villa pool at golden hour, architectural calm, warm stone, linen curtains, secluded luxury residence, no visible brand marks.",
  "yacht-charters": "Luxury yacht deck at sunset with calm water, teak detail, cream upholstery, elegant and uncrowded, no party scene, no logos.",
  "health-wellness-resorts": "Secluded wellness resort terrace with spa water, warm stone, linen, greenery, quiet restorative mood, realistic luxury hospitality.",
  "shopping-gifting": "Luxury gifting still life with textured paper, ribbon, leather tray, rare object hint, cream navy muted gold palette, no brand logos.",
  "business-travel-management": "Executive boardroom travel planning scene with itinerary, premium pen, city view, navy documents, quiet corporate luxury.",
  "personal-assistant": "Discreet personal assistant service detail, gloved hand placing invitation card on cream desk, refined stationery, private atmosphere.",
  "special-request": "Bespoke request concept with sealed envelope, private access card, elegant tray, dim luxury interior, understated and confidential.",
  "transportation-services": "Executive black car arrival at luxury hotel entrance, soft evening light, driver silhouette only, no visible logos, calm and private.",
  "corporate-concierge-services": "Corporate hospitality setup with boardroom table, fine dining detail, itinerary cards, executive guest welcome, cream and navy tone.",
  "event-planning": "Private event table detail with linen, candlelight, floral restraint, premium place cards, intimate luxury setting, no crowd.",
  "arts-design": "Private art gallery viewing with sculptural furniture, warm wall light, quiet collector atmosphere, no visible artist signatures or logos.",
  "vip-access": "Exclusive venue corridor with velvet rope suggested subtly, warm lighting, empty premium entrance, private access mood, no logos.",
  "real-estate": "Luxury residence interior with architectural staircase, warm stone, refined furniture, private viewing atmosphere, no real estate signage."
};

for (const blueprint of serviceBlueprints) {
  blueprint.image = `assets/images/${blueprint.id}.jpg`;
  blueprint.imagePrompt = imagePrompts[blueprint.id];
}

const ecosystemImageFiles = [
  "luxury-hotels",
  "private-aviation",
  "superyachts",
  "resorts",
  "fine-dining",
  "wellness-retreats",
  "real-estate",
  "luxury-fashion",
  "art-and-design",
  "private-events"
];

const ecosystemRoles = {
  en: [
    "Hospitality access",
    "Private mobility",
    "Marine lifestyle",
    "Resort stays",
    "Dining curation",
    "Wellness retreats",
    "Property access",
    "Personal style",
    "Culture and interiors",
    "Private hosting"
  ],
  ar: [
    "إقامات فاخرة تتسم بالسكون والخصوصية.",
    "تنقل جوي خاص يتوافق مع إيقاعك.",
    "تجارب بحرية ويخوت صُممت حول مناسباتك.",
    "منتجعك الخاص بعيداً عن صخب العالم.",
    "وصول منسق لأرقى المطاعم وتجارب الطهاة الخاصين.",
    "برامج صحية وتأملية بعيدة عن المألوف.",
    "وصول عقاري يستند إلى الخصوصية والملاءمة.",
    "انتقاء يعكس الذوق، العلاقة، والمناسبة.",
    "رعاية المقتنيات والوصول إلى المعارض الحصرية.",
    "طبقة تنسيق لدعم الضيوف والوفود رفيعة المستوى."
  ]
};

const partnerBrands = [
  { name: "Dorchester Collection", slug: "dorchester-collection", category: { en: "Luxury hospitality", ar: "ضيافة فاخرة" } },
  { name: "Waldorf Astoria", slug: "waldorf-astoria", category: { en: "Hotels & residences", ar: "فنادق وإقامات" } },
  { name: "The Ritz-Carlton", slug: "ritz-carlton", category: { en: "Club hospitality", ar: "ضيافة راقية" } },
  { name: "The Luxury Collection", slug: "luxury-collection", category: { en: "Luxury hotels", ar: "فنادق فاخرة" } },
  { name: "The Leading Hotels of the World", slug: "leading-hotels", category: { en: "Independent luxury hotels", ar: "فنادق عالمية مختارة" } },
  { name: "Rosewood Hotels & Resorts", slug: "rosewood", category: { en: "Hotels & resorts", ar: "فنادق ومنتجعات" } },
  { name: "Rocco Forte Hotels", slug: "rocco-forte", category: { en: "European hospitality", ar: "ضيافة أوروبية" } },
  { name: "Raffles Hotels & Resorts", slug: "raffles", category: { en: "Iconic hospitality", ar: "ضيافة أيقونية" } },
  { name: "Alpha Star Aviation Services", slug: "alpha-star", category: { en: "Private aviation", ar: "طيران خاص" } },
  { name: "One&Only", slug: "one-and-only", category: { en: "Resorts & private stays", ar: "منتجعات وإقامات خاصة" } },
  { name: "Mandarin Oriental", slug: "mandarin-oriental", category: { en: "Hotel group", ar: "مجموعة فندقية" } },
  { name: "Jumeirah Hotels & Resorts", slug: "jumeirah", category: { en: "Hotels & resorts", ar: "فنادق ومنتجعات" } },
  { name: "JOALI", slug: "joali", category: { en: "Island resorts", ar: "منتجعات جزرية" } },
  { name: "Four Seasons", slug: "four-seasons", category: { en: "Hotels & residences", ar: "فنادق وإقامات" } },
  { name: "Edmiston", slug: "edmiston", category: { en: "Yacht access", ar: "وصول لليخوت" } },
  { name: "Cheval Blanc", slug: "cheval-blanc", category: { en: "Maison hospitality", ar: "ضيافة ميزون" } },
  { name: "Cabrio", slug: "cabrio", category: { en: "Mobility partner", ar: "شريك تنقل" } },
  { name: "Bvlgari Hotels & Resorts", slug: "bvlgari", category: { en: "Hotels & resorts", ar: "فنادق ومنتجعات" } },
  { name: "Anantara Hotels, Resorts & Spas", slug: "anantara", category: { en: "Resorts & spas", ar: "منتجعات وسبا" } },
  { name: "Aman", slug: "aman", category: { en: "Private resorts", ar: "منتجعات خاصة" } },
  { name: "Maison de L'Amie Flowers", slug: "maison-de-lamie", category: { en: "Floral styling", ar: "تنسيق زهور" } }
];

const socialLinks = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/wosol-concierge" },
  { label: "X", icon: "x", href: "https://x.com/wosol_concierge" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/wosol_concierge" },
  { label: "Snapchat", icon: "snapchat", href: "https://www.snapchat.com/@wosolconcierge" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@wosol_concierge" }
];

const socialIcons = {
  linkedin: `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"/></svg>`,
  x: `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M14.23 10.16 22.98 0h-2.07l-7.59 8.82L7.25 0H.26l9.17 13.34L.26 24h2.07l8.02-9.32L16.75 24h6.99l-9.51-13.84Zm-2.83 3.3-.93-1.33L3.08 1.56h3.18l5.96 8.53.93 1.33 7.76 11.09h-3.18l-6.33-9.05Z"/></svg>`,
  instagram: `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M7.03.08C5.75.15 4.88.35 4.12.65c-.79.31-1.46.72-2.12 1.39C1.33 2.7.92 3.37.62 4.16.32 4.93.12 5.8.06 7.08 0 8.35-.01 8.77 0 12.02c.01 3.26.02 3.67.08 4.95.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.12.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.06 3.26-.01 3.67-.02 4.95-.08 1.28-.06 2.15-.27 2.91-.56.79-.31 1.46-.72 2.12-1.39.67-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.55-2.91.06-1.28.07-1.69.06-4.95-.01-3.26-.02-3.67-.08-4.95-.06-1.28-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.12C21.3 1.33 20.63.92 19.84.62 19.07.32 18.2.12 16.92.06 15.65.01 15.24-.01 11.98 0 8.72.01 8.31.02 7.03.08Zm.14 21.69c-1.17-.05-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.42-2.23-.06-1.26-.07-1.64-.08-4.85-.01-3.2.01-3.58.06-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.36 2.23-.42 1.27-.06 1.64-.07 4.85-.08 3.2-.01 3.58.01 4.85.06 1.17.05 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.06.42 2.23.06 1.27.07 1.65.08 4.85.01 3.2-.01 3.58-.06 4.85-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.64.07-4.85.08-3.2.01-3.58-.01-4.85-.06ZM16.95 5.59a1.44 1.44 0 1 0 2.88-.01 1.44 1.44 0 0 0-2.88.01ZM5.84 12.01a6.16 6.16 0 1 0 12.32-.02 6.16 6.16 0 0 0-12.32.02ZM8 12.01a4 4 0 1 1 8-.02 4 4 0 0 1-8 .02Z"/></svg>`,
  snapchat: `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12.21.79c.99 0 4.35.28 5.93 3.82.53 1.19.4 3.22.3 4.85l-.01.06c-.01.18-.02.35-.03.51.08.05.2.09.4.09.3-.02.66-.12 1.03-.3.17-.09.34-.1.46-.1.18 0 .36.03.51.09.45.15.73.48.73.84.02.45-.39.84-1.21 1.17-.09.03-.21.08-.34.12-.45.13-1.14.36-1.33.81-.09.22-.06.52.12.87l.01.01c.06.14 1.53 3.48 4.79 4.02.26.04.44.27.42.51 0 .07-.01.15-.04.22-.24.57-1.27.99-3.15 1.27-.06.09-.12.38-.16.57-.03.18-.08.36-.14.55-.08.27-.27.41-.55.41h-.03c-.14 0-.31-.03-.54-.08-.36-.07-.77-.13-1.27-.13-.3 0-.6.01-.91.07-.6.1-1.12.46-1.72.88-.85.6-1.83 1.29-3.29 1.29-.06 0-.12-.02-.18-.02h-.15c-1.47 0-2.43-.67-3.28-1.29-.6-.42-1.11-.78-1.71-.88-.31-.05-.63-.07-.93-.07-.54 0-.96.09-1.27.15-.21.04-.39.07-.54.07-.37 0-.52-.22-.58-.42-.06-.19-.09-.39-.14-.57-.04-.18-.1-.49-.16-.57-1.92-.22-2.95-.64-3.19-1.23-.03-.06-.05-.15-.05-.22-.02-.24.16-.47.42-.51 3.26-.54 4.73-3.88 4.79-4.02l.02-.03c.18-.35.22-.65.12-.87-.2-.43-.88-.66-1.33-.81-.12-.03-.24-.07-.35-.12-1.11-.44-1.26-.93-1.2-1.27.09-.48.67-.79 1.17-.79.15 0 .27.03.38.07.42.19.79.3 1.1.3.23 0 .38-.06.47-.11l-.05-.57c-.1-1.63-.22-3.65.31-4.84C7.39 1.08 10.74.81 11.73.81l.42-.02h.06Z"/></svg>`,
  tiktok: `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z"/></svg>`
};

const savedLanguage = localStorage.getItem("wosol-lang");

let state = {
  lang: ["ar", "en"].includes(savedLanguage) ? savedLanguage : "ar",
  filter: "all"
};

function getServices(lang = state.lang) {
  return serviceBlueprints.map((service) => ({
    id: service.id,
    categoryKey: service.categoryKey,
    category: categories[service.categoryKey][lang],
    image: service.image,
    imagePrompt: service.imagePrompt,
    ...service[lang]
  }));
}

function textDirClass() {
  return state.lang === "ar" ? "ar" : "en";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sectionShell(key, inner) {
  const section = content[state.lang].sections[key];
  return `
    <div class="section-header">
      <span class="section-num en">${section.num}</span>
      <div>
        <h2 class="section-title ${textDirClass()}">${section.title}</h2>
      </div>
    </div>
    <div class="section-body ${textDirClass()}">${inner}</div>
  `;
}

function card(title, desc, index, featured = false, meta = "") {
  return `
    <article class="strategy-card ${featured ? "featured" : ""}">
      <span class="card-num en">${meta || String(index).padStart(2, "0")}</span>
      <div class="card-title ${textDirClass()}">${escapeHtml(title)}</div>
      <div class="card-desc ${textDirClass()}">${escapeHtml(desc)}</div>
    </article>
  `;
}

function renderCover() {
  const c = content[state.lang].cover;
  const cover = document.getElementById("cover");
  document.getElementById("documentMeta").textContent = content[state.lang].meta;
  cover.classList.add("video-hero");
  cover.innerHTML = `
    <video
      class="hero-video"
      src="https://yellowstoneclub.com/images/Mountains-v6-3mbps.mp4"
      poster="https://yellowstoneclub.com/imager/images/5628/home-page-banner_0f233927fd5f15efa70a39d82348704b.jpg"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    ></video>
    <div class="hero-video-overlay" aria-hidden="true"></div>
    <div class="hero-video-content">
      <div class="hero-video-logo en" aria-label="WOSOL Concierge">
        <span class="hero-video-logo__name">WOSOL</span>
        <span class="hero-video-logo__sub">CONCIERGE</span>
      </div>
      <h1 class="hero-title ${textDirClass()}">${c.title}</h1>
    </div>
  `;
}

function renderSummary() {
  document.getElementById("executiveSummary").innerHTML = `
    <span class="exec-label ${textDirClass()}">${state.lang === "ar" ? "لماذا وصول" : "Executive Summary"}</span>
    <p class="${textDirClass()}">${content[state.lang].summary}</p>
  `;
}

function renderBasicSections() {
  const s = content[state.lang].sections;

  document.getElementById("essence").innerHTML = sectionShell("essence", `
    ${s.essence.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    <div class="cards-grid">${s.essence.cards.map((item, i) => card(item[0], item[1], i + 1, i === 0)).join("")}</div>
  `);

  document.getElementById("principles").innerHTML = sectionShell("principles", `
    <div class="cards-grid">${s.principles.cards.map((item, i) => card(item[0], item[1], i + 1, i === 0)).join("")}</div>
  `);

  document.getElementById("global").innerHTML = sectionShell("global", `
    <div class="split-grid">
      <div>${s.global.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div>
      <div class="visual-frame" role="img" aria-label="Luxury abstract global access map">
        <div class="visual-caption"><span class="${textDirClass()}">${state.lang === "ar" ? "وصول عالمي" : "Global Access Map"}</span><strong class="${textDirClass()}">${escapeHtml(s.global.body[0])}</strong></div>
      </div>
    </div>
  `);

  document.getElementById("ecosystem").innerHTML = sectionShell("ecosystem", `
    ${s.ecosystem.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    ${renderPartnerShowcase(s.ecosystem.items)}
  `);

  renderAccessLogos();

  document.getElementById("segments").innerHTML = sectionShell("segments", `
    <div class="cards-grid">${s.segments.cards.map((item, i) => `
      <article class="strategy-card ${i === 1 ? "featured" : ""}">
        <span class="card-num en">${String(i + 1).padStart(2, "0")}</span>
        <div class="card-title ${textDirClass()}">${escapeHtml(item[0])}</div>
        <div class="card-desc ${textDirClass()}">${escapeHtml(item[1])}</div>
        <div class="card-meta en">${escapeHtml(item[2])}</div>
      </article>
    `).join("")}</div>
  `);

  document.getElementById("process").innerHTML = sectionShell("process", `
    <div class="process-list">${s.process.steps.map((item, i) => `
      <div class="process-step">
        <div class="process-step-num en">${String(i + 1).padStart(2, "0")}</div>
        <div><div class="card-title ${textDirClass()}">${escapeHtml(item[0])}</div><p>${escapeHtml(item[1])}</p></div>
      </div>
    `).join("")}</div>
  `);

  document.getElementById("standard").innerHTML = sectionShell("standard", `
    <div class="cards-grid">${s.standard.cards.map((item, i) => card(item[0], item[1], i + 1, i === 0)).join("")}</div>
  `);
}

function renderPartnerShowcase(items) {
  const roles = ecosystemRoles[state.lang];

  return `
    <div class="partner-showcase" data-partner-showcase>
      <div class="partner-desktop-showcase">
        ${renderPartnerGallery(items, roles, "desktop")}
      </div>
      ${renderPartnerGallery(items, roles, "mobile")}
    </div>
  `;
}

function renderPartnerGallery(items, roles, variant) {
  const isMobile = variant === "mobile";
  const galleryLabel = state.lang === "ar"
    ? (isMobile ? "فئات الوصول" : "معرض الوصول")
    : (isMobile ? "Curated Access View" : "Curated Access Gallery");
  const slides = items.map((item, index) => `
    <article class="partner-gallery-card" data-partner-slide="${index}">
      <img src="assets/images/partners/${ecosystemImageFiles[index]}.jpg" alt="${escapeHtml(item)}" loading="lazy" />
      <div class="partner-gallery-card__shade" aria-hidden="true"></div>
      <div class="partner-gallery-card__content">
        <h3 class="${textDirClass()}">${escapeHtml(item)}</h3>
        <p class="${textDirClass()}">${escapeHtml(roles[index])}</p>
      </div>
    </article>
  `).join("");
  const dots = items.map((_, index) => `
    <button class="partner-gallery-dot ${index === 0 ? "active" : ""}" type="button" data-gallery-dot="${index}" aria-label="Go to partner slide ${index + 1}"></button>
  `).join("");

  return `
    <div class="partner-gallery partner-gallery--${variant}" data-partner-gallery>
      <div class="partner-gallery-head">
        <div>
          <span class="closing-label ${textDirClass()}">${galleryLabel}</span>
          <p class="${textDirClass()}">${state.lang === "ar" ? "فئات مختارة تساعدك على تصور نطاق الخدمات والشركاء." : "Browse partner categories through larger, clearer visual cards."}</p>
        </div>
        <div class="partner-gallery-controls">
          <button class="partner-gallery-btn" type="button" data-gallery-prev aria-label="Previous partner category">‹</button>
          <button class="partner-gallery-btn" type="button" data-gallery-next aria-label="Next partner category">›</button>
        </div>
      </div>
      <div class="partner-gallery-track" data-gallery-track>
        ${slides}
      </div>
      <div class="partner-gallery-dots">${dots}</div>
    </div>
  `;
}

function renderAccessLogos() {
  const isArabic = state.lang === "ar";
  const logoSet = partnerBrands.map(accessLogoMarkup).join("");
  document.getElementById("accessLogos").innerHTML = `
    <div class="access-logo-cloud" aria-label="${isArabic ? "علامات وشركاء ضمن نطاق الوصول الفاخر" : "Luxury access logo landscape"}">
      <div class="logo-marquee logo-marquee--static" aria-hidden="false">
        <div class="logo-marquee__track">
          <div class="logo-marquee__group">${logoSet}</div>
        </div>
      </div>
    </div>
  `;
}

function accessLogoMarkup(brand) {
  return `
    <span class="logo-wordmark logo-wordmark--image logo-${brand.slug} en">
      <img src="assets/logos/partners/${brand.slug}.png" alt="${escapeHtml(brand.name)}" loading="lazy" decoding="async" />
    </span>
  `;
}

function renderServices() {
  const s = content[state.lang].sections.services;
  const services = getServices();
  const filtered = services.filter((service) => {
    return state.filter === "all" || service.categoryKey === state.filter;
  });

  const categoryButtons = [
    `<button class="filter-btn ${state.filter === "all" ? "active" : ""}" type="button" data-filter="all">${s.all}</button>`,
    ...Object.keys(categories).map((key) => `<button class="filter-btn ${state.filter === key ? "active" : ""}" type="button" data-filter="${key}">${categories[key][state.lang]}</button>`)
  ].join("");

  document.getElementById("services").innerHTML = sectionShell("services", `
    <div class="service-tools">
      <div class="filter-row">${categoryButtons}</div>
    </div>
    <div class="cards-grid" id="serviceGrid">
      ${filtered.length ? filtered.map((service, i) => serviceCard(service, i)).join("") : `<div class="no-results ${textDirClass()}">${s.empty}</div>`}
    </div>
  `);
}

function serviceCard(service, index) {
  const s = content[state.lang].sections.services;
  return `
    <article class="strategy-card service-card" data-service="${service.id}">
      <div class="service-card-visual image-loaded" style="--service-image: url('${escapeHtml(service.image)}')"><span>${escapeHtml(service.imageLabel)}</span></div>
      <div class="card-title ${textDirClass()}">${escapeHtml(service.title)}</div>
      <div class="card-desc ${textDirClass()}">${escapeHtml(service.tagline)}</div>
      <button class="card-cta" type="button" data-open-service="${service.id}">
        ${s.explore}<span class="card-cta-arrow"></span>
      </button>
    </article>
  `;
}

function renderInquiry() {
  const socialItems = socialLinks.map((item) => `
    <a class="social-link en" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
      ${socialIcons[item.icon]}
    </a>
  `).join("");
  const inquiry = content[state.lang].sections.inquiry;
  document.getElementById("inquiry").innerHTML = `
    <div class="private-assessment-panel">
      <span class="closing-label ${textDirClass()}">${escapeHtml(inquiry.label)}</span>
      <h2 class="${textDirClass()}">${escapeHtml(inquiry.title)}</h2>
      <p class="${textDirClass()}">${escapeHtml(inquiry.body)}</p>
    </div>
    <div class="contact-signature">
      <div class="contact-signature__inner">
        <div class="contact-brand en" aria-label="WOSOL Concierge">
          <span class="contact-brand__name">WOSOL</span>
          <span class="contact-brand__sub">CONCIERGE</span>
        </div>
        <div class="contact-divider" aria-hidden="true"></div>
        <div class="contact-lines">
          <a class="contact-line en" href="tel:+966500009979">
            <span class="contact-icon" aria-hidden="true">${contactIcon("phone")}</span>
            <span>+966 50 000 9979</span>
          </a>
          <a class="contact-line en" href="https://wosolconcierge.com" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">${contactIcon("globe")}</span>
            <span>wosolconcierge.com</span>
          </a>
          <a class="contact-line en" href="mailto:info@wosolconcierge.com">
            <span class="contact-icon" aria-hidden="true">${contactIcon("mail")}</span>
            <span>info@wosolconcierge.com</span>
          </a>
        </div>
      </div>
      <div class="social-links">${socialItems}</div>
    </div>
  `;
}

function contactIcon(type) {
  const icons = {
    phone: `<svg viewBox="0 0 24 24" fill="none"><path d="M6.6 3.8 9.2 3l2.1 4.7-1.6 1.1c.8 1.7 2.1 3 3.8 3.8l1.1-1.6 4.7 2.1-.8 2.6c-.3 1-1.2 1.6-2.2 1.5C10.5 16.8 6.2 12.5 5.1 6.7 4.9 5.7 5.6 4.1 6.6 3.8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.4"/><path d="M3.8 12h16.4M12 3.5c2.2 2.2 3.2 5 3.2 8.5s-1 6.3-3.2 8.5M12 3.5C9.8 5.7 8.8 8.5 8.8 12s1 6.3 3.2 8.5" stroke="currentColor" stroke-width="1.4"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4V7Z" stroke="currentColor" stroke-width="1.5"/><path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`
  };
  return icons[type] || "";
}

function contactItem(label, value) {
  return `
    <div class="contact-item">
      <span class="en">${escapeHtml(label)}</span>
      <strong class="en">${escapeHtml(value)}</strong>
      <button class="mini-btn" type="button" data-copy="${escapeHtml(value)}">${content[state.lang].nav.copy}</button>
    </div>
  `;
}

function renderServiceDetail(id) {
  const service = getServices().find((item) => item.id === id);
  if (!service) return;
  const labels = content[state.lang].serviceLabels;
  const listSummary = (items) => items.slice(0, 3).join(state.lang === "ar" ? "، " : ", ");
  const quickSummary = [
    [labels.forWhom, listSummary(service.forWhom)],
    [labels.bestFor, listSummary(service.whenItMatters)],
    [labels.outcome, service.outcome]
  ];
  document.getElementById("serviceDetailContent").innerHTML = `
    <div class="service-hero">
      <div>
        <span class="doc-label en">${escapeHtml(service.category)}</span>
        <h2 class="page-title ${textDirClass()}" id="serviceTitle">${escapeHtml(service.title)}</h2>
        <p class="service-tagline ${textDirClass()}">${escapeHtml(service.tagline)}</p>
        <p class="hero-desc ${textDirClass()}">${escapeHtml(service.description)}</p>
      </div>
      <div class="visual-frame service-image-frame" style="--service-image: url('${escapeHtml(service.image)}')" role="img" aria-label="${escapeHtml(service.imagePrompt)}">
        <div class="visual-caption"><span class="${textDirClass()}">${escapeHtml(service.category)}</span><strong class="${textDirClass()}">${escapeHtml(service.imageLabel)}</strong></div>
      </div>
    </div>
    <div class="service-quick-strip">
      ${quickSummary.map(([title, value]) => `
        <section class="service-quick-card">
          <h3 class="${textDirClass()}">${escapeHtml(title)}</h3>
          <p class="${textDirClass()}">${escapeHtml(value)}</p>
        </section>
      `).join("")}
    </div>
    <div class="service-focus-grid">
      ${detailList(labels.handles, service.wosolHandles, "service-chip-list")}
      ${detailList(labels.typicalRequests, service.sampleRequests, "service-chip-list subtle")}
    </div>
    <section class="service-difference">
      <span class="${textDirClass()}">${escapeHtml(labels.wosolDifference)}</span>
      <p class="${textDirClass()}">${escapeHtml(service.difference)}</p>
      <div class="service-actions">
        <a class="action-btn primary" href="mailto:info@wosolconcierge.com?subject=${encodeURIComponent(service.title + " Inquiry")}">${escapeHtml(service.cta)}</a>
        <button class="action-btn subtle" type="button" data-close-service>${labels.back}</button>
      </div>
    </section>
  `;
  const detail = document.getElementById("serviceDetail");
  detail.classList.add("open");
  detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  document.querySelector(".service-detail__panel").focus();
}

function detailBlock(title, value, full = false) {
  return `
    <section class="detail-block ${full ? "full" : ""}">
      <h3 class="en">${escapeHtml(title)}</h3>
      <p class="${textDirClass()}">${escapeHtml(value)}</p>
    </section>
  `;
}

function detailList(title, items, className = "") {
  return `
    <section class="detail-block">
      <h3 class="${textDirClass()}">${escapeHtml(title)}</h3>
      <ul class="detail-list ${className} ${textDirClass()}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function closeServiceDetail(updateHash = true) {
  const detail = document.getElementById("serviceDetail");
  detail.classList.remove("open");
  detail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");
  if (updateHash && location.hash.startsWith("#service/")) {
    history.pushState("", document.title, "#services");
  }
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("wosol-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-lang]").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  renderAll();
  const activeService = location.hash.startsWith("#service/") ? location.hash.replace("#service/", "") : null;
  if (activeService) renderServiceDetail(activeService);
}

function renderAll() {
  renderCover();
  renderSummary();
  renderBasicSections();
  renderServices();
  renderInquiry();
  bindDynamicEvents();
  initScrollReveals();
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.onclick = () => document.getElementById(btn.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelectorAll("[data-open-service]").forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.openService;
      history.pushState("", document.title, `#service/${id}`);
      renderServiceDetail(id);
    };
  });
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.onclick = () => {
      state.filter = btn.dataset.filter;
      renderServices();
      bindDynamicEvents();
    };
  });
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.onclick = async () => {
      await copyText(btn.dataset.copy);
      const original = content[state.lang].nav.copy;
      btn.textContent = content[state.lang].nav.copied;
      setTimeout(() => { btn.textContent = original; }, 1200);
    };
  });
  document.querySelectorAll("[data-close-service]").forEach((btn) => {
    btn.onclick = () => closeServiceDetail(true);
  });
  bindPartnerGallery();
}

function initScrollReveals() {
  const nodes = document.querySelectorAll(".exec-summary, .section, .strategy-card, .process-step, .partner-gallery-card, .private-assessment-panel, .contact-signature");
  nodes.forEach((node, index) => {
    node.classList.add("reveal-on-scroll");
    node.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 20}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px 8% 0px" });

  nodes.forEach((node) => observer.observe(node));
}

function bindPartnerGallery() {
  document.querySelectorAll("[data-partner-gallery]").forEach((gallery) => {
    const track = gallery.querySelector("[data-gallery-track]");
    const cards = [...gallery.querySelectorAll("[data-partner-slide]")];
    const dots = [...gallery.querySelectorAll("[data-gallery-dot]")];
    if (!track || !cards.length) return;

    const setActive = (index) => {
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
    };
    const scrollToIndex = (index) => {
      const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
      target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActive(cards.indexOf(target));
    };
    const currentIndex = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      return cards.reduce((closest, card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Infinity }).index;
    };

    gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
    gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => scrollToIndex(currentIndex() + 1));
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => scrollToIndex(index));
    });
    track.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => setActive(currentIndex()));
    }, { passive: true });
  });
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("progressBar").style.width = `${Math.min(100, Math.max(0, progress))}%`;

  let active = "cover";
  document.querySelectorAll(".chapter").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.36) active = section.id;
  });
  document.querySelectorAll(".rail-dot").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.jump === active);
  });
}

function initIntroLoader() {
  const loader = document.getElementById("introLoader");
  if (!loader) return;
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const readyDelay = reducedMotion ? 320 : 1450;
  window.setTimeout(() => loader.classList.add("is-ready"), readyDelay);

  const closeIntro = (lang) => {
    loader.querySelectorAll("[data-intro-lang]").forEach((btn) => {
      btn.disabled = true;
    });
    setLanguage(lang);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    loader.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
    window.setTimeout(() => {
      loader.remove();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      updateProgress();
    }, 780);
  };

  loader.querySelectorAll("[data-intro-lang]").forEach((btn) => {
    btn.addEventListener("click", () => closeIntro(btn.dataset.introLang));
  });
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function handleHash() {
  if (location.hash.startsWith("#service/")) {
    renderServiceDetail(location.hash.replace("#service/", ""));
  } else {
    closeServiceDetail(false);
    if (location.hash.length > 1) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("hashchange", handleHash);
window.addEventListener("popstate", handleHash);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeServiceDetail(true);
  if (event.key === "ArrowDown" && !document.body.classList.contains("detail-open")) window.scrollBy({ top: window.innerHeight * 0.82, behavior: "smooth" });
  if (event.key === "ArrowUp" && !document.body.classList.contains("detail-open")) window.scrollBy({ top: -window.innerHeight * 0.82, behavior: "smooth" });
});

setLanguage(state.lang);
updateProgress();
initIntroLoader();
