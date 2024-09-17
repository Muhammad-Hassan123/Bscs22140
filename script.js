const profileData = {
    name: "Muhammad Hassan Sajjad",
    title: "Web Developer | Problem Solver",
    profileImg: "assets/images/hassan_portfolio_img.jpg",
    introductionVideo: "",

    skills: {
        hardSkills: ["C++", "Python", "HTML/CSS"],
        softSkills: ["Communication", "Teamwork", "Problem-Solving"]
    },

    projects: [{
            title: "Chess Game",
            date: "December 2022",
            description: "Developed a chess game in C++ as part of a CFP course."
        },
        {
            title: "Paintbrush Application",
            date: "May 2023",
            description: "Created a paintbrush application using the Tkinter library in Python during an OOP course."
        },
        {
            title: "Statistical Analysis on Patients in Punjab",
            date: "May 2024",
            description: "Conducted statistical analysis on patient data from Punjab using Python and libraries such as pandas, matplotlib, and seaborn."
        }
    ],

    education: [{
            degree: "Bachelor of Science in Computer Science",
            school: "Information Technology University Punjab (ITU)",
            date: "Expected Graduation: 2026"
        },
        {
            degree: "FSc. Pre-Engineering",
            school: "Forman Christian College (FCCU)",
            date: "2020-2022"
        },
        {
            degree: "Matriculation",
            school: "Divisional Public School Model Town (DPS)",
            date: "2018-2020"
        }
    ],

    contact: {
        phone: "+92-3104970933",
        email: "muhammadhassan3172003@gmail.com",
        linkedIn: "https://www.linkedin.com/in/muhammad-hassan-72a773241/"
    }
};
// Populating Data
document.getElementById("profile-name").textContent = profileData.name;
document.getElementById("profile-title").textContent = profileData.title;
document.getElementById("profile-img").src = profileData.profileImg;

if (profileData.introductionVideo) {
    document.getElementById("profile-video").src = profileData.introductionVideo;
} else {
    document.getElementById("profile-video").style.display = "none";
}

const hardSkillsList = document.getElementById("hard-skills");
profileData.skills.hardSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    hardSkillsList.appendChild(li);
});

const softSkillsList = document.getElementById("soft-skills");
profileData.skills.softSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    softSkillsList.appendChild(li);
});

const projectList = document.getElementById("project-list");
profileData.projects.forEach(project => {
    const projectDiv = document.createElement("article");
    projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p>Date: ${project.date}</p>
        <p>Description: ${project.description}</p>
    `;
    projectList.appendChild(projectDiv);
});

const educationList = document.getElementById("education-list");
profileData.education.forEach(edu => {
    const eduDiv = document.createElement("div");
    eduDiv.innerHTML = `
        <h2>${edu.degree}</h2>
        <p>${edu.school}, ${edu.date}</p>
    `;
    educationList.appendChild(eduDiv);
});

document.getElementById("contact-phone").textContent = `Phone: ${profileData.contact.phone}`;
document.getElementById("contact-email").textContent = `Email: ${profileData.contact.email}`;
document.getElementById("contact-linkedin").innerHTML = `LinkedIn: <a href="${profileData.contact.linkedIn}" target="_blank">${profileData.contact.linkedIn}</a>`;