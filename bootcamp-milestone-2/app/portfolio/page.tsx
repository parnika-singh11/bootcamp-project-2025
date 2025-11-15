import connectDB from "@/database/db";
import ProjectModel from "@/database/ProjectSchema";

// Type for Project
type Project = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image?: string;
};

// Fetch projects from MongoDB
async function getProjects(): Promise<Project[]> {
  await connectDB();

  try {
    const projects = await ProjectModel.find().sort({ date: -1 });

    return projects.map((p) => ({
      title: p.title,
      slug: p.slug,
      date: p.date,
      description: p.description,
      content: p.content,
      image: p.image,
    }));
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}

// Portfolio Page component
export default async function PortfolioPage() {
  const projects: Project[] = await getProjects();

  return (
    <>
      <main>
        <h1 className="portfolio-title">Portfolio</h1>

        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.slug} className="project-card">
              {project.image && (
                <img src={project.image} alt={project.title} />
              )}
              <div className="project-details">
                <p className="project-name">{project.title}</p>
                <p className="project-description">{project.description}</p>
                <p className="project-content">{project.content}</p>
                <p className="project-date">
                  {new Date(project.date).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        © 2025 Parnika's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
