export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio",
  description: "Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/tirthb101 ",
    leetcode: "https://leetcode.com/u/tirthb101/",
    linkedin: "https://www.linkedin.com/in/tirth-bhatia/",
  },
};
