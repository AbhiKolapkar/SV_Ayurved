/* **** import social icons **** */
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

/* **** import contact icons **** */
import location from '../assets/icons/location.svg'
import location_bg from '../assets/icons/location-bg.svg'
import mail from '../assets/icons/mail.svg'
import mail_bg from '../assets/icons/mail_bg.svg'
import phone from '../assets/icons/phone.svg'
import phone_bg from '../assets/icons/phone_bg.svg'

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
  HOME_PATH: '/',
  HOME_PAGE: '/home',
  ABOUT_US_PAGE: '/about',
  TREATMENTS_PAGE: '/treatments',
  SESSIONS_PAGE: '/sessions',
  GALLERY_PAGE: '/gallery',
  PROGRAM_PAGE: '/program',
  BLOGS_PAGE: '/blogs',
  BLOG_DETAILS_PAGE: '/blog/:Title',
  UPDATES_PAGE: '/updates',
  CONTACT_PAGE: '/contact',
  PRIVACY_POLICY_PAGE: '/privacy',
  TERMS_CONDITIONS_PAGE: '/terms',
}


export const NavLinks_Data = [
  {
    path: PATHS.HOME_PATH || PATHS.HOME_PAGE,
    title: 'Home',
  },
  {
    path: PATHS.ABOUT_US_PAGE,
    title: 'About',
  },
  {
    path: PATHS.TREATMENTS_PAGE,
    title: 'Treatments',
  },
  {
    path: PATHS.SESSIONS_PAGE,
    title: 'Sessions',
  },
  {
    path: PATHS.GALLERY_PAGE,
    title: 'Gallery',
  },
  {
    path: PATHS.PROGRAM_PAGE,
    title: 'Program',
  },
  {
    path: PATHS.BLOGS_PAGE,
    title: 'Blogs',
  },
  {
    path: PATHS.UPDATES_PAGE,
    title: 'Updates',
  },
]


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
