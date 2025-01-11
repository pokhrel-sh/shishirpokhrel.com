import { useState } from 'react';
import photo from '../asset/photo.jpg';
import bike from '../asset/bike.jpg';
import resume from '../asset/ShishirPokhrel.pdf';
import {Mail, X, Search, FileText } from 'lucide-react';

const PersonalWebsite = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [showAllClasses, setShowAllClasses] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleEmailPopup = () => setShowEmailPopup(!showEmailPopup);
  const toggleImagePopup = () => setShowImagePopup(!showImagePopup);
  const toggleResumePopup = () => setShowResumePopup(!showResumePopup);
  const toggleAllClasses = () => setShowAllClasses(!showAllClasses);
  const toggleAllProjects = () => setShowAllProjects(!showAllProjects);

  const getSemesterColor = (index: any) => {
    if (index < 4) return 'bg-blue-200';
    if (index < 8) return 'bg-red-200';
    if (index < 12) return 'bg-yellow-200';
    if (index < 16) return 'bg-green-200';
    if (index < 20) return 'bg-blue-200';
    return 'bg-gray-200';
  };

  const currentClasses = [
    { "name": "Large Scale Information Retrieval", "code": "DS 4300", "semester": "Spring 2025" },
    { "name": "Programming in C++", "code": "CS 3520", "semester": "Spring 2025" },
    { "name": "Systems", "code": "CS 3650", "semester": "Spring 2025" },
    { "name": "Intro to Cybersecurity", "code": "CY 2550", "semester": "Spring 2025" }
  ];

  const allClasses = [
    ...currentClasses,
    { "name": "Software Engineering", "code": "CS 4530", "semester": "Fall 2024" },
    { "name": "Web Development", "code": "CS 4550", "semester": "Fall 2024" },
    { "name": "Mobile Development", "code": "CS 4520", "semester": "Fall 2024" },
    { "name": "Improvisation", "code": "THTR 1125", "semester": "Fall 2024" },
    { "name": "Introduction to Software Development Tooling", "code": "CS 4973", "semester": "Summer 2 2024" },
    { "name": "Algorithms", "code": "CS 3000", "semester": "Summer 2 2024" },
    { "name": "Object Oriented Design", "code": "CS 3500", "semester": "Summer 1 2024" },
    { "name": "Cloud Computing", "code": "CS 4973", "semester": "Summer 1 2024" },
    { "name": "Database Design", "code": "CS 3200", "semester": "Spring 2024" },
    { "name": "Mathematics of Data Models", "code": "CS 2810", "semester": "Spring 2024" },
    { "name": "Mathematical Reasoning", "code": "CS 1365", "semester": "Spring 2024" },
    { "name": "Fundamentals of Computer Science 2", "code": "CS 2510", "semester": "Spring 2024" },
    { "name": "Discrete Structures", "code": "CS 1800", "semester": "Fall 2023" },
    { "name": "Fundamentals of Computer Science 1", "code": "CS 2500", "semester": "Fall 2023" },
    { "name": "Calculus 1", "code": "MATH 1341", "semester": "Fall 2023" },
    { "name": "English Writing", "code": "ENGW 1111", "semester": "Fall 2023" }
  ];



  // Featured projects
  const featuredProjects = [
    {
      title: "SwiftBudget",
      description: "A budgeting app with hierarchical accounts and transaction categories with access control for parents and children",
      color: "bg-blue-500",
      github: "https://github.com/pokhrel-sh/SwiftBudget",
      demo: "/noDemo"
    },
    {
      title: "Spreadsheet",
      description: "Build a spreadsheet application from scratch with live sharing, version control and API integration features",
      color: "bg-red-500",
      github: "/noCode",
      demo: "/noDemo"
    },
    {
      title: "Open Legislation",
      description: "Track and view 118th congress bills and resolutions with a RESTful API and a user-friendly interface",
      color: "bg-yellow-500",
      github: "https://github.com/ryankamiri/OpenLegislation",
      demo: "https://devpost.com/software/openlegislation"
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      title: "Marble Solitaire",
      description: "A Java applicatioin to play the classic Marble Solitaire, English Solitaire and Triangle Solitaire game with a GUI",
      color: "bg-green-500",
      github: "/noCode",
      demo: "/noDemo"
    },
    {
      title: "BiblioConnect",
      description: "A book recommending platform that connects users with similar reading interests and provides personalized recommendations",
      color: "bg-purple-500",
      github: "https://github.com/Biblio-Connect/BiblioConnect",
      demo: "/noDemo"
    },
    {
      title: "VideoStream",
      description: "Real time video streaming application with WebRTC, Socket.io and Node.js for peer-to-peer communication using UDP connections",
      color: "bg-indigo-500",
      github: "https://github.com/pokhrel-sh/VideoStream",
      demo: "/noDemo"
    }
  ];


  const resumeData = {
    education: {
      degree: "Bachelor of Science in Computer Science with Software",
      university: "Northeastern University",
      graduationDate: "Expected Graduation: May 2027"
    },
    technicalSkills: {
      languages: ["Java", "JavaScript", "TypeScript", "SQL", "Kotlin", "Swift", "C", "C++", "Python"],
      frameworks: ["React", "Node.js", "Express", "Jest", "JUnit", "SQLite", "MongoDB", "Redis"],
      tools:["Amazon Web Services (AWS)", "Docker", "Git", "Bash", "LaTeX", "Make"]
    },
    experience: [
      {
        title: "Software Development Mentor",
        company: "Oasis at Northeastern",
        date: "Jan 2025 - Current",
        responsibilities: [
          "Taught over 50 students web development and back-end fundamentals as part of full-stack development training",
          "Managed sprint plans and provided mentorship to enhance project management and team performance for over 10 teams"
        ]
      },
      {
        title: "Undergraduate Teaching Assistent",
        company: "Khoury College of Computer Sciences, Northeastern University",
        date: "Sep 2024 - Present",
        responsibilities: [
          "Led weekly office hours for over 200 students and graded homework for CS 2510 (Java) and CS 2500 (Kotlin)",
          "Held 1-on-1 meetings to assist students with quiz review & homework help, and provided personalized support"
        ]
      },
      {
        title: "Software Developer",
        company: "Oasis at Northeastern",
        date: "Sep 2024 - Dec 2024",
        responsibilities: [
          "Led a team of 3 to develop Travel Northeastern, a platform for rating and reviewing international programs, focusing on user-friendly design and functionality",
          "Presented the project to 50+ people, highlighting technical architecture and impact on campus engagement",
        ]
      },
      {
        title: "Undergraduate Research Assistant",
        company: "The PAAWS Study, Northeastern University",
        date: "Jun 2024 - Aug 2024",
        responsibilities: [
          "Annotated over 150 hours of video for training and testing machine learning models for wearable devices",
          "Ensured consistent data labeling using in-house tools, minimizing errors and improving model performance",
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">     
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold">
              <span className="text-blue-500">Sh</span>
              <span className="text-red-500">is</span>
              <span className="text-yellow-500">hir</span>
              <span className="text-blue-500"> </span>
              <span className="text-blue-500">Po</span>
              <span className="text-green-500">kh</span>
              <span className="text-red-500">rel</span>
            </a>
            
            <div className="flex-grow max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Thank you for visiting. Have a splendid day ☕ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(nothing to search here)"
                  className="w-full py-2 px-4 pr-10 border border-gray-200 rounded-full bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleEmailPopup} className="text-gray-700 hover:underline">
                Emails
              </button>
              <button onClick={toggleImagePopup} className="text-gray-700 hover:underline">
                Images
              </button>
              <button 
                onClick={toggleResumePopup}
                className="flex items-center space-x-1 text-gray-700 hover:underline"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
              <a href="https://github.com/pokhrel-sh/" className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="User Icon" />
              </a>
              <a href="https://linkedin.com/in/shishir-pokhrel/" className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="App Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-8 mb-12">
          <img
            src={photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">CS + Software @ Northeastern University</h2>
            <p className="text-gray-600 mb-4">
            A second-year Computer Science student at Northeastern University with a passion for 
            full-stack development. Experienced in building impactful 
            applications using TypeScript, JavaScript, Swift, and Java.
            I enjoy tackling problems while exploring new technologies. Currently seeking software 
            engineering opportunities for Summer & Fall 2025, I bring a mix of practical development experience, 
            teaching ability, and collaborative spirit to every project.</p>
            <a href={resume}
              download="ShishirPokhrel.pdf"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
        

        <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Current Classes</h3>
          <button 
            onClick={toggleAllClasses}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showAllClasses ? 'Show Current Classes' : 'View All Classes'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(showAllClasses ? allClasses : currentClasses).map((class_, index) => (
            <div 
              key={index} 
              className="bg-gray-300 p-4 rounded-lg shadow-sm flex flex-col space-y-2"
            >
              <div className="flex-grow">
                <div className="font-medium text-gray-800 mb-1">{class_.name}</div>
                <div className="text-gray-500 text-sm">{class_.code}</div>
              </div>
              <div className="flex justify-end">
                <span className={`${getSemesterColor(index)} text-gray-700 text-xs px-3 py-1 rounded-full whitespace-nowrap min-w-[90px] text-center`}>
                  {class_.semester}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Projects</h3>
            <button 
              onClick={toggleAllProjects}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {showAllProjects ? 'Show Featured Projects' : 'View All Projects'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllProjects ? allProjects : featuredProjects).map((project, index) => (
              <div 
                key={index}
                className={`${project.color} text-white rounded-lg p-6 flex flex-col`}
              >
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm opacity-90 mb-4">{project.description}</p>
                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showEmailPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <X onClick={toggleEmailPopup} className="cursor-pointer" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">pokhrel.sh@northeastern.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">me@shishirpokhrel.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">pokhrels.work@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {showImagePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">This is me</h2>
                <X onClick={toggleImagePopup} className="cursor-pointer" />
              </div>
              <img
                src={bike}
                alt="Profile"
                className="rounded-lg w-80 h-80 object-cover"
              />
            </div>
          </div>
        )}

        {showResumePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full mx-4">  {/* Increased max-w-4xl to max-w-6xl */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Resume</h2>
                <X onClick={toggleResumePopup} className="cursor-pointer" />
              </div>

              <div className="space-y-6 overflow-y-scroll max-h-[70vh]"> {/* Adjusted max-h-96 to max-h-[80vh] for more height */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="font-medium">{resumeData.education.degree}</div>
                    <div className="text-gray-600">{resumeData.education.university}</div>
                    <div className="text-gray-500">{resumeData.education.graduationDate}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Skills</h3>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="grid grid-cols-2 gap-4 ">
                      <div className='border-black'>
                        <div className="font-medium mb-1">Languages</div>
                        <div className="text-gray-600">{resumeData.technicalSkills.languages.join(", ")}</div>
                        <div>---------------------------------------------</div>

                      </div>
                      <div>
                        <div className="font-medium mb-1">Frameworks</div>
                        <div className="text-gray-600">{resumeData.technicalSkills.frameworks.join(", ")}</div>
                        <div>---------------------------------------------</div>

                      </div>
                      <div>
                        <div className="font-medium mb-1">Tools</div>
                        <div className="text-gray-600">{resumeData.technicalSkills.tools.join(", ")}</div>
                        <div>---------------------------------------------</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience</h3>
                  <div className="bg-gray-50 p-4 rounded">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index}>
                        <div className="font-medium">{exp.title}</div>
                        <div className="text-gray-600">{exp.company}</div>
                        <div className="text-gray-500">{exp.date}</div>
                        <ul className="list-disc ml-4 mt-2 mb-5 text-gray-600">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                        <div>----------------------------------------------------------------------------------------</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalWebsite;
