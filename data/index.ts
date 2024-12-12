export const navItems = [
  // { name: "/blog", path: "/blog" },
  { name: "/about", path: "/about" },
  { name: "/random", path: "/random" },
  { name: "/projects", path: "/projects" },
  { name: "/reach-out", path: "/reach-out" }
];
// INDEX PAGE
export const intro = {
  intro:
    "Hi! My name is Henry, and I am a software developer based out of Toronto, Canada.",
  description:
    "Welcome to my portfolio website! I really appreciate you taking the time to view my work.",
  body: "Programming is one of my greatest passions, and I am always looking to improve my skills and share my work with others who are interested. I hope you enjoy your time here, and feel free to reach out to me if you have any questions, feedback, or just want to grab a cup of coffee (I am a big-time Java enjoyer)."
};

export const work = [
  {
    name: "Empire Life",
    position: "Software Developer (Part-Time)",
    desc: "As a part-time Software Developer at Empire Life, I contribute to enhancing the accessibility and compliance of their main website, focusing on AODA standards. I work with Pantheon, CI/CD pipelines, PHP, Drupal, DDEV, and Docker to streamline development and ensure scalable solutions. My role includes collaborating with the web development team to implement best practices, improve user experience, and make services more accessible to all users.",
    link: "https://www.empire.ca/",
    image: "empire_icon",
    time: "[ Fall 2024 ]"
  },
  {
    name: "Empire Life",
    position: "Student Software Developer",
    desc: "During my summer term at Empire Life, I developed a technology adoption tool that streamlines the onboarding of emerging technologies through full stack development with React, FastAPI, Auth0, Firebase, and GCP.  I was responsible for planning, designing, implementing, and testing (in that order) new features based on user feedback. Additionally, I maintained a robust production database, designed new API endpoints, and managed deployments to ensure the service was healthy and scalable. My work required constant collaboration with other developers and leveraging various DevOps tools for CI/CD. My most notable task during my term would have been my Jira REST API integration to the service I was developing, which streamlined tracking reported technologies with Atlassian management tools.",
    link: "https://www.empire.ca/",
    image: "empire_icon",
    time: "[ Summer 2024 ]"
  },
  {
    name: "360insights",
    position: "Junior Data Scientist",
    desc: "As a data scientist at 360insights, my role was improving predictive modelling and customer satisfaction through numerous Python libraries focused on natural language processing and time series forecasting. I worked in a move-fast and break-things environment, where trying new things and innovating without fear of failure was the top priority. I researched new time series forecasting models and techniques, tested their implementations, and deployed them to end users to help predict consumer rebates. At the end of my term, I worked on an NLP project using K-Means clustering powered by their call center transcript database that identified the most common complaints from consumer feedback.",
    link: "https://www.360insights.com/",
    image: "insights_icon",
    time: "[ Summer 2023 ]"
  },
  {
    name: "Partisans",
    position: "Studio Intern",
    desc: "Before I learned about computer science, my passion for creating things and designing led me to pursue architecture as a student intern at Partisans. Once I discovered my true passion, computer science, I left architecture behind. Still, I took important lessons about design principles that I continue to apply to my work.",
    link: "https://partisans.com/",
    image: "partisans_icon",
    time: "[ Summer 2018 - 2020 ]"
  }
];

// ABOUT PAGE
export const education = [
  {
    name: "Queen's University",
    position: "Computer Science",
    desc: "As of the summer of 2024, I have entered the fourth and final year of my undergraduate degree at Queen's University and will graduate by May 2025. During my time at Queen's, I have specialized in Cognitive Science within the computing faculty, a unique learning experience combining all computer science fundamentals with linguistics and philosophy.",
    link: "https://www.cs.queensu.ca/undergraduate/programs/specializations/cognitive-science.php",
    image: "queens_icon",
    time: "[ 2021 - 2025 ]",
    extra: "Awards: Excellence Scholarship"
  }
];

export const clubs = [
  {
    name: "Project Red",
    position: "Head of Web Development",
    desc: "As Head of Web Development for Project Red, I orchestrate our website's design, development, and upkeep. This website promotes events like the annual Charity Fashion Show and drives donations for the Heart & Stroke Foundation. Collaborating with other club executives, I help coordinate the implementation of features supporting our fundraising goals, ensuring our platform amplifies Project Red’s mission. Through continuous collaboration and strategic planning, I drive the technical success of our online platform, supporting Project Red’s mission to make a lasting impact.",
    link: "https://www.queensprojectred.ca/",
    image: "project_red_icon",
    time: "[ 2024 - 2025 ]"
  },
  {
    name: "Project Red",
    position: "Web Development Intern",
    desc: "As a Web Development Intern at Project Red, I redesigned their website from the ground up to boost awareness and donations for the Heart & Stroke Foundation. I also promoted important events, including the annual Charity Fashion Show, to widen participation. By implementing online fundraising tools, I helped us exceed our $200,000 fundraising goal for heart disease and stroke victims.",
    link: "https://www.queensprojectred.ca/",
    image: "project_red_icon",
    time: "[ 2023 - 2024 ]"
  },
  {
    name: "QDAA",
    position: "Project Manager",
    desc: "As Project Manager at the Queen’s Data Analytics Association (QDAA), I lead a technical team of five developers on an autonomous driving project utilizing computer vision. My role involves coordinating project tasks, overseeing development, and ensuring the successful delivery of insights to advance autonomous driving technology.",
    link: "https://qdaa.github.io/",
    image: "qdaa_icon",
    time: "[ 2024 - 2025 ]"
  },
  {
    name: "QDAA",
    position: "General Member",
    desc: "At Queen's Data Analytics Association (QDAA), I was a general member who attended meetings and participated in learning about data science.",
    link: "https://qdaa.github.io/",
    image: "qdaa_icon",
    time: "[ 2023 - 2024 ]"
  },
  {
    name: "QMIND",
    position: "Innovation Design Team",
    desc: "In QMIND, I contributed to Canada's largest undergraduate artificial intelligence and machine learning organization by creating solutions for understanding typed sentiment through ML and AI technologies. My team developed an innovative solution for a sentiment analysis natural language processing program by investigating high-level programming languages and researching use cases of multiple models.",
    link: "https://qmind.ca/",
    image: "qmind_icon",
    time: "[ 2022 - 2023 ]"
  },
  {
    name: "QUANTT",
    position: "Algorithm Developer",
    desc: "At Queen's University Algorithmic and Network Trading Team (QUANTT), I worked on a team to develop an automated time-series day trading algorithm within quantitative finance using Quant-Connect, which made decisions based on time series data, volatility, and market-impacting news.",
    link: "https://quanttgroup.wixsite.com/quantt",
    image: "quantt_icon",
    time: "[ 2023 - 2024 ]"
  },
  {
    name: "COMPSA",
    position: "Orientation Leader",
    desc: "For the Computing Students Association, I led the computing orientation for incoming first-year students and hosted an interactive presentation for those interested in entering the cognitive science specialization.",
    link: "https://research.cs.queensu.ca/home/dsc/",
    image: "compsa_icon",
    time: "[ 2022 - 2023 ]"
  },
  {
    name: "QFSF",
    position: "Student Model",
    desc: "For Queen's For Sustainable Fashion (QFSF), I was a student model (true story) who would participate in photoshoots to help promote sustainable fashion and minimize rampant consumerism.",
    link: "https://qsf340.wixsite.com/qfsf",
    image: "qfsf_icon",
    time: "[ 2023 - 2024 ]"
  }
];

// RANDOM PAGE
export const setup = [
  {
    name: "Main Monitor",
    description: "LG 34WR53QB-B Curved Monitor",
    link: "https://www.lg.com/ca_en/monitors/ultrawide/34wr50qc-b/"
  },
  {
    name: "Ergonomic Keyboard",
    description: "Bastard Keyboards TBK-mini",
    link: "https://github.com/Bastardkb/TBK-Mini"
  },
  {
    name: "Work Keyboard",
    description: "Apple Magic Keyboard",
    link: "https://www.apple.com/ca/shop/product/MMMR3LL/A/magic-keyboard-with-touch-id-and-numeric-keypad-for-mac-models-with-apple-silicon-us-english-black-keys?afid=p238%7Cs15cBR7Gb-dc_mtid_1870765e38482_pcrid_703843849102_pgrid_169137981492_pntwk_g_pchan_online_pexid__ptid_pla-2298479982371_&cid=aos-ca-kwgo-pla---slid---product-MMMR3LL/A-CA"
  },
  {
    name: "Mouse",
    description: "Logitech G Pro X Superlight",
    link: "https://www.logitechg.com/en-ca/products/gaming-mice/pro-x-superlight-wireless-mouse.910-005940.html"
  },
  {
    name: "Trackpad",
    description: "Apple Magic Trackpad",
    link: "https://www.apple.com/ca/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface"
  },
  {
    name: "Headphones",
    description: "Bose QC35 II Wireless Headphones",
    link: "https://global.bose.com/content/consumer_electronics/b2c_catalog/worldwide/websites/en_ae/product/qc35_ii.html"
  }
];

export const mac_software = [
  {
    name: "Homebrew",
    description: "Package manager for macOS.",
    link: "https://brew.sh/",
    icon: "homebrew_icon"
  },
  {
    name: "iTerm2",
    description: "Terminal emulator for macOS.",
    link: "https://iterm2.com/",
    icon: "iterm2_icon"
  },
  {
    name: "oh my zsh",
    description:
      "Open source framework for managing Zsh configuration. I also use zsh-autosuggestions and zsh-syntax-highlighting plugins with it.",
    link: "https://ohmyz.sh/",
    icon: "ohmyzsh_icon"
  },
  {
    name: "Raycast",
    description:
      "Productivity software that is a spotlight search replacement. Offers fast access to applications, files, clipboard, and much more, overall just a better experience than spotlight.",
    link: "https://raycast.com/",
    icon: "raycast_icon"
  },
  {
    name: "Rectangle",
    description:
      "Window manager, used to move and resize windows using keyboard shortcuts or snap areas.",
    link: "https://rectangleapp.com/",
    icon: "rectangle_icon"
  },
  {
    name: "AltTab",
    description:
      "Brings the power of Windows's alt+tab window switcher to macOS.",
    link: "https://alt-tab-macos.netlify.app/",
    icon: "alttab_icon"
  },
  {
    name: "Stats",
    description:
      "Monitor my macOS system, I use it for CPU utilization, memory usage, and network usage.",
    link: "https://formulae.brew.sh/cask/stats",
    icon: "stats_icon"
  },
  {
    name: "HiddenBar",
    description:
      "Grants the ability to hide menu bar items, reducing clutter for a cleaner look.",
    link: "https://formulae.brew.sh/cask/hiddenbar",
    icon: "hiddenbar_icon"
  }
];

// PROJECTS PAGE
export const projects = [
  {
    title: "Portfolio",
    bodyTitle: "henryvendittelli.com",
    githubLink: "https://github.com/hvenry/henry-vendittelli-portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "This portfolio website you are currently reading this on was built with Next.js, TypeScript, and Tailwind CSS from the ground up with no template. This website has been developed iteratively with constant feedback from peers and other people in the industry, leading to it's extensive version history. \n This portfolio is hosted on Vercel, which excels in deployment due to its seamless integration with Next.js and was also selected because it costs a grand total of zero dollars to use, allowing for easy scalability while making my wallet happy. \n The website features light and dark modes for enhanced accessibility, a responsive design using Tailwind CSS that looks seamless on any device and exemplifies my attention to detail and commitment to high-quality experiences.",
    smallDescription:
      "Responsive portfolio using Next.js, TypeScript, and Tailwind CSS with Vercel hosting for seamless deployment and accessibility.",
    imageName: "portfolio_project.png"
  },
  {
    title: "RAG System",
    bodyTitle: "Local RAG System",
    githubLink: "https://github.com/hvenry/Local-RAG-System",
    youtubeLink:
      "https://www.loom.com/share/da198d42181a49499ee7a808308f3a31?sid=eb6969fb-a676-4505-84ad-0bfe38e98bc0",
    technologies: ["Python", "Langchain", "Ollama", "Lama3.2", "FAISS"],
    description:
      "A local implementation of a Retrieval-Augmented Generation (RAG) pipeline using a local Llama 3.2 via Ollama. This project allows document-based question answering by integrating document loading, vector database storage, and a conversational retrieval system. \n This project was derived from a Caselaw RAG project I worked on using Harvard's Caselaw Access Project which used the OpenAI API and Pinecone. This project is an extension of it's capabilities, but takes into consideration privacy concerns by doing the augmentation locally instead of with a vector store in the cloud.",
    smallDescription:
      "A local RAG system that embeds PDF, CSV, and docx files for improved LLM context.",
    imageName: "local_rag_system.png"
  },
  {
    title: "Simple Shell",
    bodyTitle: "Simple C Shell",
    githubLink: "https://github.com/hvenry/simple-c-shell",
    technologies: ["C", "Unix", "Makefile"],
    description:
      "The Simple C Shell is a command-line shell program developed in C to explore the essential workings of shell environments. It supports several built-in commands, including $cd for changing directories, $help for displaying command information, $exit to terminate the session, and $history to review previously executed commands in the current session. Additionally, this shell allows for executing external commands available within the system's PATH, such as $ls, $pwd, and $echo. \n This project is based on Stephen Brennan's lsh and serves as an educational tool to demonstrate the primary loop in a shell program, which involves reading, parsing, and executing commands. The shell emphasizes fundamental shell operations and provides insights into how command-line interfaces function at a basic level.",
    smallDescription:
      "A basic Unix shell built in C, supporting essential commands like cd, help, and external command execution.",
    imageName: "simple_c_shell_project.png"
  },
  {
    title: "Sentiment NLP",
    bodyTitle: "Sentiment Analysis NLP for QMIND",
    technologies: ["Python", "PyTorch", "spaCy", "NLTK", "Pandas"],
    description:
      "For QMIND (Canada's largest undergraduate artificial intelligence and machine learning organization), I was part of an innovation design team that developed a machine learning program to analyze sentiment from typed text using large quantities of data and natural language processing techniques. \n On the team, I researched use cases of multiple ML models and helped source data to develop an innovative solution for mapping sentiment to text by using a dataset of Reddit comments representing 1 of 27 emotions provided by Google. We used NLP techniques such as tokenization, stemming, lemmatization, and stop word removal to preprocess our dataset, then fine-tune an ALBERT model to classify a sentence based on which emotion is most prevalent.",
    smallDescription:
      "Developed NLP model for sentiment analysis using ALBERT and Reddit data to classify emotions in text."
  },
  {
    title: "Rental Database",
    bodyTitle: "Kingston Rental Webapp",
    githubLink: "https://github.com/hvenry/kingston-rental-webapp",
    youtubeLink: "https://youtu.be/bHJxmLcjUco",
    technologies: ["MySQL", "PHP", "HTML", "CSS", "Apache"],
    description:
      "The Kingston Rental Property Database is a web application designed to manage and display rental property listings in Kingston. \n This database was originally designed using an entity relation diagram composed of entity types with relationships. It was then implemented using a MySQL database for database implementation, PHP for server-side scripting, Apache as the web server, and HTML/CSS for the front-end interface.",
    smallDescription:
      "Web app for managing rental listings using MySQL, PHP, HTML/CSS and an Apache HTTP server.",
    imageName: "rental_database_project.png"
  },
  {
    title: "C# Game",
    bodyTitle: "Bear the Animal Tosser",
    githubLink: "https://github.com/hvenry/CISC-226-GAME",
    youtubeLink: "https://youtu.be/YPBpoDEXPhQ",
    technologies: ["C#", "Unity", "Git"],
    description:
      "Bear The Animal Tosser is an arcade-style game where players control a zookeeper named Bear, who captures escaped zoo animals. The game's unique stacking mechanic lets players pick up and stack animals on their heads based on weight, requiring strategic planning and a LIFO mindset. \n Developed in C#, the game uses principles such as state machines for animal behavior and physics-based collision systems. This project aimed to build a minimal viable product with the core novel mechanics from user feedback before expanding with optional features like power-ups and cosmetics. \n The core gameplay revolved around the stacking mechanic, so players would have to strategically stack and throw animals into pens based on location, time remaining, and the animal's weight constraints. The game features a charming 2D-pixel art aesthetic with a cartoony and humorous tone, created from original assets and maps with diverse zoo settings worldwide.",
    smallDescription:
      "Arcade game developed in C# and Unity, featuring a unique animal stacking mechanic and 2D-pixel art.",
    imageName: "bear_project.png"
  },
  {
    title: "Parking App",
    bodyTitle: "parkQu",
    youtubeLink: "https://youtu.be/3u5slpDZprw",
    technologies: ["Figma"],
    description:
      "ParkQu is a parking app designed for university students at Queen's University to successfully address and reduce the challenges faced by those who lack parking passes. Through user-centred design principles and conducting multiple interviews, we identified an issue and user group to tailor a service that would accommodate their needs. \n Utilizing Figma for high-fidelity prototyping and iterative testing, parkQu delivers an innovative solution that allows students to book parking spots near campus through people with access to extra parking on their properties, similar to how Airbnb operates. Still, instead of people listing their homes, they list their driveways, parking lots, dirt roads, and any piece of private property that a car can park. \n The project shows how to plan and deliver large-scale applications that tackle a niche problem by incorporating user feedback and iterative prototyping to have a user-centred app that does not stray from its original mission statement.",
    smallDescription:
      " Parking app for students to book spots near campus, iteratively designed using user feedback.",
    imageName: "parkqu_project.png"
  }
];
