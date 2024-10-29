import { FaLinkedin, FaGithub } from "react-icons/fa";



function Home() {

  const project = {
    "projects": [
      
      {
        "name": "BiblioConnect",
        "description": "A web app that where you choose books you like based on first impression, and we recommend books based on that.",
        "status": "Completed",
        "github": "https://github.com/Biblio-Connect/BiblioConnect",
        "tech": "React.js, SQLite, Node.js, Typescript, TailwindCSS",
        "link": "https://biblioconnect.seanfinch.com/",//",
        "notes": "",
        "githubLinkable": "Github"
      },
      {
        "name": "Open Legislation",
        "description": "Website that uses open source data to show the current bills in 118th congress",
        "status": "Completed",
        "github": "",
        "tech": "React, JavaScript, TailwindCSS",
        "link": "https://openlegislation.asahoo.dev",
        "notes": "HackHarvard 2024: Open Source Track Winner",
        "githubLinkable": "Github"
      },
      {
        "name": "Schedule Northeastern",
        "description": "Website that helps student build an optimal schedule",
        "status": "In Progress (Early stages)",
        "github": "https://github.com/pokhrel-sh/schedulenortheastern",
        "tech": "React, Node, Express",
        "link": "",
        "notes": "",
        "githubLinkable": "Github"
      },
      {
        "name": "Portfolio Site",
        "description": "A project for this portfolio site",
        "status": "Always In Progress",
        "github": "https://github.com/pokhrel-sh/shishirpokhrel.com",
        "tech": "React.js, Typescript, TailwindCSS",
        "link": "https://shishirpokhrel.com",
        "notes": "",
        "githubLinkable": "Github"
      },
      {
        "name": "Travel Northeastern",
        "description": "A yelp-like website for Northeastern students to rate the northeastern programs",
        "status": "In Progress (Early stages)",
        "github": "",
        "tech": "",
        "link": "",
        "notes": "",
        "githubLinkable": "Github"
      }, 
      {
        "name": "HowMuchIStoleFromAmazon",
        "description": "Shows how much I stole from Amazon",
        "status": "In Progress (Early stages)",
        "github": "",
        "tech": "",
        "link": "",
        "notes": "",
        "githubLinkable": "Github"
      },
      {
        "name": "HowMuchCanYouStealFromAmazon",
        "description": "Website that calculates how much you can steal from Amazon",
        "status": "In Progress (Early stages)",
        "github": "",
        "tech": "",
        "link": "",
        "notes": "",
        "githubLinkable": "Github"
      }
    ]
  }

  const currentClasses = [
    {
      "id": "CS4520",
      "name": "Mobile Development",
      "tech": "Swift, Firebase"
    },
    {
      "id": "CS4530",
      "name": "Software Engineering",
      "tech": "TypeScript, React"
    },
    {
      "id": "CS4550",
      "name": "Web Development",
      "tech": "TypeScript, React, Bootstrap"
    },
    {
      "id": "THTR1125",
      "name": "Improvisation",
      "tech": "Talking to people"
    }
  ]

  // const pastClasses = [
  //   {
  //     "name": "CS3500",
  //     "description": "Object Oriented Design",
  //     "tech": ""
  //   },
  //   {
  //     "name": "CS2500",
  //     "description": "Fundamentals of Computer Science",
  //     "tech": ""
  //   },
  //   {
  //     "name": "CS1800",
  //     "description": "Discrete Structures",
  //     "tech": ""
  //   },
  //   {
  //     "name": "CS1200",
  //     "description": "Computer Science 1",
  //     "tech": ""
  //   }
  // ]

  return (
    <div className="flex flex-col items-center p-4">
      <header className="bg-gray-200 w-full text-center py-4">
        <h1 className="text-3xl">Shishir Pokhrel</h1>
        <p>Computer Science @ Northeastern University</p>
      </header>

      <section className="bg-gray-200 w-full my-4 text-center p-4">
        <h2>About Me</h2>
        <p>
          I'm a sophomore studying Computer Science. I enjoy learning new technologies and exploring server projects with Docker. Currently looking for software engineering opportunities for Spring & Summer 2025.
        </p>
        <div className="mt-4">
          <h3>Connect with me:</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/shishir-pokhrel/">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.github.com/pokhrel-sh">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 w-full my-4 p-4 text-center">
        <h2>Skills and Technologies</h2>
        <p><strong>Languages:</strong> Java, JavaScript, TypeScript, SQL, Swift, Kotlin, HTML, CSS, C, C++</p>
        <p><strong>Frameworks:</strong> JUnit 5, React, Node.js, Express.js, Tailwind CSS, Bootstrap</p>
        <p><strong>Databases:</strong> SQLite, MongoDB, Redis</p>
        <p><strong>Tools:</strong> AWS, Git, GitHub, Bash Shell, LaTeX, Make</p>
      </section>

      <section className="my-4 w-full text-center">
        <h2 className="mb-5">Current Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-4">
          {currentClasses.map((cls) => (
            <div key={cls.id} className="border-2 bg-gray-50 p-4 flex flex-col">
              <h3>{cls.id} - {cls.name}</h3>
              <p>{cls.tech}</p>
            </div>
          ))}
        </div>
        <button className="border-2 bg-gray-200 mt-4">View All Classes</button>
      </section>

      <section className="my-4 w-full text-center">
        <h2 className="mb-5">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-4">
          {project.projects.map((proj) => (
            <div key={proj.name} className="bg-gray-200 p-4">
              <h3 className="text-2xl">
                <a href={proj.link} className="hover:text-blue-800">{proj.name}</a>
                <span className="text-sm"> &nbsp; {proj.tech}</span>
              </h3>
              <p>{proj.description}</p>
              <p><strong>Status:</strong> {proj.status}</p>
              {proj.github && (
                <button className="bg-gray-300 hover:text-blue-800">
                  <a href={proj.github}>Github</a>
                </button>
              )}
              <p className="pb-5">{proj.notes}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
