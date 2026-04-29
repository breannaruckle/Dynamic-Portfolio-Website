/*
  JavaScript 7th Edition
  Dynamic Portfolio Website

  Author: Bre Ruckle
  Date:   04/10/2026

  Filename: portfolio.js
*/
const profile = {
  name: "Bre Ruckle",
  about: "I am a web development student focused on building interactive and user-friendly websites using HTML, CSS, and JavaScript. Through my coursework and personal projects, I have developed a strong foundation in front-end development, including DOM manipulation, responsive design, and form validation. I enjoy combining clean design with functional code, creating websites that are both visually appealing and easy to navigate. My projects, such as a dynamic portfolio site and a multi-page bird information website, reflect my ability to apply programming concepts to real-world scenarios. I am continuously learning and improving my skills, with an interest in expanding into more advanced JavaScript techniques and modern web design practices. I take pride in writing organized, readable code and creating projects that demonstrate both creativity and technical understanding.",
  
  hobbies: [
    "Bird watching and nature exploration",
    "Photography",
    "Reading about technology and design",
    "Practicing coding and building web projects"
  ],

  blogs: [
    "Getting Started with JavaScript",
    "Building My First Website",
    "What I Learned About DOM Manipulation",
    "Designing User-Friendly Web Pages"
  ],

  gallery: [
    "images/photo1.png",
    "images/photo2.png",
    "images/photo3.jpg",
    "images/photo4.png",
    "images/photo5.jpg"
  ]

};

const courses = [
    {
        name: "IS245 - JavaScript Programming",
        learned: [
            "Variables, loops, and conditionals",
            "DOM manipulation and event handling",
            "Form validation techniques"
        ]
    },
    {
        name: "WEB110 - Web Design Fundamentals",
        learned: [
            "HTML structure and semantic elements",
            "CSS styling and layouts",
            "Responsive web design"
        ]
    },
    {
        name: "CS101 - Introduction to Programming",
        learned: [
            "Basic programming logic",
            "Problem solving techniques",
            "Debugging and testing code"
        ]
    },
    {
        name: "CIS120 - Computer Applications",
        learned: [
            "Microsoft Word, Excel, and PowerPoint",
            "Document formatting and presentation skills",
            "Data organization and management"
        ]
    },
    {
        name: "DB150 - Database Concepts",
        learned: [
            "Database structure and tables",
            "Primary and foreign keys",
            "Basic SQL queries"
        ]
    },
    {
        name: "IS200 - Information Systems",
        learned: [
            "Role of IT in business",
            "System components and processes",
            "Data storage and retrieval"
        ]
    },
    {
        name: "SEC101 - Cybersecurity Basics",
        learned: [
            "Online safety and security practices",
            "Identifying cyber threats",
            "Protecting personal information"
        ]
    },
    {
        name: "NET110 - Networking Fundamentals",
        learned: [
            "Basic networking concepts",
            "Internet communication protocols",
            "Network security basics"
        ]
    },
    {
        name: "HCI210 - Human Computer Interaction",
        learned: [
            "User interface design principles",
            "User experience (UX) basics",
            "Accessibility and usability"
        ]
    },
    {
        name: "PRJ250 - Project Development",
        learned: [
            "Planning and organizing projects",
            "Version control basics",
            "Testing and improving applications"
        ]
    }
];

const projects = [
  {
    title: "Native Missouri Birds Website",
    logo: "images/birds.png",
    description: "A multi-page website that explores Missouri’s native bird species...",
    tech: "HTML, CSS, JavaScript",
    github: "https://breannaruckle.github.io/Missouri-Ornithology-Project/"
  },
  {
    title: "Dynamic Portfolio Website",
    logo: "images/portfolio.png",
    description: "A single-page application that dynamically loads content using JavaScript...",
    tech: "JavaScript, DOM Manipulation",
    github: "https://github.com/YOUR_LINK"
  },
  {
    title: "Bird Sighting Form",
    logo: "images/bird-form.png",
    description: "An interactive form that allows users to submit bird sightings...",
    tech: "JavaScript, Forms, Validation",
    github: "https://breannaruckle.github.io/Missouri-Ornithology-Project/habitats.html"
  },
  {
    title: "Conference Registration System",
    logo: "images/conference.png",
    description: "A web form project that calculates costs based on user selections...",
    tech: "JavaScript, Event Handling",
    github: "https://breannaruckle.github.io/Missouri-Ornithology-Project/conference.html"
  }
];

function loadHome() { 
    let main = document.getElementById("mainContent");

    let html = `
        <h2>${profile.name}</h2>
        <p>${profile.about}</p>

        <h3>Hobbies</h3>
        <ul>
    `;

    // HOBBIES
    for (let i = 0; i < profile.hobbies.length; i++) {
        html += "<li>" + profile.hobbies[i] + "</li>";
    }

    html += `
        </ul>

        <h3>Blogs</h3>
        <ul>
    `;

    // BLOGS
    for (let i = 0; i < profile.blogs.length; i++) {
        html += "<li>" + profile.blogs[i] + "</li>";
    }

    html += `
        </ul>

        <h3>Gallery</h3>

        <div class="galleryContainer">
            <button onclick="prevImage()">⟨</button>

            <img id="mainImage" src="${profile.gallery[0]}" alt="main image" onclick="openLightbox()">

            <button onclick="nextImage()">⟩</button>
        </div>

        <div class="thumbnails">
    `;

    // THUMBNAILS
    for (let i = 0; i < profile.gallery.length; i++) {
        html += "<img src='" + profile.gallery[i] + "' onclick='selectImage(" + i + ")'>";
    }

    html += `
        </div>
    `;

    main.innerHTML = html;

    // reset gallery index
    currentIndex = 0;
}

function loadCourses() {
    let main = document.getElementById("mainContent");

    let html = "<h2>Courses</h2>";

    // 🔥 START GRID WRAPPER
    html += "<div class='courseGrid'>";

    for (let i = 0; i < courses.length; i++) {

        // 🔥 EACH COURSE CARD
        html += "<div class='courseCard'>";

        html += "<h3>" + courses[i].name + "</h3>";
        html += "<ul>";

        for (let j = 0; j < courses[i].learned.length; j++) {
            html += "<li>" + courses[i].learned[j] + "</li>";
        }

        html += "</ul>";

        // 🔥 CLOSE CARD
        html += "</div>";
    }

    // 🔥 CLOSE GRID
    html += "</div>";

    main.innerHTML = html;
}

function loadProjects() {
    let main = document.getElementById("mainContent");

    let html = "<h2>Projects</h2>";

    for (let i = 0; i < projects.length; i++) {
        html += "<div class='project'>";

        html += "<div class='projectLeft'>";
        html += "<img src='" + projects[i].logo + "' class='projectLogo'>";
        html += "</div>";

        html += "<div class='projectRight'>";
        html += "<h3>" + projects[i].title + "</h3>";
        html += "<p>" + projects[i].description + "</p>";
        html += "<p><strong>Tech:</strong> " + projects[i].tech + "</p>";
        html += "<p><a href='" + projects[i].github + "' target='_blank'>View on GitHub</a></p>";
        html += "</div>";

        html += "</div>";
    }

    main.innerHTML = html;
}

function loadContact() {
    let main = document.getElementById("mainContent");

    let html = `

        <div class="myContactSection">
        <h2>Contact Information</h2>

        <p><strong>Email:</strong> breanna.ruckle@gmail.com</p>

        <p><strong>GitHub:</strong> 
            <a href="https://github.com/breannaruckle" target="_blank">
                github.com/breannaruckle
            </a>
        </p>

        <p><strong>LinkedIn:</strong> 
            <a href="https://linkedin.com/in/breanna-ruckle" target="_blank">
                linkedin.com/in/breanna-ruckle
            </a>
        </p>

        <p><strong>Website/Blog:</strong> 
            <a href="#" target="_blank">Missouri Ornithology Project</a>
        </p>
    </div>




        <div class="contactContainer">

            <!-- LEFT SIDE -->
            <div class="contactInfo">
                <h2>Have a question?</h2>
                <p>
                  Have a question about my work or want to connect? I’m always open to discussing 
                  web development projects, ideas, or opportunities. Use the form to send a message 
                  and I’ll respond as soon as possible.
                </p>

                <p>
                  Whether you're reaching out about a project, feedback, or general questions, 
                  I aim to reply within 24 hours during the week.
                </p>

                <p><strong>Email:</strong> bjruckle1s@semo.com</p>
                
            </div>

            <!-- RIGHT SIDE (FORM) -->
            <form id="contactForm" class="contactForm">

                <div class="nameRow">
                    <input type="text" id="firstName" placeholder="First Name">
                    <input type="text" id="lastName" placeholder="Last Name">
                </div>

                <input type="email" id="email" placeholder="Email">

                <input type="text" id="phone" placeholder="Phone Number (optional)">

                <select id="topic">
                    <option value="">Select a topic</option>
                    <option>General Question</option>
                    <option>Project Inquiry</option>
                    <option>Feedback</option>
                </select>

                <textarea id="message" placeholder="Message"></textarea>

                <button type="submit">Send Message</button>
            </form>

        </div>

        <p id="formMessage"></p>
    `;

    main.innerHTML = html;

    document.getElementById("contactForm").addEventListener("submit", validateForm);
}

function validateForm(event) {
    event.preventDefault();

    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let topic = document.getElementById("topic").value;
    let messageText = document.getElementById("message").value.trim();

    let message = document.getElementById("formMessage");

    // 🔥 REGEX
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let cleanedPhone = phone.replace(/\D/g, "");

    // 🔴 REQUIRED FIELDS
    if (first === "" || last === "" || email === "" || topic === "" || messageText === "") {
        message.textContent = "Please fill out all required fields";
        message.style.color = "red";
    }

    // NAME VALIDATION (at least 2 characters each)
    else if (first.length < 2 || last.length < 2) {
        message.textContent = "Please enter a valid first and last name";
        message.style.color = "red";
    }

    // EMAIL VALIDATION
    else if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address";
        message.style.color = "red";
    }

    // PHONE VALIDATION (if entered)
    else if (phone !== "" && cleanedPhone.length !== 10) {
        message.textContent = "Please enter a valid 10-digit phone number";
        message.style.color = "red";
    }

    // MESSAGE LENGTH
    else if (messageText.length < 20) {
        message.textContent = "Message must be at least 20 characters long";
        message.style.color = "red";
    }

    // SUCCESS
    else {
        message.textContent = "Message sent successfully!";
        message.style.color = "green";
    }
}


let currentIndex = 0;

function showImage(index) {
    document.getElementById("mainImage").src = profile.gallery[index];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= profile.gallery.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = profile.gallery.length - 1;
    }
    showImage(currentIndex);
}

function selectImage(index) {
    currentIndex = index;
    showImage(index);
}

/* LIGHTBOX FUNCTIONS */
function openLightbox() {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightboxImg");
    let mainImage = document.getElementById("mainImage");

    lightbox.style.display = "flex";
    lightboxImg.src = mainImage.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}



window.onload = loadHome;