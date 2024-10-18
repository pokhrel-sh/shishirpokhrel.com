
function Home() {

  const project = {
    "projects": [
      {
        "name": "Portfolio Site",
        "description": "A project for this portfolio site",
        "status": "Always In Progress",
        "github": "https://github.com/shishirpokhrel/portfolio-site",
        "tech": "React.js, Typescript, TailwindCSS",
        "link": "https://shishirpokhrel.com",
        "notes": ""
      },
      {
        "name": "BiblioConnect",
        "description": "A web app that where you choose books you like based on first impression, and we recommend books based on that.",
        "status": "Completed",
        "github": "https://github.com/Biblio-Connect/BiblioConnect",
        "tech": "React.js, SQLite, Node.js, Typescript, TailwindCSS",
        "link": "",
        "notes": ""
      },
      {
        "name": "Open Legislation",
        "description": "Website that uses open source data to show the current bills in 118th congress",
        "status": "Completed",
        "github": "",
        "tech": "React, JavaScript, TailwindCSS",
        "link": "https://openlegislation.asahoo.dev",
        "notes": "HackHarvard 2024: Open Source Track Winner"
      },
      {
        "name": "Schedule Northeastern",
        "description": "Website that helps student build an optimal schedule",
        "status": "In Progress (Early stages)",
        "github": "https://github.com/pokhrel-sh/schedulenortheastern",
        "tech": "React, Node, Express",
        "link": "",
        "notes": ""
      },
      {
        "name": "Travel Northeastern",
        "description": "A yelp-like website for Northeastern students to rate the northeastern programs",
        "status": "In Progress (Early stages)",
        "github": "",
        "tech": "",
        "link": "",
        "notes": ""
      },
      {
        "name": "HowMuchCanIStoleFromAmazon",
        "description": "Shows how much I stole from Amazon",
        "status": "In Progress (Early stages)",
        "github": "",
        "tech": "",
        "link": "",
        "notes": ""
      },
      {
        "name": "HowMuchCanYouStealFromAmazon",
        "description": "Website that calculates how much you can steal from Amazon",
        "status": "In Progress (Early stages)",
        "github": "",
        "tech": "",
        "link": "",
        "notes": ""
      }
    ]
  }

  const currentClasses = [
    {
      "name": "CS4520",
      "description": "Mobile Development",
      "tech": ""
    },
    {
      "name": "CS4530",
      "description": "Software Engineering",
      "tech": ""
    },
    {
      "name": "CS4550",
      "description": "Web Development",
      "tech": ""
    },
    {
      "name": "CS1125",
      "description": "Mobile Development",
      "tech": ""
    }
  ]

  const pastClasses = [
    {
      "name": "CS3500",
      "description": "Object Oriented Design",
      "tech": ""
    },
    {
      "name": "CS2500",
      "description": "Fundamentals of Computer Science",
      "tech": ""
    },
    {
      "name": "CS1800",
      "description": "Discrete Structures",
      "tech": ""
    },
    {
      "name": "CS1200",
      "description": "Computer Science 1",
      "tech": ""
    }
  ]

  return (


    <div>
      <div>Shishir Pokhrel</div>
      <div>Computer Science @ Northeastern University</div>
      <div>
        <div className="mt-8">About me</div>
        <div>
          I am an aspiring Software Engineer / Developer. I am currently interested in 
          Web Development, Mobile Development. 
        </div>
      </div>
      <div>
        <div>Skills and Technologies I've used: </div>
        <div>Languages: Java, JavaScript, TypeScript, SQL, Swift, Kotlin, HTML, CSS, C, C++ (unit testing)</div>
        <div>Frameworks: JUnit 5, React, Node.js, Express.js, Tailwind CSS, Bootstrap</div>
        <div>Databases: SQLite, MongoDB, Redis</div>
        <div>Developer Tools: Amazon Web Services (AWS), Git, GitHub, Bash Shell, LaTeX, Make</div>
      </div>

      <div>
        <div className="mt-8 mb-5">Current Classes</div>
        <div>
          {currentClasses.map((classes) => {
            return (
              <div>
                <div>{classes.name}</div>
                <div>{classes.description}</div>
                <div className="mb-4">{classes.tech}</div>
              </div>
            )
          })}
        </div>
        <button className="border-2 bg-gray-200 mt-4">View all Classses (button doesnt work, currently building the website from scratch)</button>
      </div>

      
      <div> Projects</div>
      <div>
        {project.projects.map((projects) => {
          return (
            <div className="border-2">
              <div className="">{projects.name}</div>
              <div>{projects.description}</div>
              <div>{projects.status}</div>
              <div>{projects.github}</div>
              <div>{projects.tech}</div>
              <div>{projects.link}</div>
              <div>{projects.notes}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
