export type BncItem = {
  title: string;
  desc: string;
  url?: string;
  badge?: string;
  meta?: string;
};

export type BncSection = {
  name: string;
  items: BncItem[];
};

export type BncAlert = {
  label: string;
  when: string;
  where: string;
  note: string;
};

export type BncDirectory = {
  header: {
    title: string;
    subtitle: string;
    /** Leading phrase rendered in serif italic. Must be a prefix of subtitle. */
    emphasis: string;
    alert: BncAlert;
  };
  sections: BncSection[];
};

/** Official student support only. Edit this object to update the page. */
export const bncDirectory: BncDirectory = {
  header: {
    title: "BCC Basic Needs Center",
    subtitle:
      "Essential campus and community support for Berkeley City College students.",
    emphasis: "Essential campus and community support",
    alert: {
      label: "Food Pantry",
      when: "Every Thursday 12:00 PM – 3:00 PM",
      where: "Basement Atrium",
      note: "Bring Student ID + Reusable Bag",
    },
  },
  sections: [
    {
      name: "Immediate Services & Hub",
      items: [
        {
          title: "Room 14 Resource Hub",
          desc: "Mon–Wed 10:00–17:00, Fri 10:00–13:00. Free clothes, hygiene items, and CalFresh intake.",
          badge: "Room 14",
        },
        {
          title: "Linktree Directory",
          desc: "Comprehensive portal for on and off-campus student emergency resources.",
          url: "https://linktr.ee/bcc.bnc",
          badge: "Portal",
        },
        {
          title: "Direct Contact",
          desc: "Official inquiries and support.",
          meta: "bcc-basicneeds@peralta.edu",
          url: "mailto:bcc-basicneeds@peralta.edu",
        },
      ],
    },
    {
      name: "Food & Nutrition",
      items: [
        {
          title: "Weekly Food Pantry",
          desc: "Fresh produce from Berkeley Bowl & non-perishable staples from Alameda Food Bank.",
          badge: "Thu 12–3PM",
        },
        {
          title: "CalFresh EBT Application",
          desc: "10-minute online application for monthly grocery funds.",
          url: "https://www.getcalfresh.org/",
          badge: "Food Subsidy",
        },
        {
          title: "Alameda County Food Helpline",
          desc: "Instant referrals for hot meals and local groceries: 510-635-3663.",
          url: "https://foodnow.net/",
          badge: "Helpline",
        },
      ],
    },
    {
      name: "Transit, Parking & Care",
      items: [
        {
          title: "AC Transit EasyPass",
          desc: "Free local transit pass for students enrolled in 6+ units. Pick up at 1st Floor Cashier's Office.",
          url: "https://www.peralta.edu/easypass",
        },
        {
          title: "Allston Way Garage Discount",
          desc: "2061 Allston Way. Early Bird (12AM–8AM): BCCSTUDENTEB ($12). Daily: BCCSTUDENT (30% off). Scan before checkout.",
          badge: "Codes",
        },
        {
          title: "Berkeley Specialized Care Unit (SCU)",
          desc: "24/7 non-police mental health and behavioral crisis response: 510-948-0075.",
          badge: "Crisis Care",
        },
        {
          title: "Berkeley Free Clinic",
          desc: "Community healthcare including free dental and vision checkups.",
          url: "https://www.berkeleyfreeclinic.org/",
        },
      ],
    },
  ],
};
