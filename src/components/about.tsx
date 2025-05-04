import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Image } from "@heroui/image";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10 px-4">
      <div className="inline-block max-w-3xl text-center justify-center">
        <h1 className={title({ color: "violet" })}>About Me</h1>
        <p className="text-lg mt-2 text-default-600">
          Computer Engineering Graduate | Developer | AI Enthusiast
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-6">
        {/* Profile Section */}
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="bg-content2 p-6 rounded-xl shadow-md w-full">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-default-100 flex items-center justify-center">
                <Image
                  alt="Profile Picture"
                  className="rounded-full mtb-5"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHRZV9urWN9cQ/profile-displayphoto-shrink_400_400/B4DZXgFZVZHAAg-/0/1743221266263?e=1751500800&v=beta&t=t67q9MIUErrTz26D3xwU-aMLrsXcUVLFvSFDnq1a6nc"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">
              Tirth Bhatiya
            </h2>
            <p className="text-center text-default-500 mb-3">
              bhatiatirth01@gmail.com
            </p>

            <div className="mt-6 space-y-3">
              <a
                className="flex items-center gap-2 text-primary hover:underline"
                href="https://linkedin.com/in/tirth-bhatia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                className="flex items-center gap-2 text-primary hover:underline"
                href="https://leetcode.com/tirthb101"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink size={16} />
                <span>LeetCode</span>
              </a>
              <a
                className="flex items-center gap-2 text-primary hover:underline"
                href="https://github.com/tirthb101"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* <ExternalLink size={16} /> */}
                <ExternalLink size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Bio Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-primary" />
              <h2 className="text-xl font-bold">Biography</h2>
            </div>
            <p className="text-default-600">
              I&apos;m a Computer Engineering graduate from SVIT Vasad with a
              strong foundation in programming, data structures, and algorithms.
              I&apos;m passionate about software development with particular
              interests in AI, machine learning, and web development. My
              experience spans from web applications to AI-driven solutions,
              including RAG systems and predictive maintenance models.
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-primary" />
              <h2 className="text-xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">BE in Computer Engineering</h3>
                <p className="text-sm text-default-500">
                  SVIT VASAD • May 2025
                </p>
                <p className="mt-1 text-default-600">CGPA: 8.6/10</p>
              </div>
              <div>
                <h3 className="font-semibold">High School</h3>
                <p className="text-sm text-default-500">GSHSEB • May 2021</p>
                <p className="mt-1 text-default-600">Dabhoi, Gujarat</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-primary" />
              <h2 className="text-xl font-bold">Skills</h2>
            </div>

            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    C
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    SQL
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Flask
                  </span>
                </div>
              </div>

              {/* Computer Science & Data */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Computer Science & Data</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    Data Science
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    API Development
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                    LLMs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-primary" />
              <h2 className="text-xl font-bold">Experience</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">CS Intern</h3>
                <p className="text-sm text-default-500">ERDA</p>
                <ul className="mt-1 text-default-600 list-disc pl-5 space-y-1">
                  <li>Created a chatbot for company website</li>
                  <li>
                    Developed a RAG (Retrieval Augmented Generation) system
                  </li>
                  <li>Utilized VectorDB, Embedding algorithms and local LLM</li>
                  <li>
                    Built Q&A system for various document formats (PDF, Docx,
                    Webpages)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-primary" />
              <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">
                  Predictive Maintenance | Tic Tech Toe Hackathon at DAIICT
                </h3>
                <ul className="mt-1 text-default-600 list-disc pl-5 space-y-1">
                  <li>
                    Created ML models using XGBoost and LSTM+CNN architectures
                  </li>
                  <li>Developed frontend interface using Next.js</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Sorting Visualizer</h3>
                <ul className="mt-1 text-default-600 list-disc pl-5 space-y-1">
                  <li>Visualizer for Sorting Algorithms made with React</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">
                  MECIA | Hackathon - SVIT Vasad
                </h3>
                <ul className="mt-1 text-default-600 list-disc pl-5 space-y-1">
                  <li>Built a Robotic Arm using Arduino and Python</li>
                  <li>
                    Placed in Top 15 out of 105 teams in a multidisciplinary
                    hackathon
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Library Management System</h3>
                <ul className="mt-1 text-default-600 list-disc pl-5 space-y-1">
                  <li>Flask API, SQLite3 Database and React</li>
                  <li>JWT for Authentication and Hashing for Security</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Movie Rating Site</h3>
                <ul className="mt-1 text-default-600 list-disc pl-5">
                  <li>
                    Developed using React Framework and Deployed on Netlify
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-primary" />
              <h2 className="text-xl font-bold">
                Certifications & Achievements
              </h2>
            </div>
            <ul className="space-y-2 text-default-600 list-disc pl-5">
              <li>
                CS50&apos;s Introduction to Artificial Intelligence with Python
              </li>
              <li>CS50x Introduction to Programming</li>
              <li>GATE 2025 CS/IT Qualified</li>
              <li>GATE 2025 AI and DS Qualified</li>
            </ul>
          </div>

          {/* Interests Section */}
          <div className="bg-content2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-primary" />
              <h2 className="text-xl font-bold">Interests</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-default-100 text-default-600 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-default-100 text-default-600 rounded-full text-sm">
                Data Science
              </span>
              <span className="px-3 py-1 bg-default-100 text-default-600 rounded-full text-sm">
                Low Level Hardware
              </span>
              <span className="px-3 py-1 bg-default-100 text-default-600 rounded-full text-sm">
                Web Development
              </span>
              <span className="px-3 py-1 bg-default-100 text-default-600 rounded-full text-sm">
                Algorithms
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
