import "./Blog.css";

const blogs = [
  {
    title: "Refreshing Designs",
    category: "Design",
    description:
      "A collection of refreshing designs to inspire your next project.",
  },
  {
    title: "Healthier Lifestyle",
    category: "Lifestyle",
    description:
      "Tips and tricks to maintain a healthier lifestyle while working.",
  },
  {
    title: "Gaming Evolution",
    category: "Gaming",
    description: "The evolution of gaming and its impact on the modern world.",
  },
  {
    title: "Best Workstations of the Year",
    category: "Workspace",
    description:
      "A showcase of the best workstations of the year to inspire your setup.",
  },
  {
    title: "Eating for Productivity",
    category: "Productivity",
    description: "The best foods to eat for increased productivity and focus.",
  },
  {
    title: "A Design Mind-set",
    category: "Resources",
    description: "Adopting a design mind-set to improve your work and life.",
  },
];

const BlogPost = ({ title, category, description }) => (
  <div className="blog-post">
    <div className="post-image"></div>
    <div className="post-content">
      <span className={`post-category ${category}`}>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Blog = () => (
  <section className="blog">
    <h2>The Project Blog</h2>
    <p>Designs and layouts to help you with your app.</p>
    <div className="blog-grid">
      {blogs.map((blog) => (
        <BlogPost key={blog.title} {...blog} />
      ))}
    </div>
  </section>
);

export default Blog;
