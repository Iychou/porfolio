/* ============================================================
   CONTENT â€” edit everything in this file. Nothing else in the
   site needs to change when you update text, add specimens,
   or swap images.
   ============================================================ */

const GEOLOGIST = {
  name: "Mohamed Arouch",
  eyebrow: "People Behind The Science",
  kicker: "Meet The Geologist",
  title: "Project Exploration Geologist â€” Copper, Gold &amp; REE â€” Brownfield / Greenfield",
  tagline: "Reading the story the rock leaves behind.",

  /* Transcribed from your screenshot. The last line was cut off
     behind a screenshot-tool popup â€” finish that sentence and
     anything else you want to add. */
  bio: "Experienced geologist, I have developed in-depth expertise in geological analysis, mapping, and natural resource assessment. My professional background includes a wide range of assignments, spanning from field research to advanced geological modeling. My skill set encompasses project management, scientific communication, and the resolution of complex geological challenges. My achievements include contributing to significant mineral deposit discoveries and implementing innovative methodologies within the field of geology. I am committed to advancing the understanding of Earth's processes and contributing to sustainable resource development.",

  portrait: "images/portrait/portrait.jpg",
  portrait2: "images/portrait/portrait-2.jpg",
  heroImage: "images/hero-field.jpg",
  email: "mohamed.arouch01@edu.uca.ma",
  location: "Marrakech, Morocco",

  education: [
    { degree: "Master of Technology - MTech, Exploration et Valorisation des GÃ©oressources option Mine", school: "Faculty of Science and Technology, Gueliz - Marrakech", year: "Sep 2020 - Jun 2022" },
    { degree: "Bachelor's degree in Earth and Space Sciences, Applied Geology specialization", school: "Semlalia Faculty of Science, Marrakech", year: "Sep 2017 - Jun 2020" },
    { degree: "Baccalaureate,SVT- Life and Earth Sciences", school: "Driss Premier High School in Agdz, Zagora", year: "Sep 2015 - Jun 2017" }

  ],

  certifications: [
    {
      name: "TechGeo Geospatial GIS . Remote Sensing . Web Mapping . Spatial Analysis - GeoAl . Photogrammetry . Cartography",
      issuer: "TechGeo Mapping",
      year: "Septembre - 2026",
      image: "images/certif/Techgeo.jpeg"
    },
    {
      name: "Leapfrog Edge | Depletion Modelling",
      issuer: "SEEQUENT",
      year: "MAI - 2026",
      image: "images/certif/leapfog.jpeg"
    },
    {
      name: "From Geomatics to GeoDataScience",
      issuer: "FormaSIG",
      year: "Novembre 2025",
      image: "images/certif/GIS DAY.jpeg"
    },
    {
      name: "Workplace Health and Safety in the Mining Industry",
      issuer: "The CPD certification",
      year: "Octobre 2026",
      image: "images/certif/Alisson.jpeg"
    }
  ],

  /* Left/right columns, matching the two-column career layout in
     your screenshot. Anything obscured in the screenshot is
     marked [confirm]. */
  careerLeft: [
    { period: "Aug 2024 – Present", role: "Geologue d'exploration at Copper – Brownfield", org: "Managem Group · Full-time", place: "Sahara, Maroc" },
    { period: "Oct 2022 – Jun 2024", role: "Production and Exploration Geologist", org: "MOROCCO MINING COPPER · Full-time", place: "Haut Atlas Occidental" }
  ],
  careerRight: [
    { period: "Aug 2022 - Sep 2022", role: "Production Geologist - Internship", org: "Managem Group", place: "Mine Bleida" },
    { period: "Mar 2022 - Jun 2022", role: "Exploration Geologist - Internship", org: "Morocco Mining Copper", place: "Haut Atlas Occidental" }
  ],

  skills: ["Geological Mapping", "Mineral Exploration", "Core Logging", "GIS &amp; Remote Sensing", "Resource Estimation", "Structural Geology", "Field Sampling", "Project Management", "Scientific Reporting"],

  stats: [
    { value: 9, suffix: "+", label: "Specimens Catalogued" },
    { value: 4, suffix: "+", label: "Years in the Field" },
    { value: 3, suffix: "", label: "Sites Explored" },
    { value: 2, suffix: "", label: "Discoveries Documented" },
    { value: 3, suffix: "", label: "Certifecations" }

  ]
};

/* Each specimen can now hold MULTIPLE images (first one is the
   card cover), plus richer fields shown in the full-screen popup.
   Add more photos of the same piece by adding more paths to `images`.
   Optional `mapQuery` shows an interactive satellite map; `mapImage` adds a map photo;
   `details` holds any extra labeled facts. */
const SPECIMENS = [
  {
    id: 1, images: ["images/collection_1/spec-01.jpg","images/collection_1/spec-02.jpg","images/collection_1/spec-03.jpg","images/collection_1/spec-04.jpg"],
    mapImage: "images/map/sahara.png",
    details: [
      { label: "Metasedimentary or Low-Grade Metamorphic Rock", value: "Greenschist Facies" },
      { label: "Sahara maroc", value: "Volcanogenic envirement" }
    ],
    title: "Banded Core Sample",
    type: "Metamorphic — banded core",
    caption: "Rhythmically banded rock recovered from a drilled core segment.",
    depth: "352 meters", dateFound: "2025",
    location: "Moroccan sahara", coords: "bir gandouz mines",
    article: "Sulfide Minerals (Brass-Yellow to Golden Patchy Grains):Pyrite ($\text{FeS}_2$): The brassy yellow, granular minerals concentrated along fractures and veins in spec-02.jpg and spec-04.jpg.Chalcopyrite ($\text{CuFeS}_2$): The rich golden-yellow metallic patch in spec-04.jpg. Chalcopyrite is the primary ore mineral of copper.Pyrrhotite or Arsenopyrite: Potentially co-existing in smaller amounts alongside pyrite within these hydrothermal assemblages, Orogenic Gold Deposits: Where gold is held invisibly within the crystal lattice of pyrite/arsenopyrite or as native inclusions within hydrothermal quartz veins.Volcanogenic Massive Sulfide (VMS) / Copper-Gold Vein Systems: Characterized by chalcopyrite-rich quartz-carbonate veining within altered volcaniclastic or sedimentary rocks."
  },
  {
    id: 2, images: ["images/pyrite.jpeg"],
    title: "Sulfide-Veined Slab",
    type: "Vein / mineralized slab",
    caption: "A fractured slab cut through by a bright mineral vein.",
    depth: " Guettioua Formation", dateFound: "Add date",
    location: " Msemrir area ", coords: "Central High Atlas, Morocco",
    article: "Add a short write-up here — the vein mineralogy, host rock, and what it indicates about fluid activity at depth."
  },
  {
    id: 3, images: ["images/trace/track-bearing_surface.png"],
    title: "Rare Jurassic Discovery",
    type: "Ancient Lizard-Like Tracks Uncovered",
    caption: "Plantigrade, pentadactyl (five-toed), ectaxonic, and strongly asymmetrical.",
    depth: "Guettioua Formation", dateFound: "2024",
    location: "Msemrir area", coords: "Central High Atlas, Morocco",
    mapImage: ["images/trace/region des trace 2.png"],
    article: "a 30 cm by 25 cm sandstone slab preserving 12 shallow, ancient footprint impressions,To capture every subtle contour of the tracks, we used photogrammetric 3D point cloud modeling and false-color depth mapping. These digital terrain models provided high-precisioan elevation data, confirming shallow footprint depths of around 1.0 mm and clarifying the spatial relationship between the inward-rotated manus and the trailing pes print "
  },
  {
    id: 4, images: ["images/spec-05.jpg", ],
    title: "Quartz Vein Core",
    type: "Drill core — quartz vein",
    caption: "A drilled core segment with a prominent white vein cutting the host rock.",
    depth: "Add depth / interval", dateFound: "Add date",
    location: "Add site name", coords: "Add coordinates",
    article: "Add a short write-up here — vein orientation, thickness, and relevance to the exploration target."
  },
  {
    id: 5, images: ["images/trace/Carmelopodus1.png", "images/trace/Carmelopodus2.png"],
    title: "Middle-Late Jurassic tracks",
    type: "Carmelopodus untermannorum tracks",
    caption: "Acicular green crystal growth set in a pale host matrix.",
    depth: "Guettioua Formation", dateFound: "2025",
    location: "Msemrir area", coords: "Central High Atlas, Morocco",
    mapImage: ["images/trace/region des trace 2.png"],
    article: "The top image is a photograph of a rock slab containing multiple theropod trackways and partial trackways. The bottom image provides an interpretive line drawing outlining each individual footprint (labeled T1 through T10) alongside a rock hammer for scale ,t's a Tridactyl (three-toed) footprints featuring distinct claw marks, moderately preserved phalangeal pads, and a pronounced round metatarsophalangeal pad situated posteriorly in line with digit III,Due to the very small footprint size compared to other global Kayentapus occurrences, these prints may represent juvenile individuals of the Kayentapus trackmaker, "
  },
  {
    id: 6, images: ["images/trace/Theropod.png"],
    title: "Middle-Late Jurassic tracks",
    type: "(A, B, D, G) Changpeipus cf. C. carbonicus. (C): cf. Carmelopodus untermannorum. (E): grallatorid tracks indet. (F): cf.Kayentapus.isp Tracks",
    caption: "Medium-to-small tridactyl tracks characterized by slender digit impressions, acute claw terminations, and a projection of digit III that is significantly greater than the lateral digits (II and IV).",
    depth: "the Guettioua Formation", dateFound: "2025",
    location: "Msemrir area", coords: "Central High Atlas, Morocco",
    mapImage: ["images/trace/region des trace 2.png"],
    article: [
      "A multi-panel composite photograph (panels A through G) showcasing isolated theropod footprints and partial tracks.",
      "Panel A: Isolated theropod footprint preserved in hyporelief (convex impression on the underside of a bedding plane) from the Tadaght 1 locality (scale bar = 6 cm).",
      "Panel B: Isolated footprint showcasing distinct digit impressions and divarication angles from the Tadaght 2 locality (scale bar = 6 cm).",
      "Panel C: Isolated tridactyl footprint exhibiting clear claw marks from the Aït Bou Oulli road section/locality (scale bar = 4 cm).",
      "Panel D: Deeply impressed natural mould of a theropod track showing a clear metatarsophalangeal pad region from the Gett 1 locality.",
      "Panel E: Well-preserved isolated footprint with prominent digit III elongation and clear pad structure from the Gett 3 locality (scale with 1-cm blocks).",
      "Panel F: Detailed view of a slender tridactyl track with a high divarication angle between outer digits from the Msemrir 1 locality (scale bar = 4 cm).",
      "Panel G: Shallow, weathered footprint shown alongside a lens cap for scale from the Msemrir 2 locality."
    ]
  },
  {
    id: 7, images: ["images/spec-07.jpg", "images/spec-07.jpg"],
    title: "In-Situ Bone Fragments",
    type: "Fossil — in-situ fragments",
    caption: "Larger fossil fragments still resting at the excavation surface.",
    depth: "Surface find", dateFound: "Add date",
    location: "Add site name", coords: "Add coordinates",
    article: "Add a short write-up here — excavation notes, associated finds, and next steps for this locality."
  },
  {
    id: 8, images: ["images/trace/spec-08.jpg",],
    title: "Fossil Impression",
    type: "Fossil — surface impression",
    caption: "A faint impression preserved in fine-grained rock, shown with scale.",
    depth: "Surface find", dateFound: "Add date",
    location: "Haut Atlas, Morocco", coords: "Add exact coordinates",
    mapImage: "images/trace/region des trace 2.png",
    article: "Add a short write-up here â€” what the impression appears to record, how it was documented, and any comparison notes. Two angles of the same find are included â€” swipe or click the thumbnails above."
  }
];

/* Sites you've worked or explored. `mapEmbed` is left empty on
   purpose â€” paste a Google/Mapbox embed `<iframe>` string, or an
   image path, and script.js will drop it straight into the card. */
const EXPEDITIONS = [
  {
    id: 1, name: "Sahara, Maroc", region: "Southern Morocco",
    coords: "Bassin oulad Dlem",
    blurb: ". Carbonatite . Terres rares. Or . Greenfield.",
    mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14791.295849935195!2d-16.7621327038662!3d22.05632847780049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc1fedbeb1ef5495%3A0x3377a70b16c3cb77!2sBir%20Gandouz!5e0!3m2!1sfr!2sma!4v1792354197314!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    specimenIds: []
  },
  {
    id: 2, name: "Haut atlas mountains", region: "Marrakech, Al houz",
    coords: "Marrakech - Tensift - Al Haouz",
    blurb: "APhosphorus-Phosphates , Uranium , Magnesite , Fluorine-Fluorite , and Copper mines.",
    mapEmbed: "images/map/houz.png",
    specimenIds: []
  },
  {
    id: 3, name: "Blieda mine", region: "Maroc ,DrÃ¢a-Tafilalet",
    coords: "DrÃ¢a-Tafilalet ,Anti-Atlas. ",
    blurb: "gold- and palladium-bearing mineralization.",
    mapEmbed: "images/map/Blieda.png",
    specimenIds: []
  }
];
