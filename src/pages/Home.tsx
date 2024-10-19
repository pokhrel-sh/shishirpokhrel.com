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


    <div className="place-content-center flex-auto">
      <div className="bg-gray-200 ">
      <div className="text-3xl ">Shishir Pokhrel</div>
      <div>Computer Science @ Northeastern University</div>
      </div>
      <div className="bg-gray-200 mx-60 text-center">
        <div className="mt-8">About me</div>
        <div> My name is Shishir Pokhrel. I am a sophomore at Northeastern University studying Computer Science. I love learning new technologies everyday and have been exploring a lot of the things recently. I just bought a mini pc to use it as a server to test out dockers and other cool self-hosted projects. I am taking classes such as Software Engineering, Mobile Developement, and Web Developement. I am currently looking for a software engineering opportunities for Spring & Summer 2025. I like watching and playing Tennis (Kygrios is my Favorite player). I like walking around alone at 10pm in the night, cus why not
          <div>
            <div>Connect with me: </div>
            <div>
              <div className="text-center">
              <a href="https://www.linkedin.com/in/shishir-pokhrel/"><FaLinkedin /></a>
              <a href="https://www.github.com/pokhrel-sh"><FaGithub /></a>
              </div>
          </div>

        </div>
      </div>
      </div>
      <div className="my-8 mx-16 text-center bg-gray-300">
        <div>Skills and Technologies I've used: </div>
        <div>Languages: Java, JavaScript, TypeScript, SQL, Swift, Kotlin, HTML, CSS, C, C++ (unit testing)</div>
        <div>Frameworks: JUnit 5, React, Node.js, Express.js, Tailwind CSS, Bootstrap</div>
        <div>Databases: SQLite, MongoDB, Redis</div>
        <div>Developer Tools: Amazon Web Services (AWS), Git, GitHub, Bash Shell, LaTeX, Make</div>
      </div>

      <div>
        <div className="mt-8 mb-5">Current Classes</div>
        <div className="grid grid-cols-2 border-2 bg-gray-200">
          {currentClasses.map((classes) => {
            return (
              <div className="border-2 bg-gray-50 flex-auto">
                <div>{classes.id}  - {classes.name} </div>
                <div>{classes.name}</div>
                <div className="mb-4">{classes.tech}</div>
              </div>
            )
          })}
        </div>
        <button className="border-2 bg-gray-200 mt-4">View all Classses (button doesnt work, currently building the website from scratch)</button>
      </div>

      
      <div>Projects</div>
        <div className="grid grid-cols-2 gap-4 bg-gray-100 flex-auto">
          {project.projects.map((projects) => {
            return (
                <div className="bg-gray-200 px-4 my-4">
                <button className="bg-gray-200 pt-5 text-3xl hover:text-blue-800"><a href={projects.link}>{projects.name}</a><span className="text-sm">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{projects.tech}</span></button>
                <div>{projects.description}</div>
                <div>{projects.status}</div>
                <button className="bg-gray-300 hover:text-blue-800"><a href={projects.github}>{projects.githubLinkable}</a></button>
                <div>{projects.tech}</div>
                <div>{projects.link}</div>
                <div className="pb-5">{projects.notes}</div>
                </div>
            );
          })}
        </div>

    </div>
  );
}

export default Home;
