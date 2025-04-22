import { useState } from "react";

const sections = [
  {
    title: "What We Offer",
    content: (
      <ul className="list-disc pl-5">
        <li><strong>Integrated Learning Experience:</strong> Watch lecture videos, use the live code editor, and take notes—all in one place.</li>
        <li><strong>Advanced Code Editor:</strong> Real-time coding with syntax highlighting, code completion, and error detection.</li>
        <li><strong>Note-Taking System:</strong> Write, save, and organize notes synced with lecture videos and code snippets.</li>
        <li><strong>User-Friendly Interface:</strong> Intuitive design for smooth navigation.</li>
      </ul>
    ),
  },
  {
    title: "Why Choose CodeLecture Hub?",
    content: (
      <ul className="list-disc pl-5">
        <li><strong>Unified Platform:</strong> Eliminates the need to switch between multiple tools.</li>
        <li><strong>Interactive Learning:</strong> Real-time coding while watching lectures.</li>
        <li><strong>Scalability and Flexibility:</strong> Supports various programming languages and topics.</li>
        <li><strong>Future-Ready Features:</strong> Includes tools like syntax highlighting and error detection.</li>
      </ul>
    ),
  },
  {
    title: "How It Works",
    content: (
      <ol className="list-decimal pl-5">
        <li>Login: Securely log into your account.</li>
        <li>Explore: Browse through our library of lectures.</li>
        <li>Learn and Code: Watch lectures and code simultaneously.</li>
        <li>Take Notes: Jot down key points and code snippets.</li>
      </ol>
    ),
  },
  {
    title: "Work in Progress",
    content: (
      <ul className="list-disc pl-5">
        <li>Implementing a code compilation system for real-time output generation.</li>
        <li>Expanding support for additional programming languages.</li>
      </ul>
    ),
  },
  {
    title: "Join the Revolution in Learning",
    content: (
      <p>At CodeLecture Hub, we believe learning to code should be interactive, immersive, and rewarding.</p>
    ),
  },
];

export default function About() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-red-900 text-white p-5 text-center text-xl font-bold">
        About CodeLecture Hub
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
        <section>
          <h2 className="text-red-900 text-2xl font-semibold mb-4">Welcome to CodeLecture Hub!</h2>
          <p className="mb-4">
            A seamless, integrated platform designed to transform the way you learn programming. CodeLecture Hub bridges the gap between learning and practice by combining lecture viewing, live coding, and note-taking into a single, user-friendly application.
          </p>
        </section>

        <section>
          <h2 className="text-red-900 text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            We aim to empower learners by providing an all-in-one platform where they can gain theoretical knowledge, practice real-time coding, and document their learning—all in a cohesive and intuitive environment.
          </p>
        </section>

        {/* Clickable Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mt-6">
            <h2
              className="text-red-900 text-xl font-semibold cursor-pointer hover:underline"
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              {section.title}
            </h2>
            {activeSection === index && <div className="mt-2">{section.content}</div>}
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center p-4 bg-red-900 text-white mt-6">
        &copy; 2024 CodeLecture Hub. All Rights Reserved.
      </footer>
    </div>
  );
}
