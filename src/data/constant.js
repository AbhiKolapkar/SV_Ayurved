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

/*********************** dropdown navnavigation-menu Data ***********************/
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