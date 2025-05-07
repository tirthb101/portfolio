import React from "react";
import { Card, CardBody } from "@heroui/card";
import { title } from "@/components/primitives";

const projects = [
  {
    title: "Retrieval Augmented Generation",
    description:
      "Built at ERDA internship. Uses VectorDB, embedding algorithms, and local LLMs to generate Q&A from PDFs, Docs, and Webpages.",
    link: "#",
    screenshot: "/screenshots/rag.png",
  },
  {
    title: "Sorting Visualizer",
    description:
      "A React-based visualizer for Bubble Sort, Selection Sort, and Insertion Sort. Built to help understand how sorting algorithms operate step-by-step.",
    link: "https://sorting-visualizer-tirthb101.netlify.app/",
    screenshot: "#",
  },
  {
    title: "Movie Rating",
    description:
      "A React app allowing users to rate and review movies. Deployed on Netlify with a responsive design.",
    link: "https://movie-rating-tirthb101.netlify.app/",
    screenshot: "#",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio site built with React and styled to showcase skills, experiences, and projects.",
    link: "https://portfolio-tirthb101.netlify.app/",
    screenshot: "#",
  },
  {
    title: "Library Management System",
    description:
      "Developed using Flask API, SQLite3, and React. Includes JWT-based authentication and password hashing.",
    link: "#",
    screenshot: "#",
  },
  {
    title: "Robotic Arm",
    description:
      "Arduino + Python project simulating human arm movement. Top 15 out of 105 at MECIA Hackathon at SVIT Vasad.",
    link: "#",
    screenshot: "#",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Machine learning model for predictive maintenance built with XGBoost and hybrid LSTM-CNN. Developed during Tic Tech Toe Hackathon at DAIICT with frontend in Next.js.",
    link: "#",
    screenshot: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-6 py-16 text-white dark:text-white" id="projects">

       <div className="text-center max-w-3xl mx-auto">
        {/* Heading Section */}
        <h1
          className={`${title()} text-4xl sm:text-5xl font-semibold text-primary mb-6`}
        >
          Projects
        </h1>

        {/* Subheading Section */}
        <p className="text-lg sm:text-xl text-muted-foreground mt-2 text-foreground mb-20">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => {
          const hasValidLink = project.link !== "#";
          const hasValidScreenshot = project.screenshot !== "#";

          return (
            <Card
              key={index}
              className="overflow-hidden shadow-xl rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
            >
              {(hasValidLink || hasValidScreenshot) && (
                hasValidLink ? (
                  <div className="w-full h-[400px] overflow-hidden bg-black">
                    <iframe
                      src={project.link}
                      title={project.title}
                      className="w-[150%] h-[600px] scale-[0.67] origin-top-left border-none"
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-[400px] object-contain bg-black"
                  />
                )
              )}
              <CardBody className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">{project.title}</h3>
                <p className="text-base text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
