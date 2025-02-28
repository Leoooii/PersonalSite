// Afișează anul curent
const currentYear = new Date().getFullYear();
document.getElementById("time").textContent = currentYear;

// Funcție pentru calcularea secundelor de la 10 ianuarie 2020
function calculateSecondsSince2020() {
    const startDate = new Date("2020-01-10T00:00:00Z");
    const now = new Date();
    const differenceInMilliseconds = now - startDate;
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    return differenceInSeconds;
}

// Actualizează secundele
function updateSeconds() {
    const seconds = calculateSecondsSince2020();
    document.getElementById("seconds-since-2020").textContent = `${seconds.toLocaleString()} seconds`;
}
updateSeconds();
setInterval(updateSeconds, 1000);

// Gestionare click pe elementele <li>
const projectItems = document.querySelectorAll(".project-item");

const projectDescriptions = {
    "Practice at RATEN-CITON": "During my internship at RATEN-CITON, I gained hands-on experience in system engineering, contributing to projects focused on optimizing hydrotechnical processes and infrastructure.",
    "Employee at DIVERTILAND": "As an employee at DIVERTILAND, I developed teamwork and communication skills while managing daily operations and ensuring a positive experience for visitors.",
    "Practice at PROJECT 13": "My internship at PROJECT 13 allowed me to collaborate on innovative engineering solutions, enhancing my problem-solving skills in real-world scenarios.",
    "Web platform for managing a dental clinic": "I developed a web platform for a dental clinic using modern JavaScript frameworks, enabling efficient appointment scheduling and patient record management.",
    "Web platform for presenting and managing the stock of a DIY company": "I built a web platform using Next.js and Firebase, allowing the owner of a DIY company to showcase and manage over 800 products, resulting in increased quote requests."
};

projectItems.forEach(item => {
    item.addEventListener("click", () => {
        projectItems.forEach(otherItem => {
            const existingP = otherItem.querySelector("p");
            if (existingP) {
                existingP.remove();
            }
        });

        const existingP = item.querySelector("p");
        if (existingP) {
            existingP.remove();
        } else {
            const descriptionP = document.createElement("p");
            const descriptionText = projectDescriptions[item.textContent] || "No description available.";
            descriptionP.textContent = descriptionText;
            item.appendChild(descriptionP);
        }
    });
});