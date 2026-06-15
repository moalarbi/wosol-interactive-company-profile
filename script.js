const categories = {
  "lifestyle": {
    "en": "Lifestyle & Personal Care",
    "ar": "نمط الحياة والعناية الشخصية"
  },
  "travel": {
    "en": "Travel & Mobility",
    "ar": "السفر والتنقل"
  },
  "access": {
    "en": "Private Access",
    "ar": "الوصول الخاص"
  },
  "events": {
    "en": "Corporate & Private Events",
    "ar": "المناسبات والشركات"
  },
  "education": {
    "en": "Education & Development",
    "ar": "التعليم والتطوير"
  },
  "assets": {
    "en": "Spaces & Design",
    "ar": "المساحات والتصميم"
  }
};

const serviceBlueprints = [
  {
    "id": "lifestyle-concierge",
    "categoryKey": "lifestyle",
    "en": {
      "title": "Lifestyle Concierge",
      "tagline": "Everyday coordination shaped around your lifestyle and preferences.",
      "description": "Inspired by WOSOL’s lifestyle concierge service, this path helps organize daily needs, reservations, family requirements, and personal arrangements through one trusted point of contact.",
      "outcome": "Your day feels lighter because routine details are handled with discretion and continuity.",
      "forWhom": [
        "Private members",
        "Families",
        "Busy professionals",
        "Households needing trusted support"
      ],
      "whenItMatters": [
        "Daily coordination",
        "Private reservations",
        "Family requests",
        "Lifestyle arrangements"
      ],
      "wosolHandles": [
        "Request review",
        "Daily planning",
        "Partner coordination",
        "Reservations",
        "Follow-up and confirmation"
      ],
      "experienceStandard": "Quiet, responsive, and aligned with the member’s personal preferences.",
      "difference": "WOSOL manages lifestyle needs as an ongoing relationship, not as one-off errands.",
      "sampleRequests": [
        "Restaurant coordination",
        "Family arrangements",
        "Private appointments",
        "Home service support",
        "Weekend planning"
      ],
      "audienceRelevance": "For members who want fewer interruptions and a more organized daily rhythm.",
      "cta": "Request Lifestyle Concierge",
      "imageLabel": "Private lifestyle coordination"
    },
    "ar": {
      "title": "نمط وأسلوب الحياة",
      "tagline": "تنسيق يومي مصمم حول أسلوب حياتك وتفضيلاتك.",
      "description": "مستوحاة من خدمة نمط الحياة في وصول، يختص هذا المسار بتنظيم الاحتياجات اليومية، الحجوزات، المتطلبات العائلية، والترتيبات الشخصية من خلال نقطة اتصال موثوقة.",
      "outcome": "يصبح يومك أخف عندما تُدار التفاصيل المعتادة بسرية واستمرارية.",
      "forWhom": [
        "الأعضاء الخاصون",
        "العائلات",
        "أصحاب الجداول المزدحمة",
        "المنازل التي تحتاج دعماً موثوقاً"
      ],
      "whenItMatters": [
        "التنسيق اليومي",
        "الحجوزات الخاصة",
        "المتطلبات العائلية",
        "ترتيبات نمط الحياة"
      ],
      "wosolHandles": [
        "مراجعة الطلب",
        "تخطيط اليوم",
        "تنسيق الشركاء",
        "إدارة الحجوزات",
        "المتابعة والتأكيد"
      ],
      "experienceStandard": "خدمة هادئة وسريعة الاستجابة ومتصلة بتفضيلات العضو.",
      "difference": "تتعامل وصول مع نمط الحياة كعلاقة مستمرة، لا كمهام منفصلة.",
      "sampleRequests": [
        "تنسيق مطعم",
        "ترتيبات عائلية",
        "مواعيد خاصة",
        "دعم منزلي",
        "تخطيط نهاية أسبوع"
      ],
      "audienceRelevance": "لمن يريد تقليل الانشغال ورفع جودة تنظيم اليوم.",
      "cta": "اطلب كونسيرج نمط الحياة",
      "imageLabel": "تنسيق نمط حياة خاص"
    }
  },
  {
    "id": "luxury-accommodation",
    "categoryKey": "travel",
    "en": {
      "title": "Luxury Accommodations",
      "tagline": "Villas, chalets, penthouses, and stays selected for privacy and comfort.",
      "description": "WOSOL coordinates premium accommodation options worldwide, from villas and chalets to penthouses and private stays, with supporting services such as chefs, household staff, and security where suitable.",
      "outcome": "The stay feels prepared around your family, privacy, and rhythm rather than treated as a simple booking.",
      "forWhom": [
        "Families",
        "Long-stay travelers",
        "Private groups",
        "Members seeking secured stays"
      ],
      "whenItMatters": [
        "Seasonal stays",
        "Family holidays",
        "Private residences",
        "Extended travel"
      ],
      "wosolHandles": [
        "Requirement mapping",
        "Property selection",
        "Stay services",
        "Arrival preparation",
        "On-stay follow-up"
      ],
      "experienceStandard": "Selected for privacy, suitability, service quality, and the nature of the stay.",
      "difference": "We assess accommodation as a complete living environment, not only as a beautiful property.",
      "sampleRequests": [
        "Private villa",
        "Family chalet",
        "Penthouses",
        "Staffed residence",
        "Arrival setup"
      ],
      "audienceRelevance": "For members who need the privacy of a residence with the reliability of hospitality.",
      "cta": "Review a Private Stay",
      "imageLabel": "Selected private accommodation"
    },
    "ar": {
      "title": "الإقامة الفاخرة",
      "tagline": "فلل وشاليهات وبنتهاوس وإقامات مختارة للخصوصية والراحة.",
      "description": "تنسق وصول خيارات إقامة فاخرة حول العالم، من الفلل والشاليهات إلى البنتهاوس والإقامات الخاصة، مع خدمات مساندة مثل الطهاة والدعم المنزلي والأمن متى ما لزم الأمر.",
      "outcome": "تبدو الإقامة مهيأة حول العائلة والخصوصية وإيقاع الرحلة، لا كحجز عابر.",
      "forWhom": [
        "العائلات",
        "الإقامات الطويلة",
        "المجموعات الخاصة",
        "من يحتاجون إقامة آمنة"
      ],
      "whenItMatters": [
        "الإقامات الموسمية",
        "العطلات العائلية",
        "المساكن الخاصة",
        "السفر الطويل"
      ],
      "wosolHandles": [
        "تحديد المتطلبات",
        "اختيار العقار",
        "تنسيق خدمات الإقامة",
        "تجهيز الوصول",
        "متابعة الإقامة"
      ],
      "experienceStandard": "اختيار مبني على الخصوصية والملاءمة وجودة الخدمة وطبيعة الإقامة.",
      "difference": "نقيّم الإقامة كبيئة معيشة كاملة، لا كعقار جميل فقط.",
      "sampleRequests": [
        "فيلا خاصة",
        "شاليه عائلي",
        "بنتهاوس",
        "إقامة مدعومة بخدمات",
        "تجهيز قبل الوصول"
      ],
      "audienceRelevance": "لمن يحتاج خصوصية السكن مع موثوقية الضيافة.",
      "cta": "راجع إقامة خاصة",
      "imageLabel": "إقامة خاصة منتقاة"
    }
  },
  {
    "id": "yacht-charters",
    "categoryKey": "access",
    "en": {
      "title": "Yacht Charters",
      "tagline": "Private yacht experiences curated around guests, routes, and occasion.",
      "description": "WOSOL arranges yacht charters selected with care, from calm coastal journeys to private celebrations and multi-day sea itineraries, with attention to onboard preferences and guest comfort.",
      "outcome": "Time at sea becomes private, composed, and aligned with the occasion.",
      "forWhom": [
        "Families",
        "Private groups",
        "Hosts",
        "Traveling guests"
      ],
      "whenItMatters": [
        "Coastal trips",
        "Private celebrations",
        "Marine hosting",
        "Multi-day charters"
      ],
      "wosolHandles": [
        "Yacht selection",
        "Route planning",
        "Guest preferences",
        "Crew coordination",
        "Transfer planning"
      ],
      "experienceStandard": "Private, safety-conscious, and tuned to the tone of the guests and occasion.",
      "difference": "The yacht is only one part; WOSOL coordinates the route, guests, timing, and atmosphere.",
      "sampleRequests": [
        "Sunset charter",
        "Family yacht day",
        "Private celebration",
        "Coastal itinerary",
        "Guest hosting"
      ],
      "audienceRelevance": "For members who want a private marine setting without managing operational details.",
      "cta": "Arrange a Yacht Charter",
      "imageLabel": "Private yacht experience"
    },
    "ar": {
      "title": "اليخوت الفاخرة",
      "tagline": "تجارب يخوت خاصة تُنسق حول الضيوف والمسار والمناسبة.",
      "description": "ترتب وصول تجارب اليخوت المختارة بعناية، من الرحلات الساحلية الهادئة إلى المناسبات الخاصة والبرامج البحرية متعددة الأيام، مع الاهتمام بتفضيلات الرحلة وراحة الضيوف.",
      "outcome": "يتحول الوقت في البحر إلى تجربة خاصة ومرتبة ومتوافقة مع المناسبة.",
      "forWhom": [
        "العائلات",
        "المجموعات الخاصة",
        "المضيفون",
        "الضيوف المسافرون"
      ],
      "whenItMatters": [
        "رحلات ساحلية",
        "احتفالات خاصة",
        "استضافة بحرية",
        "برامج متعددة الأيام"
      ],
      "wosolHandles": [
        "اختيار اليخت",
        "تخطيط المسار",
        "تفضيلات الضيوف",
        "تنسيق الطاقم",
        "ترتيب التنقلات"
      ],
      "experienceStandard": "خصوصية ووعي بالسلامة وتجربة مضبوطة على نبرة الضيوف والمناسبة.",
      "difference": "اليخت جزء واحد فقط؛ وصول تنسق المسار والضيوف والتوقيت والأجواء.",
      "sampleRequests": [
        "رحلة وقت الغروب",
        "يوم عائلي على اليخت",
        "مناسبة خاصة",
        "برنامج ساحلي",
        "استضافة ضيوف"
      ],
      "audienceRelevance": "لمن يريد بيئة بحرية خاصة دون إدارة تفاصيل التشغيل.",
      "cta": "رتب تجربة يخت",
      "imageLabel": "تجربة يخت خاصة"
    }
  },
  {
    "id": "private-aviation",
    "categoryKey": "travel",
    "en": {
      "title": "Private Aviation",
      "tagline": "Private air travel coordinated with precision, comfort, and arrival support.",
      "description": "WOSOL coordinates private aviation requirements across aircraft options, routes, in-flight preferences, airport support, and related ground arrangements where needed.",
      "outcome": "Time-sensitive movement becomes more private, flexible, and connected from departure to arrival.",
      "forWhom": [
        "Executives",
        "Families",
        "Private travelers",
        "VIP guests"
      ],
      "whenItMatters": [
        "Urgent trips",
        "Multi-city travel",
        "Confidential movement",
        "Special assistance needs"
      ],
      "wosolHandles": [
        "Aircraft options",
        "Route coordination",
        "In-flight preferences",
        "Airport assistance",
        "Ground transfer alignment"
      ],
      "experienceStandard": "Precise, discreet, and designed around the traveler’s timing and comfort.",
      "difference": "The flight is treated as part of a complete arrival journey, not as an isolated charter.",
      "sampleRequests": [
        "Private flight review",
        "Executive routing",
        "Special assistance",
        "In-flight preferences",
        "Arrival handling"
      ],
      "audienceRelevance": "For members whose time, privacy, and route control matter.",
      "cta": "Coordinate Private Aviation",
      "imageLabel": "Private aviation arrangement"
    },
    "ar": {
      "title": "الطيران الخاص",
      "tagline": "سفر جوي خاص يُنسق بدقة وراحة ودعم عند الوصول.",
      "description": "تنسق وصول متطلبات الطيران الخاص من خيارات الطائرات والمسارات إلى تفضيلات الرحلة، دعم المطارات، وترتيبات النقل الأرضي المرتبطة عند الحاجة.",
      "outcome": "تصبح الحركة الحساسة للوقت أكثر خصوصية ومرونة وترابطاً من المغادرة حتى الوصول.",
      "forWhom": [
        "التنفيذيون",
        "العائلات",
        "المسافرون الخاصون",
        "الضيوف رفيعو المستوى"
      ],
      "whenItMatters": [
        "رحلات عاجلة",
        "سفر متعدد المدن",
        "تنقلات سرية",
        "احتياجات مساعدة خاصة"
      ],
      "wosolHandles": [
        "خيارات الطائرة",
        "تنسيق المسار",
        "تفضيلات الرحلة",
        "دعم المطار",
        "ربط النقل الأرضي"
      ],
      "experienceStandard": "دقة وسرية وتجربة مصممة حول توقيت المسافر وراحته.",
      "difference": "نتعامل مع الرحلة الجوية كجزء من مسار وصول كامل، لا كرحلة منفصلة.",
      "sampleRequests": [
        "مراجعة رحلة خاصة",
        "مسار تنفيذي",
        "مساعدة خاصة",
        "تفضيلات الرحلة",
        "دعم الوصول"
      ],
      "audienceRelevance": "لمن تمثل له الخصوصية والوقت والتحكم بالمسار عناصر أساسية.",
      "cta": "نسق الطيران الخاص",
      "imageLabel": "ترتيب طيران خاص"
    }
  },
  {
    "id": "travel-management",
    "categoryKey": "travel",
    "en": {
      "title": "Travel Management",
      "tagline": "Travel details managed from accommodation and transfers to daily itinerary.",
      "description": "WOSOL manages travel planning and consultation across accommodation, transport, daily schedules, dining, destination experiences, visas, reception, and airport facilitation.",
      "outcome": "The journey becomes easier to follow, easier to adjust, and more aligned with your preferences.",
      "forWhom": [
        "Private travelers",
        "Families",
        "Couples",
        "Guests requiring full trip support"
      ],
      "whenItMatters": [
        "Complex itineraries",
        "Family travel",
        "Visas and arrival needs",
        "Destination planning"
      ],
      "wosolHandles": [
        "Itinerary planning",
        "Accommodation coordination",
        "Transport",
        "Dining and activities",
        "Airport and arrival support"
      ],
      "experienceStandard": "Clear, responsive, and built around comfort, timing, privacy, and preference.",
      "difference": "Travel is managed as one connected experience rather than scattered bookings.",
      "sampleRequests": [
        "Full itinerary",
        "Airport reception",
        "Restaurant coordination",
        "Tour planning",
        "Travel adjustment"
      ],
      "audienceRelevance": "For members who want the trip to feel managed without being overexplained.",
      "cta": "Plan Travel Management",
      "imageLabel": "Coordinated travel management"
    },
    "ar": {
      "title": "إدارة خدمات السفر",
      "tagline": "تفاصيل السفر تُدار من الإقامة والتنقلات إلى الجدول اليومي.",
      "description": "تدير وصول التخطيط والاستشارة في السفر، من الإقامة والتنقلات إلى الجداول اليومية والمطاعم والتجارب والتأشيرات والاستقبال وتسهيل إجراءات المطارات.",
      "outcome": "تصبح الرحلة أوضح في المتابعة، أسهل في التعديل، وأكثر توافقاً مع تفضيلاتك.",
      "forWhom": [
        "المسافرون الخاصون",
        "العائلات",
        "الأزواج",
        "الضيوف الذين يحتاجون دعماً كاملاً للرحلة"
      ],
      "whenItMatters": [
        "برامج سفر معقدة",
        "سفر عائلي",
        "تأشيرات ووصول",
        "تخطيط وجهة"
      ],
      "wosolHandles": [
        "تخطيط البرنامج",
        "تنسيق الإقامة",
        "التنقلات",
        "المطاعم والأنشطة",
        "دعم المطار والوصول"
      ],
      "experienceStandard": "وضوح واستجابة وتجربة مبنية حول الراحة والتوقيت والخصوصية والتفضيلات.",
      "difference": "تدير وصول السفر كتجربة واحدة مترابطة، لا كحجوزات متفرقة.",
      "sampleRequests": [
        "برنامج كامل",
        "استقبال مطار",
        "تنسيق مطاعم",
        "جولات خاصة",
        "تعديل رحلة"
      ],
      "audienceRelevance": "لمن يريد رحلة مُدارة دون شرح زائد أو متابعة مرهقة.",
      "cta": "راجع إدارة السفر",
      "imageLabel": "إدارة سفر منسقة"
    }
  },
  {
    "id": "health-wellness-resorts",
    "categoryKey": "lifestyle",
    "en": {
      "title": "Health & Wellness",
      "tagline": "Wellness, spa, beauty, and recovery programs selected around your needs.",
      "description": "WOSOL coordinates personal wellness services, from spas and health resorts to nutrition consultations, fitness programs, medical clinics, and aesthetic care where appropriate.",
      "outcome": "Wellness becomes a considered reset arranged with privacy and care.",
      "forWhom": [
        "Executives",
        "Families",
        "Couples",
        "Members seeking recovery or balance"
      ],
      "whenItMatters": [
        "Restorative travel",
        "Spa and resort stays",
        "Health consultations",
        "Fitness programs"
      ],
      "wosolHandles": [
        "Goal review",
        "Program selection",
        "Resort coordination",
        "Appointments",
        "Privacy logistics"
      ],
      "experienceStandard": "Calm, respectful, confidential, and aligned with personal comfort boundaries.",
      "difference": "We prioritize suitability and privacy over generic wellness packages.",
      "sampleRequests": [
        "Wellness retreat",
        "Spa booking",
        "Nutrition consultation",
        "Fitness program",
        "Aesthetic clinic coordination"
      ],
      "audienceRelevance": "For members who need renewal without exposure or unnecessary friction.",
      "cta": "Review Wellness Support",
      "imageLabel": "Private wellness arrangement"
    },
    "ar": {
      "title": "الصحة والاستجمام",
      "tagline": "برامج عافية وسبا وجمال واستشفاء تُختار حول احتياجك.",
      "description": "تنسق وصول خدمات العافية الشخصية، من السبا والمنتجعات الصحية إلى استشارات التغذية وبرامج التمرين والعيادات الطبية والتجميلية عند الحاجة.",
      "outcome": "تصبح العافية مساحة استعادة مدروسة تُرتب بخصوصية وعناية.",
      "forWhom": [
        "التنفيذيون",
        "العائلات",
        "الأزواج",
        "من يبحثون عن الاستعادة والتوازن"
      ],
      "whenItMatters": [
        "رحلات استشفاء",
        "إقامات سبا ومنتجعات",
        "استشارات صحية",
        "برامج تمرين"
      ],
      "wosolHandles": [
        "مراجعة الهدف",
        "اختيار البرنامج",
        "تنسيق المنتجع",
        "ترتيب المواعيد",
        "إدارة الخصوصية"
      ],
      "experienceStandard": "هدوء واحترام وسرية وتجربة متوافقة مع حدود الراحة الشخصية.",
      "difference": "نقدّم الملاءمة والخصوصية على البرامج العامة الجاهزة.",
      "sampleRequests": [
        "منتجع عافية",
        "حجز سبا",
        "استشارة تغذية",
        "برنامج تمرين",
        "تنسيق عيادة تجميلية"
      ],
      "audienceRelevance": "لمن يحتاج استعادة هادئة دون تعقيد أو تعرض غير ضروري.",
      "cta": "راجع دعم العافية",
      "imageLabel": "ترتيب عافية خاص"
    }
  },
  {
    "id": "event-planning",
    "categoryKey": "events",
    "en": {
      "title": "Event Planning",
      "tagline": "Private celebrations and gatherings coordinated with quiet precision.",
      "description": "WOSOL plans and coordinates private events, from intimate occasions to larger celebrations, aligning venues, partners, guest movement, and the overall tone of the occasion.",
      "outcome": "You remain present with your guests while the operational details are handled.",
      "forWhom": [
        "Private hosts",
        "Families",
        "Companies",
        "VIP guests"
      ],
      "whenItMatters": [
        "Private dinners",
        "Family occasions",
        "Corporate hosting",
        "Celebrations"
      ],
      "wosolHandles": [
        "Concept planning",
        "Venue coordination",
        "Partner management",
        "Guest flow",
        "Day-of follow-up"
      ],
      "experienceStandard": "Organized, discreet, and reflective of the host’s style.",
      "difference": "We manage the atmosphere and the hidden details so the host does not have to.",
      "sampleRequests": [
        "Private dinner",
        "Family celebration",
        "Corporate reception",
        "Outdoor event",
        "Guest coordination"
      ],
      "audienceRelevance": "For hosts who want a composed event without visible effort.",
      "cta": "Plan a Private Event",
      "imageLabel": "Private event coordination"
    },
    "ar": {
      "title": "الفعاليات الخاصة",
      "tagline": "مناسبات واجتماعات خاصة تُنسق بهدوء ودقة.",
      "description": "تخطط وصول وتنسق الفعاليات الخاصة، من المناسبات الحميمة إلى الاحتفالات الأكبر، مع مواءمة المواقع والشركاء وحركة الضيوف ونبرة المناسبة.",
      "outcome": "تبقى حاضراً مع ضيوفك بينما تُدار التفاصيل التشغيلية.",
      "forWhom": [
        "المضيفون الخاصون",
        "العائلات",
        "الشركات",
        "الضيوف رفيعو المستوى"
      ],
      "whenItMatters": [
        "عشاء خاص",
        "مناسبة عائلية",
        "استضافة مؤسسية",
        "احتفال"
      ],
      "wosolHandles": [
        "تخطيط الفكرة",
        "تنسيق الموقع",
        "إدارة الشركاء",
        "حركة الضيوف",
        "متابعة يوم المناسبة"
      ],
      "experienceStandard": "تنظيم وسرية وتجربة تعكس أسلوب المضيف.",
      "difference": "ندير الأجواء والتفاصيل الخفية حتى لا ينشغل بها المضيف.",
      "sampleRequests": [
        "عشاء خاص",
        "احتفال عائلي",
        "استقبال شركة",
        "مناسبة خارجية",
        "تنسيق ضيوف"
      ],
      "audienceRelevance": "لمن يريد مناسبة متماسكة دون جهد ظاهر.",
      "cta": "خطط مناسبة خاصة",
      "imageLabel": "تنسيق فعالية خاصة"
    }
  },
  {
    "id": "shopping-gifting",
    "categoryKey": "lifestyle",
    "en": {
      "title": "Shopping & Gifting",
      "tagline": "Thoughtful selections for style, rare pieces, and meaningful gifting.",
      "description": "WOSOL supports personal shopping and gifting by understanding style, occasion, and recipient context, then sourcing suitable pieces and arranging presentation or delivery.",
      "outcome": "A gift or selection arrives with relevance, taste, and timing.",
      "forWhom": [
        "Private members",
        "Families",
        "Executives",
        "Hosts"
      ],
      "whenItMatters": [
        "Important gifts",
        "Personal styling",
        "Rare pieces",
        "Occasion-based gifting"
      ],
      "wosolHandles": [
        "Preference review",
        "Sourcing",
        "Selection",
        "Presentation",
        "Delivery coordination"
      ],
      "experienceStandard": "Tasteful, discreet, and aligned with the member’s style and relationship context.",
      "difference": "The value is in meaning and fit, not in display.",
      "sampleRequests": [
        "Special gift",
        "Personal shopping",
        "Rare item search",
        "Gift wrapping",
        "Delivery coordination"
      ],
      "audienceRelevance": "For members who want choices that feel personal and appropriate.",
      "cta": "Coordinate Shopping & Gifting",
      "imageLabel": "Curated shopping and gifting"
    },
    "ar": {
      "title": "التسوق وتنسيق الهدايا",
      "tagline": "اختيارات مدروسة للأناقة والقطع النادرة والإهداء المناسب.",
      "description": "تدعم وصول التسوق الشخصي وتنسيق الهدايا من خلال فهم الذوق والمناسبة وسياق العلاقة، ثم البحث عن الخيارات الملائمة وترتيب تقديمها أو تسليمها.",
      "outcome": "تصل الهدية أو القطعة بملاءمة وذوق وتوقيت مناسب.",
      "forWhom": [
        "الأعضاء الخاصون",
        "العائلات",
        "التنفيذيون",
        "المضيفون"
      ],
      "whenItMatters": [
        "هدايا مهمة",
        "تنسيق مظهر",
        "قطع نادرة",
        "إهداء مرتبط بمناسبة"
      ],
      "wosolHandles": [
        "مراجعة التفضيلات",
        "البحث",
        "الاختيار",
        "التقديم",
        "تنسيق التسليم"
      ],
      "experienceStandard": "ذوق وسرية وملاءمة لأسلوب العضو وسياق العلاقة.",
      "difference": "القيمة هنا في المعنى والملاءمة، لا في الاستعراض.",
      "sampleRequests": [
        "هدية خاصة",
        "تسوق شخصي",
        "بحث عن قطعة نادرة",
        "تغليف هدية",
        "تنسيق التسليم"
      ],
      "audienceRelevance": "لمن يريد اختيارات تبدو شخصية ومناسبة.",
      "cta": "نسق التسوق والإهداء",
      "imageLabel": "تسوق وإهداء منتقى"
    }
  },
  {
    "id": "transportation-services",
    "categoryKey": "travel",
    "en": {
      "title": "Transportation Services & Chauffeurs",
      "tagline": "Premium movement coordinated for members, guests, and private schedules.",
      "description": "WOSOL coordinates transportation needs, including self-drive options, chauffeured vehicles, drivers for private vehicles, and movement support across destinations where possible.",
      "outcome": "Movement becomes clear, calm, and aligned with the day’s schedule.",
      "forWhom": [
        "Executives",
        "Families",
        "VIP guests",
        "Event hosts"
      ],
      "whenItMatters": [
        "Airport transfers",
        "Daily chauffeurs",
        "Guest movement",
        "Multi-vehicle plans"
      ],
      "wosolHandles": [
        "Vehicle selection",
        "Driver coordination",
        "Route planning",
        "Timing follow-up",
        "Guest lists"
      ],
      "experienceStandard": "Punctual, discreet, and suitable for the nature of the member or guest.",
      "difference": "Transportation is handled as part of a wider movement plan, not only as a car request.",
      "sampleRequests": [
        "Chauffeured vehicle",
        "Self-drive option",
        "Driver for private car",
        "Airport transfer",
        "Guest fleet plan"
      ],
      "audienceRelevance": "For members who need dependable movement without repeated coordination.",
      "cta": "Arrange Transportation",
      "imageLabel": "Private transportation coordination"
    },
    "ar": {
      "title": "خدمة السيارات والسائقين",
      "tagline": "تنقلات فاخرة تُنسق للأعضاء والضيوف والجداول الخاصة.",
      "description": "تنسق وصول احتياجات التنقل، بما يشمل خيارات القيادة الذاتية، السيارات بسائقين، توفير سائقين للسيارات الخاصة، ودعم الحركة بين الوجهات متى ما كان ذلك ممكناً.",
      "outcome": "تصبح الحركة أوضح وأكثر هدوءاً ومتوافقة مع جدول اليوم.",
      "forWhom": [
        "التنفيذيون",
        "العائلات",
        "الضيوف رفيعو المستوى",
        "مضيفو المناسبات"
      ],
      "whenItMatters": [
        "نقل المطار",
        "سائق يومي",
        "حركة الضيوف",
        "خطط متعددة المركبات"
      ],
      "wosolHandles": [
        "اختيار المركبة",
        "تنسيق السائق",
        "تخطيط المسار",
        "متابعة التوقيت",
        "قوائم الضيوف"
      ],
      "experienceStandard": "انضباط وسرية وملاءمة لطبيعة العضو أو الضيف.",
      "difference": "ننظر للتنقل كجزء من خطة حركة كاملة، لا كطلب سيارة فقط.",
      "sampleRequests": [
        "سيارة بسائق",
        "خيار قيادة ذاتية",
        "سائق لسيارة خاصة",
        "نقل مطار",
        "خطة مركبات للضيوف"
      ],
      "audienceRelevance": "لمن يحتاج حركة موثوقة دون تنسيق متكرر.",
      "cta": "رتب خدمة التنقل",
      "imageLabel": "تنسيق سيارات وسائقين"
    }
  },
  {
    "id": "education",
    "categoryKey": "education",
    "en": {
      "title": "Education",
      "tagline": "Educational pathways coordinated for personal and family growth.",
      "description": "WOSOL supports educational journeys by coordinating suitable programs, learning experiences, and family requirements with care and clarity.",
      "outcome": "Education-related needs become easier to explore, compare, and arrange.",
      "forWhom": [
        "Families",
        "Students",
        "Parents",
        "Members seeking development programs"
      ],
      "whenItMatters": [
        "School exploration",
        "Development programs",
        "Family education planning",
        "Special learning experiences"
      ],
      "wosolHandles": [
        "Requirement review",
        "Program search",
        "Scheduling",
        "Partner coordination",
        "Follow-up"
      ],
      "experienceStandard": "Thoughtful, structured, and tailored to the learner and family context.",
      "difference": "We help turn broad educational goals into practical next steps.",
      "sampleRequests": [
        "Program search",
        "Tutor coordination",
        "Learning trip",
        "School inquiry",
        "Development course"
      ],
      "audienceRelevance": "For families and members who want education support handled with care.",
      "cta": "Review Education Support",
      "imageLabel": "Curated education support"
    },
    "ar": {
      "title": "تجارب التطوير",
      "tagline": "مسارات تعليمية تُنسق للنمو الشخصي والعائلي.",
      "description": "تدعم وصول الرحلات التعليمية من خلال تنسيق البرامج المناسبة، التجارب التعليمية، ومتطلبات العائلة بعناية ووضوح.",
      "outcome": "تصبح الاحتياجات التعليمية أسهل في الاستكشاف والمقارنة والترتيب.",
      "forWhom": [
        "العائلات",
        "الطلاب",
        "الأهالي",
        "الأعضاء الباحثون عن برامج تطوير"
      ],
      "whenItMatters": [
        "استكشاف المدارس",
        "برامج التطوير",
        "تخطيط التعليم العائلي",
        "تجارب تعلم خاصة"
      ],
      "wosolHandles": [
        "مراجعة المتطلبات",
        "البحث عن البرامج",
        "تنسيق المواعيد",
        "تنسيق الشركاء",
        "المتابعة"
      ],
      "experienceStandard": "خدمة مدروسة ومنظمة ومصممة حول المتعلم وسياق العائلة.",
      "difference": "نحوّل الأهداف التعليمية العامة إلى خطوات عملية قابلة للترتيب.",
      "sampleRequests": [
        "بحث عن برنامج",
        "تنسيق معلم خاص",
        "رحلة تعليمية",
        "استفسار مدرسة",
        "دورة تطوير"
      ],
      "audienceRelevance": "للعائلات والأعضاء الذين يريدون دعماً تعليمياً يُدار بعناية.",
      "cta": "راجع دعم التعليم",
      "imageLabel": "دعم تعليمي منتقى"
    }
  },
  {
    "id": "corporate-concierge-services",
    "categoryKey": "events",
    "en": {
      "title": "Corporate Concierge Services",
      "tagline": "Executive and organizational support for meetings, guests, logistics, and MICE.",
      "description": "WOSOL supports executives, boards, organizations, and families with corporate concierge services covering meetings, incentives, conferences, exhibitions, guest care, and logistics.",
      "outcome": "Corporate hosting and executive movement feel organized, discreet, and consistent with the organization’s standards.",
      "forWhom": [
        "Executives",
        "Boards",
        "Organizations",
        "Corporate guests"
      ],
      "whenItMatters": [
        "Board meetings",
        "MICE programs",
        "Executive hosting",
        "Guest logistics"
      ],
      "wosolHandles": [
        "Meeting support",
        "Travel and transport",
        "Dining and venues",
        "Guest itineraries",
        "On-ground coordination"
      ],
      "experienceStandard": "Polished, discreet, and aligned with protocol and executive expectations.",
      "difference": "The organization receives one coordination layer across guests, schedules, and logistics.",
      "sampleRequests": [
        "Guest program",
        "Board dinner",
        "Conference support",
        "Executive arrival",
        "Partner hosting"
      ],
      "audienceRelevance": "For organizations that need a private concierge layer around important people and moments.",
      "cta": "Request Corporate Concierge",
      "imageLabel": "Corporate concierge support"
    },
    "ar": {
      "title": "خدمة الكونسيرج للشركات",
      "tagline": "دعم تنفيذي ومؤسسي للاجتماعات والضيوف واللوجستيات وبرامج الأعمال.",
      "description": "تدعم وصول التنفيذيين ومجالس الإدارة والمنظمات وعائلاتهم عبر خدمات كونسيرج للشركات تشمل الاجتماعات والحوافز والمؤتمرات والمعارض ورعاية الضيوف واللوجستيات.",
      "outcome": "تبدو ضيافة الشركات وحركة التنفيذيين منظمة وسرية ومتسقة مع معايير الجهة.",
      "forWhom": [
        "التنفيذيون",
        "مجالس الإدارة",
        "المنظمات",
        "ضيوف الشركات"
      ],
      "whenItMatters": [
        "اجتماعات مجلس",
        "برامج أعمال",
        "استضافة تنفيذية",
        "لوجستيات ضيوف"
      ],
      "wosolHandles": [
        "دعم الاجتماعات",
        "السفر والتنقل",
        "المطاعم والمواقع",
        "برامج الضيوف",
        "التنسيق الميداني"
      ],
      "experienceStandard": "احترافية وسرية ومواءمة للبروتوكول وتوقعات التنفيذيين.",
      "difference": "تحصل الجهة على طبقة تنسيق واحدة للضيوف والجداول واللوجستيات.",
      "sampleRequests": [
        "برنامج ضيف",
        "عشاء مجلس",
        "دعم مؤتمر",
        "وصول تنفيذي",
        "استضافة شريك"
      ],
      "audienceRelevance": "للجهات التي تحتاج طبقة كونسيرج خاصة حول الأشخاص واللحظات المهمة.",
      "cta": "اطلب كونسيرج الشركات",
      "imageLabel": "دعم كونسيرج للشركات"
    }
  },
  {
    "id": "personal-assistant",
    "categoryKey": "lifestyle",
    "en": {
      "title": "Personal Assistance",
      "tagline": "Dedicated support for calendars, errands, households, and daily follow-through.",
      "description": "WOSOL coordinates personal assistance needs ranging from calendar management and household errands to recurring follow-up, while anticipating preferences and maintaining continuity.",
      "outcome": "Personal details move through one trusted support layer.",
      "forWhom": [
        "Executives",
        "Families",
        "Private members",
        "Busy households"
      ],
      "whenItMatters": [
        "Calendar pressure",
        "Household errands",
        "Recurring needs",
        "Personal follow-up"
      ],
      "wosolHandles": [
        "Task intake",
        "Calendar-sensitive planning",
        "Errand coordination",
        "Household support",
        "Follow-through"
      ],
      "experienceStandard": "Reliable, discreet, and increasingly precise as preferences become known.",
      "difference": "The assistant layer protects your time while keeping details organized.",
      "sampleRequests": [
        "Appointment coordination",
        "Household errand",
        "Reminder follow-up",
        "Personal booking",
        "Daily support"
      ],
      "audienceRelevance": "For members who need trusted support without explaining every detail repeatedly.",
      "cta": "Request Personal Assistance",
      "imageLabel": "Personal assistance support"
    },
    "ar": {
      "title": "المساعد الشخصي",
      "tagline": "دعم مخصص للجداول والمهام المنزلية والمتابعة اليومية.",
      "description": "تنسق وصول احتياجات المساعدة الشخصية، من إدارة الجداول والمهام المنزلية إلى المتابعة المتكررة، مع توقع التفضيلات والحفاظ على الاستمرارية.",
      "outcome": "تتحرك التفاصيل الشخصية عبر طبقة دعم واحدة وموثوقة.",
      "forWhom": [
        "التنفيذيون",
        "العائلات",
        "الأعضاء الخاصون",
        "المنازل ذات الجداول المزدحمة"
      ],
      "whenItMatters": [
        "ضغط الجداول",
        "مهام منزلية",
        "احتياجات متكررة",
        "متابعة شخصية"
      ],
      "wosolHandles": [
        "استقبال المهام",
        "تخطيط مرتبط بالوقت",
        "تنسيق المشاوير",
        "دعم المنزل",
        "المتابعة حتى الإنجاز"
      ],
      "experienceStandard": "موثوق وسري ويزداد دقة كلما أصبحت التفضيلات أوضح.",
      "difference": "طبقة المساعدة تحمي وقتك وتحافظ على ترتيب التفاصيل.",
      "sampleRequests": [
        "تنسيق موعد",
        "مهمة منزلية",
        "متابعة تذكير",
        "حجز شخصي",
        "دعم يومي"
      ],
      "audienceRelevance": "لمن يحتاج دعماً موثوقاً دون إعادة شرح كل تفصيل.",
      "cta": "اطلب مساعدة شخصية",
      "imageLabel": "دعم مساعد شخصي"
    }
  },
  {
    "id": "special-request",
    "categoryKey": "access",
    "en": {
      "title": "Special Request",
      "tagline": "Tailored support for unusual, sensitive, or hard-to-arrange requests.",
      "description": "WOSOL reviews special requests and unique needs, from difficult-to-secure access to private celebrations and one-of-a-kind experiences, then recommends the most suitable path.",
      "outcome": "A complex request becomes clearer, more structured, and easier to act on.",
      "forWhom": [
        "Private members",
        "Families",
        "Executives",
        "Hosts"
      ],
      "whenItMatters": [
        "Hard-to-secure access",
        "Sensitive timing",
        "Rare gifting",
        "Private celebrations"
      ],
      "wosolHandles": [
        "Request clarification",
        "Feasibility review",
        "Partner search",
        "Path recommendation",
        "Execution follow-up"
      ],
      "experienceStandard": "Clear, discreet, and realistic about what can be arranged.",
      "difference": "We do not promise everything; we review fit and then build the right route.",
      "sampleRequests": [
        "Rare tickets",
        "Private surprise",
        "Special access",
        "Unusual gift",
        "Unique experience"
      ],
      "audienceRelevance": "For members who need thoughtful handling of requests outside standard categories.",
      "cta": "Start a Special Request",
      "imageLabel": "Special request handling"
    },
    "ar": {
      "title": "الطلبات الخاصة",
      "tagline": "دعم مخصص للطلبات غير المعتادة أو الحساسة أو صعبة الترتيب.",
      "description": "تراجع وصول الطلبات الخاصة والاحتياجات الفريدة، من الوصول صعب الترتيب إلى الاحتفالات الخاصة والتجارب غير التقليدية، ثم تقترح المسار الأنسب.",
      "outcome": "يتحول الطلب المعقد إلى مسار أوضح وأكثر قابلية للتنفيذ.",
      "forWhom": [
        "الأعضاء الخاصون",
        "العائلات",
        "التنفيذيون",
        "المضيفون"
      ],
      "whenItMatters": [
        "وصول صعب",
        "توقيت حساس",
        "إهداء نادر",
        "احتفال خاص"
      ],
      "wosolHandles": [
        "توضيح الطلب",
        "مراجعة الإمكانية",
        "البحث عن الشركاء",
        "اقتراح المسار",
        "متابعة التنفيذ"
      ],
      "experienceStandard": "وضوح وسرية وواقعية في ما يمكن ترتيبه.",
      "difference": "لا نعد بكل شيء؛ نراجع الملاءمة ثم نبني المسار الصحيح.",
      "sampleRequests": [
        "تذاكر نادرة",
        "مفاجأة خاصة",
        "وصول خاص",
        "هدية غير معتادة",
        "تجربة فريدة"
      ],
      "audienceRelevance": "لمن يحتاج تعاملاً مدروساً مع طلبات خارج التصنيفات المعتادة.",
      "cta": "ابدأ طلباً خاصاً",
      "imageLabel": "إدارة طلب خاص"
    }
  },
  {
    "id": "designers",
    "categoryKey": "assets",
    "en": {
      "title": "Designers",
      "tagline": "Interior and design support for refined living and work spaces.",
      "description": "As part of WOSOL’s concierge solutions, design services support the creation of beautiful and functional private or professional spaces through suitable design coordination.",
      "outcome": "Your space moves from idea to direction with clearer options and trusted coordination.",
      "forWhom": [
        "Homeowners",
        "Private offices",
        "Families",
        "Members developing spaces"
      ],
      "whenItMatters": [
        "New residence",
        "Office refinement",
        "Interior updates",
        "Design sourcing"
      ],
      "wosolHandles": [
        "Design brief",
        "Designer coordination",
        "Space requirements",
        "Supplier alignment",
        "Follow-up"
      ],
      "experienceStandard": "Tasteful, practical, and respectful of how the space will actually be used.",
      "difference": "Design support is connected to lifestyle, comfort, and daily function, not only aesthetics.",
      "sampleRequests": [
        "Interior designer referral",
        "Home update",
        "Office styling",
        "Furniture sourcing",
        "Design consultation"
      ],
      "audienceRelevance": "For members who want spaces that reflect taste and function without managing every supplier.",
      "cta": "Review Design Support",
      "imageLabel": "Private design coordination"
    },
    "ar": {
      "title": "المصممين",
      "tagline": "دعم تصميم داخلي ومساحات معيشة وعمل أكثر اتزاناً.",
      "description": "كجزء من حلول كونسيرج وصول، تدعم خدمات التصميم تنسيق المساحات الخاصة أو العملية الجميلة والعملية من خلال ربطك بخيارات تصميم مناسبة.",
      "outcome": "تتحول المساحة من فكرة إلى اتجاه واضح بخيارات أفضل وتنسيق موثوق.",
      "forWhom": [
        "ملاك المنازل",
        "المكاتب الخاصة",
        "العائلات",
        "الأعضاء الذين يطورون مساحات"
      ],
      "whenItMatters": [
        "منزل جديد",
        "تحسين مكتب",
        "تحديث داخلي",
        "بحث عن قطع تصميم"
      ],
      "wosolHandles": [
        "موجز التصميم",
        "تنسيق المصممين",
        "متطلبات المساحة",
        "مواءمة الموردين",
        "المتابعة"
      ],
      "experienceStandard": "ذوق وواقعية واحترام لطريقة استخدام المساحة فعلياً.",
      "difference": "دعم التصميم لدينا مرتبط بأسلوب الحياة والراحة والاستخدام اليومي، لا بالمظهر فقط.",
      "sampleRequests": [
        "ترشيح مصمم داخلي",
        "تحديث منزل",
        "تنسيق مكتب",
        "بحث عن أثاث",
        "استشارة تصميم"
      ],
      "audienceRelevance": "لمن يريد مساحات تعكس الذوق والاستخدام دون إدارة كل مورد.",
      "cta": "راجع دعم التصميم",
      "imageLabel": "تنسيق تصميم خاص"
    }
  }
];

const imagePrompts = {
  "lifestyle-concierge": "Private lifestyle coordination",
  "luxury-accommodation": "Selected private accommodation",
  "yacht-charters": "Private yacht experience",
  "private-aviation": "Private aviation arrangement",
  "travel-management": "Coordinated travel management",
  "health-wellness-resorts": "Private wellness arrangement",
  "event-planning": "Private event coordination",
  "shopping-gifting": "Curated shopping and gifting",
  "transportation-services": "Private transportation coordination",
  "education": "Curated education support",
  "corporate-concierge-services": "Corporate concierge support",
  "personal-assistant": "Personal assistance support",
  "special-request": "Special request handling",
  "designers": "Private design coordination"
};

for (const blueprint of serviceBlueprints) {
  blueprint.image = `assets/images/${blueprint.id}.jpg?v=20260615-official-services`;
  blueprint.imagePrompt = imagePrompts[blueprint.id];
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
      <div>
        <h2 class="section-title ${textDirClass()}">${section.title}</h2>
      </div>
    </div>
    <div class="section-body ${textDirClass()}">${inner}</div>
  `;
}

function card(title, desc, index, meta = "") {
  return `
    <article class="strategy-card">
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

function formatSummaryHtml() {
  const summary = content[state.lang].summary;
  if (state.lang !== "ar") return summary;
  return summary.replace(/\. (?=\S)/g, ".<br />");
}

function renderSummary() {
  document.getElementById("executiveSummary").innerHTML = `
    <span class="exec-label ${textDirClass()}">${state.lang === "ar" ? "لماذا عضوية وصول" : "Executive Summary"}</span>
    <p class="${textDirClass()}">${formatSummaryHtml()}</p>
  `;
}

function renderBasicSections() {
  const s = content[state.lang].sections;

  document.getElementById("essence").innerHTML = sectionShell("essence", `
    ${s.essence.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    <div class="cards-grid">${s.essence.cards.map((item, i) => card(item[0], item[1], i + 1)).join("")}</div>
  `);

  document.getElementById("principles").innerHTML = sectionShell("principles", `
    <div class="cards-grid">${s.principles.cards.map((item, i) => card(item[0], item[1], i + 1)).join("")}</div>
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
    ${renderAccessLogos()}
    ${renderPartnerShowcase(s.ecosystem.items)}
  `);

  document.getElementById("segments").innerHTML = sectionShell("segments", `
    <div class="cards-grid">${s.segments.cards.map((item, i) => `
      <article class="strategy-card">
        <span class="card-num en">${String(i + 1).padStart(2, "0")}</span>
        <div class="card-title ${textDirClass()}">${escapeHtml(item[0])}</div>
        <div class="card-desc ${textDirClass()}">${escapeHtml(item[1])}</div>
        <div class="card-meta en">${escapeHtml(item[2])}</div>
      </article>
    `).join("")}</div>
  `);

  document.getElementById("process").innerHTML = sectionShell("process", `
    <div class="process-list">${s.process.steps.map((item, i) => `
      <article class="process-step process-step--${i % 2 === 0 ? "start" : "end"}">
        <div class="process-step-icon" aria-hidden="true">${processIcon(i)}</div>
        <div class="process-step-card">
          <div class="process-step-heading">
            <span class="process-step-num en">${String(i + 1).padStart(2, "0")}</span>
            <h3 class="card-title ${textDirClass()}">${escapeHtml(item[0])}</h3>
          </div>
          <p>${escapeHtml(item[1])}</p>
        </div>
      </article>
    `).join("")}</div>
  `);

  document.getElementById("standard").innerHTML = sectionShell("standard", `
    <div class="cards-grid">${s.standard.cards.map((item, i) => card(item[0], item[1], i + 1)).join("")}</div>
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
  return `
    <div class="logo-cloud-section" id="accessLogos">
    <div class="access-logo-cloud" aria-label="${isArabic ? "علامات وشركاء ضمن نطاق الوصول الفاخر" : "Luxury access logo landscape"}">
      <div class="logo-marquee" aria-hidden="false">
        <div class="logo-marquee__track">
          <div class="logo-marquee__group">${logoSet}</div>
          <div class="logo-marquee__group" aria-hidden="true">${logoSet}</div>
        </div>
        <div class="logo-cloud-fade logo-cloud-fade--left" aria-hidden="true"></div>
        <div class="logo-cloud-fade logo-cloud-fade--right" aria-hidden="true"></div>
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

function processIcon(index) {
  const icons = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4.2-4.2"></path><path d="M8.5 11h5"></path><path d="M11 8.5v5"></path></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.4 13.7 8a2.7 2.7 0 0 0 1.7 1.7L20 11.4l-4.6 1.7a2.7 2.7 0 0 0-1.7 1.7L12 19.4l-1.7-4.6a2.7 2.7 0 0 0-1.7-1.7L4 11.4l4.6-1.7A2.7 2.7 0 0 0 10.3 8z"></path><path d="M19 3v3"></path><path d="M20.5 4.5h-3"></path></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6.5a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 4.3 17 5.5 19 5.5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11.5 11.5 8a2.8 2.8 0 0 1 4 0l.5.5"></path><path d="m14 12.5 2.5-2.5a2.8 2.8 0 0 1 4 4l-3.2 3.2a3 3 0 0 1-4.2 0l-.6-.6"></path><path d="m10 11.5-2.5 2.5a2.8 2.8 0 0 1-4-4l3.2-3.2a3 3 0 0 1 4.2 0l.6.6"></path><path d="m8 17 1.5 1.5"></path><path d="m11 14 1.5 1.5"></path></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><circle cx="12" cy="4" r="2"></circle><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><circle cx="10" cy="12" r="2"></circle><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><circle cx="14" cy="20" r="2"></circle></svg>`
  ];

  return icons[index] || icons[0];
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
        ${s.explore}
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
  const inquirySubject = state.lang === "ar" ? "طلب تقييم خاص" : "Private Assessment Request";
  document.getElementById("inquiry").innerHTML = `
    <div class="private-assessment-panel">
      <span class="closing-label ${textDirClass()}">${escapeHtml(inquiry.label)}</span>
      <h2 class="${textDirClass()}">${escapeHtml(inquiry.title)}</h2>
      <p class="${textDirClass()}">${escapeHtml(inquiry.body)}</p>
      <a class="private-assessment-cta action-btn primary ${textDirClass()}" href="mailto:info@wosolconcierge.com?subject=${encodeURIComponent(inquirySubject)}">${escapeHtml(inquiry.request)}</a>
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
