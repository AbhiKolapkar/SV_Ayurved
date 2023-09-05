import {
  AboutUS_Page_Images,
  BannerImages_Data,
  Gallery_Images_Data,
  Happy_Clients_Images,
  Home_Page_Images,
} from "./images";

/* **** import social icons **** */
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import youtube from "../assets/icons/youtube.svg";

/* **** import contact icons **** */
import location from "../assets/icons/location.svg";
import location_bg from "../assets/icons/location-bg.svg";
import mail from "../assets/icons/mail.svg";
import mail_bg from "../assets/icons/mail_bg.svg";
import phone from "../assets/icons/phone.svg";
import phone_bg from "../assets/icons/phone_bg.svg";

const { heroBanner1, heroBanner2, heroBanner3 } = BannerImages_Data;
const { hearttick, experience, teams, health } = Home_Page_Images;

const {
  founder,
  story_img1,
  story_img2,
  story_img3,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  panchkarma,
  medicine,
  pathya,
} = AboutUS_Page_Images;

const { img1, img2, img3, img4, img5, img6, img7, img8, img9 } =
  Gallery_Images_Data;

const { client1, client2, client3 } = Happy_Clients_Images;

/* **** all API Keys **** */
const API_URL = "https://api.svayurved.com/";
export const TREATMENTS_API_URL = API_URL + "getTreatments";
export const SESSIONS_API_URL = API_URL + "getSessions";
export const PROGRAMS_API_URL = API_URL + "enroll-programs";
export const BLOGS_API_URL = API_URL + "getBlogs";
export const BLOG_DETAILS_API_URL = API_URL + "blog";
export const CONTACT_API_URL = API_URL + "user-contact";
export const APPOINTMENT_API_URL = API_URL + "book-appointment";
export const BOOKED_APPOINTMENT_API_URL = API_URL + "bookedAppointments";

/* **** export PATHS **** */
export const PATHS = {
  HOME_PATH: "/",
  HOME_PAGE: "/home",
  ABOUT_US_PAGE: "/about",
  TREATMENTS_PAGE: "/treatments",
  SESSIONS_PAGE: "/sessions",
  GALLERY_PAGE: "/gallery",
  PROGRAM_PAGE: "/program",
  BLOGS_PAGE: "/blogs",
  BLOG_DETAILS_PAGE: "/blog/:Title",
  UPDATES_PAGE: "/updates",
  CONTACT_PAGE: "/contact",
  PRIVACY_POLICY_PAGE: "/privacy",
  TERMS_CONDITIONS_PAGE: "/terms",
};

export const NavLinks_Data = [
  {
    path: PATHS.HOME_PATH || PATHS.HOME_PAGE,
    title: "Home",
  },
  {
    path: PATHS.ABOUT_US_PAGE,
    title: "About",
  },
  {
    path: PATHS.TREATMENTS_PAGE,
    title: "Treatments",
  },
  {
    path: PATHS.SESSIONS_PAGE,
    title: "Sessions",
  },
  {
    path: PATHS.GALLERY_PAGE,
    title: "Gallery",
  },
  {
    path: PATHS.PROGRAM_PAGE,
    title: "Program",
  },
  {
    path: PATHS.BLOGS_PAGE,
    title: "Blogs",
  },
  {
    path: PATHS.UPDATES_PAGE,
    title: "Updates",
  },
];

/*********************** dropdown navigation-menu Data ***********************/
export const NavRoutes_Data = [
  {
    path: PATHS.HOME_PATH || PATHS.HOME_PAGE,
    title: "Home",
  },
  {
    path: PATHS.ABOUT_US_PAGE,
    title: "About Us",

    insightsData: [
      {
        path: PATHS.ABOUT_US_PAGE,
        title: "About Us",
      },
      {
        path: PATHS.GALLERY_PAGE,
        title: "Gallery",
      },
      {
        path: PATHS.PROGRAM_PAGE,
        title: "Program",
      },
      {
        path: PATHS.BLOGS_PAGE,
        title: "Blogs",
      },
      {
        path: PATHS.UPDATES_PAGE,
        title: "Updates",
      },
    ],
  },
  {
    path: PATHS.TREATMENTS_PAGE,
    title: "Treatments",
  },
  {
    path: PATHS.SESSIONS_PAGE,
    title: "Sessions",
  },
];

/*********************** miscellaneous-links Data ***********************/
export const ExtraLinks_Data = [
  {
    path: PATHS.PRIVACY_POLICY_PAGE,
    title: "Privacy Policy",
  },
  {
    path: PATHS.TERMS_CONDITIONS_PAGE,
    title: "Terms & Conditions",
  },
  {
    path: PATHS.CONTACT_PAGE,
    title: "Contact Us",
  },
];

/*********************** social-links Data ***********************/
export const SocialLinks_Data = [
  {
    id: 1,
    platform: linkedin,
    path: "",
  },
  {
    id: 2,
    platform: facebook,
    path: "",
  },
  {
    id: 3,
    platform: instagram,
    path: "",
  },
  {
    id: 4,
    platform: youtube,
    path: "https://www.youtube.com/@dr.J1305",
  },
];

/*********************** contacts Data ***********************/
export const Contacts_Data = [
  {
    id: 1,
    icon: location,
    bgIcon: location_bg,
    text: `Office no.110, Pallazo building, near Wisdom world school, Hadapsar, 
Pune- 411 028`,
  },
  {
    id: 2,
    icon: mail,
    bgIcon: mail_bg,
    text: "vishwavajraayurved@gmail.com",
  },
  {
    id: 3,
    icon: phone,
    bgIcon: phone_bg,
    text: "7588682035",
  },
];

/*********************** home page Data ***********************/
/************ hero-banner content Data ************/
export const Hero_Banner_Data = [
  {
    id: 1,
    bannerImg: heroBanner1,
    title: `Reveal the Essence of 
SV Ayurved: Where 
Healing Becomes Life`,
    contentText: `Step into our tranquil haven, where traditional 
healing merges seamlessly with compassionate 
care, leading you on a profound transformation 
towards holistic wellness.`,
    btnText: "About Us",
    path: "/about",
    color: 'primary',
  },

  {
    id: 2,
    bannerImg: heroBanner2,
    title: `Explore the Ayurveda's Richness: 
Enroll in Our Comprehensive 
Training Program`,
    contentText: `Join our Ayurvedic Training Course and immerse 
yourself in the depth of timeless knowledge. 
Empower yourself with the holistic principles that guide well-being.`,
    btnText: "Explore Program",
    path: "/program",
    color: 'tertiary',
  },
  {
    id: 3,
    bannerImg: heroBanner3,
    title: `Rediscover Balance and 
Harmony with Our Array 
of Ayurvedic Treatments`,
    contentText: `Experience the profound impact of Ayurvedic 
treatments at SV Ayurved. Our therapies restore 
equilibrium in body, mind, and spirit, nurturing 
your overall wellness.`,
    btnText: "Know More",
    path: "/treatments",
    color: 'primary',
  },
];

/************ counter Data ************/
export const Counter_Data = [
  {
    id: 1,
    icon: experience,
    count: 12,
    text: "Years of Experience",
  },
  {
    id: 2,
    icon: hearttick,
    count: 8000,
    text: "Satisfied Patients",
  },
  {
    id: 3,
    icon: teams,
    count: 10,
    text: "Team of Experts",
  },
  {
    id: 4,
    icon: health,
    count: 32,
    text: "No. of Treatments",
  },
];

/************ reviews cards Data ************/
export const Review_Data = [
  {
    id: 1,
    image: "",
    userName: "Sadhana Kenjale",
    reviewText: `From the very first consultation, I was put at ease by her welcoming nature. Her genuine interest in my well-being and her ability to attentively listen to my concerns created an environment where I felt comfortable and confident in sharing my medical history and current issues. Her careful consideration of all aspects of my case, coupled with her remarkable diagnostic abilities, ensured that no stone was left unturned in reaching an accurate diagnosis.`,
    starCount: 5,
  },
  {
    id: 2,
    image: "",
    userName: "Kiran A",
    reviewText: `I am visiting to Dr. Jyoti since one month. I was having skin problem like boils, dryness, rashes. With her medicines and Virechana, I can see good results on my skin. With my experience I started consulting for my son as well. He is having Psoriasis problem at the age of 6.Main thing is my son enjoys going there. What I liked about her is she never gives false commitment. Staff is also very co-operative. I will surely recommend her and will continue with her.`,
    starCount: 5,
  },
  {
    id: 3,
    image: "",
    userName: "Soniya Lonkar",
    reviewText: `I have been taking my son for treatment here for the past couple of months. He has been having a skin condition which has been troubling him since last year. We had to constantly give him Allegra every day and we were worried about the side effects. After starting the treatment here, there is vast improvement in his condition and we are very happy with the care. She patiently listens to all our issues and answers all queries. Glad to have taken my son here`,
    starCount: 4,
  },
  {
    id: 4,
    image: "",
    userName: "Ashwini C",
    reviewText: `I was suffering from severe intermittent stomachache for last 3 years. In the very first visit, Dr. Jyoti diagnosed the issue and assured it can be healed but will take time. It's been 3 months I am undergoing the treatment and 90% of the pain is already gone. Dr. Jyoti is very friendly and polite. She answers every stupid question asked even on chat. Also, she tells approximate time duration required for the treatment and diet to be followed to support the treatment.`,
    starCount: 4,
  },
  {
    id: 5,
    image: "",
    userName: "Snehal Jadhav",
    reviewText: `Visited VishwaVajra ayurvedic hospital for a medical treatment. Very pleased with the treatment from Dr. Jyoti Shinde/Zalte. She knows her stuff and provides correct diagnostics and treatment. She is the best for Nadi parikshan. Most important - she is reachable and available all the time on phone/whats app for clarifying doubts. Panchkarma treatment was good, and she explained the benefits from the treatment.`,
    starCount: 5,
  },
  {
    id: 6,
    image: "",
    userName: "Preeti Agarwal",
    reviewText: `I am visiting to Dr. Jyoti since one month. I was having skin problem like boils, dryness, rashes. With her medicines and Virechana, I can see good results on my skin. With my experience I started consulting for my son as well. He is having Psoriasis problem at the age of 6.Main thing is my son enjoys going there. What I liked about her is she never gives false commitment. Staff is also very co-operative. I will surely recommend her and will continue with her.`,
    starCount: 4,
  },
];

/************ FAQ's Data ************/
export const Faqs_Data = [
  {
    id: 1,
    question: "What is Panchakarma?",
    answer: `The process of cleansing the body inside out with the help of ayurvedic medication helps to throw out toxins [doshas and malas] from the body and helps to get rid and fight of an existing disease.`,
  },
  {
    id: 2,
    question: "Are panchakarma and massage/spa the same?",
    answer: `No. They are not the same; panchakarma is a scientific medical method that should be performed with the supervision and guidance of a qualified medical specialist. It has 5 fundamental categories [vamanam, virechanam, nasyam, basti, and raktamokshanam]. A brief pre-procedure called SNEHANAM-SWEDANAM is performed before beginning several panchakarmas.`,
  },
  {
    id: 3,
    question: "Can I do panchakarma? Is it mandatory for every disease?",
    answer: `Panchakarma can be done in all age groups, including patients as well as healthy persons too, but only if advised by an ayurvedic Vaidya/Physician. The doctor will only determine and inform the patient that panchakarmas are necessary to treat an illness or maintain a healthy state of body and mind after a personal physical assessment.`,
  },
  {
    id: 4,
    question: "How many days it takes to complete a panchakarma session?",
    answer: `Typically, panchakarma treatments are scheduled following a comprehensive physical evaluation. The minimum duration is seven days, although individual sessions can last up to twenty-one days or longer depending on the needs of the patient. Before beginning, the patient will receive all the details and a plan for his or her panchakarma session.`,
  },
  {
    id: 5,
    question: "If I do panchakarma, can I avoid medicines?",
    answer: `No. Panchakarma simply detoxifies the body [SHODHANA], it does not alter how the doshas in the body create those poisons. Ayurvedic medication is just as crucial as panchakarma for stopping the cycle of recreating the same doshas (SHAMANA) and avoiding returning to the same diseased condition (APUNARBHAVA).`,
  },
  {
    id: 6,
    question: "Any dos and don’ts?",
    answer: "Yes. That will be explained at the time of panchakarma session.",
  },
];

/*********************** about-us page Data ***********************/
/************ Founder Introduction Data ************/
export const FounderIntro = {
  heroImg: founder,
  name: "Dr. Jyoti Shinde",
  education: `BAMS.MD [kaychikitsa]dcc.dct.dcl. Ayurved Vachaspati,
Panchakarma Visharad Reg.no.- I-67370-A`,
  introText: `Meet the visionary behind SVayurved - Dr. Jyoti Shinde. With a proud Indian heritage deeply rooted in Maharashtrian culture, Dr. Jyoti brings over 10+ years of experience as an Ayurvedic Vaidya who treats a range of medical issues.
  
She embraces the core Ayurvedic principle that every patient is distinct and deserving of individualized care [purusham purusham veekshya]. Dr. Jyoti is a well-respected Ayurvedic physician as well as a recognized gynecologist, infertiologist, dermatologist, and cosmetologist. She is driven by her enthusiasm for offering holistic treatments.
  
With unwavering dedication, Dr. Jyoti strives to deliver transparent and exceptional care to her patients. She has a well-deserved reputation as one of the best in her area thanks to her thorough knowledge of Ayurveda and dedication to individualized care.
  
She created the extraordinary AAROGYASUTRAM, a unique and efficient therapy method, using her significant experience, and it has achieved exceptional success in the treatment of a wide spectrum of medical diseases.
  
Dr. Jyoti Shinde has profoundly influenced the lives of innumerable people thanks to her unwavering devotion to and love of Ayurveda. Her foresight and knowledge continue to mold SVayurved into a reputable location for all-encompassing healthcare. Take advantage of SVayurved's transformational power and the miracles of Ayurveda as you set out on a path to optimum health and well-being.`,
};

/************ Our Story Data ************/
export const OurStory_Data = [
  {
    id: 1,
    img: story_img1,
    text: `Welcome to SVayurved, formerly known as "SHREE VishwaVajra Ayurved." Established by the visionary Dr. Jyoti Shinde on June 11, 2016, in Pune, SVayurved stands as a radiant beacon of healing and transformation. We proudly embrace the rich heritage of the "NATH PARAMPARA" We carry forward the tradition initiated by "SHREE DNYANESHWAR MAULI" and the cherished practice of "PASAYDANAM." At SVayurved, we are not simply practitioners of Ayurveda; Our primary mission is to create a healthier nation, where individuals can live pain-free lives. We are committed to providing free treatments to those in need, without external aid, as part of our endeavor to make a positive impact on society.`,
  },
  {
    id: 2,
    img: story_img2,
    text: `At SVayurved, we also strive to promote Ayurveda on a global scale, sharing its wisdom and benefits worldwide. Additionally, we support the future of Ayurvedic graduates from India, offering them opportunities for growth and a promising future. Join us in embracing the transformative power of Ayurveda at SVayurved, where health, harmony, and compassion merge to create a brighter future. The pathfinders of Indian wisdom fused with Ayurvedic shastra gyana and modern technologies. Our mission is to bridge the gap between civilizations, offering comprehensive solutions for health and lifestyle. We enable people to reach optimal health and well-being with the help of Ayurvedic knowledge.`,
  },
  {
    id: 3,
    img: story_img3,
    text: `Our individualized treatment regimens at SVayurved are created to meet the needs of each patient. Utilizing pure and genuine Ayurvedic medications, revitalizing Panchakarma treatments individualized eating regimens, and lifestyle adjustments are all part of our strategy.
    
The patient's health and quality of life are significantly improved by these integrated solutions.
    
Our three success pillars, referred to as AAROGYASUTRAM, are a source of great pride for us. In numerous health conditions, including asthma, a deviated nasal septum, allergic rhinitis, pain syndromes, spine issues, arthritis, skin diseases, cosmetic concerns, hair problems, gynecological disorders, infertility, digestive problems, mental health difficulties, anemia, liver conditions, diabetes, and even post-COVID complications, this approach has produced amazing results. The list is lengthy, and we are pleased to have met the demands of the many patients who sought care at SVayurved.
    
Join us on this life-changing journey as we help you restore your health and happiness. At SVayurved, where we think there is a solution for everyone seeking well-being, discover the profound impact of Ayurveda mixed with contemporary developments.`,
  },
];

/************ Teams Data ************/
export const Team_Details = [
  {
    id: 1,
    img: member1,
    name: "Dr. Manisha M",
    designation: "Garbhasanskara Specialist",
  },
  {
    id: 2,
    img: member2,
    name: "Dr. Komal P",
    designation: "Ayurvedic Cosmetologist",
  },
  {
    id: 3,
    img: member3,
    name: "Mr. Lakshman P",
    designation: "Panchakarma Therapist",
  },
  {
    id: 4,
    img: member4,
    name: "Dr.Hrujuta B",
    designation: "Ayurvedic Child Psychologist",
  },
  {
    id: 5,
    img: member5,
    name: "Dr. Pranita K",
    designation: "Intern",
  },
  {
    id: 6,
    img: member6,
    name: "Dr. Sneha P",
    designation: "Intern",
  },
  {
    id: 7,
    img: member7,
    name: "Ms. Kavita K",
    designation: "Panchakarma Therapist",
  },
  {
    id: 8,
    img: member8,
    name: "Mrs. Priyanka S",
    designation: "Clinic Assistant",
  },
];

/************ Aarogyasutram_3P's Data ************/
export const Aarogyasutram_3Ps_Data = [
  {
    id: 1,
    image: panchkarma,
    title: "Panchakarma",
    desc: `SHODHANA CHIKITSA i.e., Panchakarma i.e., Purification of body and soul i.e., sharir and Atama is important to achieve health i.e., Swasthyam. It is achieved by panchakarma chikitsa which includes vamamam, virechanam, basti, raktamokshanam, and nasyam. each of them can be performed with customization as per the patient's prakruti and vikruti i.e. disease. Sessions will be planned accordingly.`,
    shortDesc: `SHODHANA CHIKITSA i.e., Panchakarma i.e., Purification of body and soul i.e., sharir and Atama is important to achieve health i.e., Swasthyam. It is achieved by panchakarma chikitsa.`,
  },
  {
    id: 2,
    image: medicine,
    title: "Pure Ayurvedic Medicine",
    desc: `SHAMANA CHIKITSA i.e. To achieve desired outcomes that will last for a long time, patients are encouraged to take pure Ayurveda medicine from day one. The following Three steps make it work.
1) Pachana - Removing current doshas and reprogramming underlying bodily processes
2) Brumhana - Giving the body more power and vitality and boosting it
3) Apunarbhava - Maintaining a long-lasting healthy state and not reverting to the ill state`,
    shortDesc: `SHAMANA CHIKITSA i.e. To achieve desired outcomes that will last for a long time, patients are encouraged to take pure Ayurveda medicine from day one.`,
  },
  {
    id: 3,
    image: pathya,
    title: "Pathya",
    desc: `PATHYA KALPANA, or improving the patient's daily routine and food. Every person has different food preferences and eating habits, which have an impact on and affect their bodies in various ways. In this section, we discuss the patient's daily dietary habits in detail in order to create a personalized diet program using standard diet ingredients that is easier to follow on a daily basis and that will aid in the patient's recovery from illness and maintenance of good health.`,
    shortDesc: `PATHYA KALPANA, or improving the patient's daily routine and food. Every person has different food preferences and eating habits, which have an impact on and affect their bodies in various ways.`,
  },
];

/* **** *** media data *** **** */
export const Media_Data = [
  {
    id: 1,
    type: "video",
    url: "https://www.youtube.com/embed/ozvzOMyEoBk",
    title: "How Ayurveda Works?",
  },
  {
    id: 2,
    type: "video",
    url: "https://www.youtube.com/embed/-ELpr7bsC24",
    title: "What is Gharbhasanskara?",
  },
  {
    id: 3,
    type: "video",
    url: "https://www.youtube.com/embed/DydfVpBeJ3U",
    title: "Abortion and its affects",
  },
  {
    id: 4,
    type: "video",
    url: "https://www.youtube.com/embed/R3GjatYxLuA",
    title: "Ayurved & Child Immunity",
  },
  {
    id: 5,
    type: "video",
    url: "https://www.youtube.com/embed/GLDOlD3glNs",
    title: "Excercise - What, How & Why?",
  },
  {
    id: 6,
    type: "video",
    url: "https://www.youtube.com/embed/Y0gv3OMV5Z0",
    title: "Beejsanskara - Step 1 of Gharbhasanskara",
  },

  { id: 7, type: "image", url: img1 },
  { id: 8, type: "image", url: img2 },
  { id: 9, type: "image", url: img3 },
  { id: 10, type: "image", url: img4 },
  { id: 11, type: "image", url: img5 },
  { id: 12, type: "image", url: img6 },
  { id: 13, type: "image", url: img7 },
  { id: 14, type: "image", url: img8 },
  { id: 15, type: "image", url: img9 },
];

export const Happy_Clients_Data = {
  category: "Gharbhasanskar",
  clients: [
    { id: 1, img: client1 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
    { id: 1, img: client1 },
  ],
};
