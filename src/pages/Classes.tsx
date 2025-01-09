function Classes(){

    const pastClasses = [
        {
            "name": "CS4530",
            "description": "Software Engineering",
            "semester": "Fall 2024",
            "courseDescription": "Lifecycle of Software Engineering",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS4550",
            "description": "Web Development",
            "semester": "Fall 2024",
            "courseDescription": "Full stack development",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS4520",
            "description": "Mobile Development",
            "semester": "Fall 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "THTR1125",
            "description": "Improvisation",
            "semester": "Fall 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS4973",
            "description": "Introduction to Software Development Tooling",
            "semester": "Summer 2 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS3000",
            "description": "Algorithms",
            "semester": "Summer 2 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS3500",
            "description": "Object Oriented Design",
            "semester": "Summer 1 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS4973",
            "description": "Cloud Computing",
            "semester": "Summer 1 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS3200",
            "description": "Database Design",
            "semester": "Spring 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS2810",
            "description": "Mathematics of Data Models",
            "semester": "Spring 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS1365",
            "description": "Mathematical Reasoning",
            "semester": "Spring 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS2510",
            "description": "Fundamental of Computer Science 2",
            "semester": "Spring 2024",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS1800",
            "description": "Discrete Structures",
            "semester": "Fall 2023",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "CS2500",
            "description": "Fundamental of Computer Science 1",
            "semester": "Fall 2023",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "MATH1341",
            "description": "Calculus 1",
            "semester": "Fall 2022",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        },
        {
            "name": "ENGW1111",
            "description": "English Writing",
            "semester": "Fall 2022",
            "courseDescription": "",
            "skills": "",
            "courseLink": ""
        }
    ];
    


    return(
        <div>
            <h1 className="text-3xl">All Classes</h1>
            <div className="grid grid-cols-2 gap-4">
                {pastClasses.map((classObj) => {
                    return (
                        <div className="bg-white rounded-md shadow-lg p-4">
                            <h2 className="text-lg font-bold mb-2">{classObj.name}</h2>
                            <p className="text-gray-500">{classObj.description}</p>
                            <p className="text-blue-500 mt-2">{classObj.semester}</p>
                            <p className="text-gray-500">{classObj.courseDescription}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Classes;