// ==========================================
// PORTFOLIO CONFIGURATION DATA
// ==========================================
// Edit this object to update the content of your website!
const portfolioData = {
    personal: {
        name: "Prince",
        navBrand: "Prince.",
        role: "Aspiring Computer Science Engineer",
        courses: "BCA & BSc Psychology",
        heroTitleLine1: "Building digital",
        heroTitleLine2: "experiences",
        heroTitleLine3: "with purpose.",
        aboutHeadline1: "Technology mapped",
        aboutHeadline2: "to the human mind.",
        aboutParagraph1: "I am passionate about the intersection of human behavior and technology. Currently pursuing a BCA alongside studies in psychology, I strive to build intuitive, beautiful software.",
        aboutParagraph2: "Whether it's scripting in Python, structuring data, or painting interfaces with CSS, my goal is always simplicity. Elegance found in the details.",
        email: "kumar.prince7428@gmail.com",
        footerText: "Crafted with care. © 2026 Prince."
    },
    socials: [
        { name: "GitHub", url: "https://github.com/Prince000101" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/dudeprincekumar/" }, // Replace with your LinkedIn
        { name: "Instagram", url: "https://www.instagram.com/justchill_prince/" }, // Replace with your Instagram
        { name: "Twitter", url: "#" }   // Replace with your Twitter
    ],
    skills: {
        core: ["Python", "JavaScript", "HTML & CSS"],
        frameworks: ["Tailwind CSS", "React (Learning)", "Node.js"],
        design: ["Minimalism", "Psychology UX", "Interface Design"]
    },
    projects: [
        {
            title: "linux-script",
            description: "My linux script that I use while using linux mint for some faster work.",
            image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            github: "https://github.com/Prince000101/linux-script",
            tags: ["Shell", "Linux", "Automation"]
        },
        {
            title: "Cpp_games",
            description: "Bunch of games made with c++ for cli or terminal for fun and practice.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            github: "https://github.com/Prince000101/Cpp_games",
            tags: ["C++", "CLI", "Games"]
        },
        {
            title: "Ai-i_learning",
            description: "A repository focused on AI learning, experiments, and machine learning structures.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            github: "https://github.com/Prince000101/Ai-i_learning",
            tags: ["HTML", "AI", "Learning"]
        },
        {
            title: "Minimal Portfolio",
            description: "A deeply personal, soulful web portfolio designed from scratch with Tailwind CSS.",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            github: "https://github.com/Prince000101/Prince000101.github.io",
            tags: ["CSS", "HTML", "Tailwind"]
        },
        {
            title: "Profile Config",
            description: "Config files for my GitHub profile README and statistics.",
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            github: "https://github.com/Prince000101/Prince000101",
            tags: ["Config", "GitHub"]
        }
    ]
};

// ==========================================
// DYNAMIC COMPONENT RENDERING logic
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Personal Text
    document.getElementById("nav-brand").innerText = portfolioData.personal.navBrand;
    document.getElementById("hero-desc").innerText = `I'm ${portfolioData.personal.name}. ${portfolioData.personal.role} blending technology and psychology to create meaningful software.`;

    document.getElementById("about-p1").innerText = portfolioData.personal.aboutParagraph1;
    document.getElementById("about-p2").innerText = portfolioData.personal.aboutParagraph2;

    // 2. Inject Social Links in Connect Section
    const socialContainer = document.getElementById("social-links-container");
    if (socialContainer) {
        socialContainer.innerHTML = portfolioData.socials.map(social => `
      <li>
        <a href="${social.url}" target="_blank" class="hover:text-brand-text transition-colors flex items-center gap-2">
          ${social.name} <span class="text-brand-border hidden sm:inline">↗</span>
        </a>
      </li>
    `).join('');
    }

    // 3. Email Button Injection
    const emailButton = document.getElementById("email-button");
    if (emailButton) {
        emailButton.href = `mailto:${portfolioData.personal.email}`;
        emailButton.innerText = portfolioData.personal.email;
    }

    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerText = portfolioData.personal.footerText;

    // 4. Inject Skills
    const renderSkills = (id, skillArray) => {
        const list = document.getElementById(id);
        if (list) {
            list.innerHTML = skillArray.map(skill => `<li>${skill}</li>`).join('');
        }
    }
    renderSkills("skills-core", portfolioData.skills.core);
    renderSkills("skills-frameworks", portfolioData.skills.frameworks);
    renderSkills("skills-design", portfolioData.skills.design);

    // 5. Inject Projects into Horizontal Gallery
    const projectGallery = document.getElementById("project-gallery");
    if (projectGallery) {
        const projectCardsHTML = portfolioData.projects.map(project => `
      <article class="group relative flex-shrink-0 w-[85vw] max-w-4xl h-[50vh] sm:h-[60vh] snap-center snap-always border border-brand-border overflow-hidden">
        <a href="${project.github}" target="_blank" class="block w-full h-full">
          <img src="${project.image}" alt="${project.title}" class="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000 ease-out" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 w-full p-6 sm:p-10 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <h3 class="text-2xl sm:text-4xl font-serif text-brand-text mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">${project.title}</h3>
              <p class="text-brand-muted text-sm max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">${project.description}</p>
            </div>
            <ul class="flex gap-4 text-xs tracking-widest uppercase text-brand-text/50 whitespace-nowrap">
              ${project.tags.map((tag, i) => `
                <li>${tag}</li>
                ${i < project.tags.length - 1 ? '<li class="hidden sm:block">•</li>' : ''}
              `).join('')}
            </ul>
          </div>
        </a>
      </article>
    `).join('');

        // Inject projects and add the dummy element for trailing padding
        projectGallery.innerHTML = projectCardsHTML + '<div class="flex-shrink-0 w-12 sm:w-24"></div>';
    }


    // ==========================================
    // UI INTERACTIONS & OBSERVERS
    // ==========================================
    const revealElements = document.querySelectorAll(".reveal");

    const revealCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15, rootMargin: "0px" });
    revealElements.forEach((el) => { revealObserver.observe(el); });

    // Horizontal scroll grabbing
    const scrollTrack = document.querySelector('.hide-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (scrollTrack) {
        scrollTrack.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollTrack.classList.add('cursor-grabbing');
            startX = e.pageX - scrollTrack.offsetLeft;
            scrollLeft = scrollTrack.scrollLeft;
        });

        scrollTrack.addEventListener('mouseleave', () => {
            isDown = false;
            scrollTrack.classList.remove('cursor-grabbing');
        });

        scrollTrack.addEventListener('mouseup', () => {
            isDown = false;
            scrollTrack.classList.remove('cursor-grabbing');
        });

        scrollTrack.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollTrack.offsetLeft;
            const walk = (x - startX) * 2;
            scrollTrack.scrollLeft = scrollLeft - walk;
        });

        scrollTrack.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scrollTrack.scrollBy({ left: e.deltaY * 2, behavior: 'smooth' })
            }
        });
    }
});
