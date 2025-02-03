export const categories = [
  "AI Image Generate",
  "AI Video Editing",
  "Social Media Post",
  "Digital Marketing",
  "AI Content Generate",
  "AI Business Strategy",
];

export const blogs = [
  {
    id: 1,
    images: [
      "/assets/images/news/image-small-01.jpg",
      "/assets/images/news/image-small-02.jpg",
      "/assets/images/news/image-small-03.jpg",
      "/assets/images/news/image-small-04.jpg",
    ],
    date: "Aug 25, 2023",
    comments: "Comments(08)",
    title: "Write detailed prompts and generate almost anything",
    type: "type-1",
  },
  {
    id: 2,
    images: ["/assets/images/news/image-01.jpg"],
    date: "Aug 25, 2023",
    comments: "Comments(08)",
    title: "Write detailed prompts and generate almost anything",
    type: "type-2",
  },
  {
    id: 3,
    images: ["/assets/images/news/image-02.jpg"],
    date: "Aug 25, 2023",
    comments: "Comments(08)",
    title: "Write detailed prompts and generate almost anything",
    type: "type-2",
  },
];
export const recentBlogs = [
  {
    id: 4,
    imgSrc: "/assets/images/blog/related-01.jpg",
    title: "Popular Search Finance Manager Customer",
    date: "15 May 2023",
  },
  {
    id: 5,
    imgSrc: "/assets/images/blog/related-02.jpg",
    title: "Leonardo Da Vinci Can Teach Us About Web",
    date: "15 May 2023",
  },
  {
    id: 6,
    imgSrc: "/assets/images/blog/sidebar-02.jpg",
    title: "A Pragmatist’s Guide To Lean User Research",
    date: "15 May 2023",
  },
  {
    id: 7,
    imgSrc: "/assets/images/blog/sidebar-03.jpg",
    title: "Dynamic Donut Charts With Tailwind React",
    date: "15 May 2023",
  },
];

export const blogArticles = [
  {
    id: 8,
    imgSrc: "/assets/images/blog/blog-01.jpg",
    title:
      "Design System Smashing Design Patterns Are Better Way To Collaborate On Your Design System",
    date: "July 25, 2023",
    comments: "Comments(08)",
    author: "Johnny M. Kolb",

    isVideo: false,
  },
  {
    id: 9,
    imgSrc: "/assets/images/blog/blog-02.jpg",
    title:
      "How To Create A Rapid Research Program To Support Insights At Scale",
    date: "July 25, 2023",
    comments: "Comments(08)",
    author: "Johnny M. Kolb",

    isVideo: true,
  },
  {
    id: 10,
    isQuote: true,
    title:
      "Meet Codux React Visual Editor That Improves Support Insights At Scale Developer Experience",
    date: "July 25, 2023",
    comments: "Comments(08)",
    author: "Johnny M. Kolb",
  },
  {
    id: 11,
    imgSrc: "/assets/images/blog/blog-03.jpg",
    title:
      "How To Create A Rapid Research Program To Support Insights At Scale Improves Developer Experience",
    date: "July 25, 2023",
    comments: "Comments(08)",
    author: "Johnny M. Kolb",

    isVideo: false,
  },
  {
    id: 12,
    isQuote: true,
    title:
      "How To Build Server-Side Rendered (SSR) Svelte Apps With Svelte Kit Visual Editor That Improves",
    date: "July 25, 2023",
    comments: "Comments(08)",
    author: "Johnny M. Kolb",
  },
];

export const allBlogs = [...blogs, ...recentBlogs, ...blogArticles];
export const tags = ["Business", "Videos", "Image", "Content", "Media Post"];
