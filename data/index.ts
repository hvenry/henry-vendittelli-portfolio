export const navItems = [
  { name: "/blog", path: "/blog" },
  { name: "/about", path: "/about" },
  // { name: "/random", path: "/random" },
  { name: "/projects", path: "/projects" },
  { name: "/reach-out", path: "/reach-out" },
];

export const intro = {
  intro:
    "Hi! My name is Henry, and I am a software developer based out of Toronto, Canada.",
  description:
    "Welcome to my portfolio website! I really appreciate you taking the time to view my work.",
  body: "Programming is one of my greatest passions, and I am always looking to improve my skills and share my work with others who are interested. I hope you enjoy your time here, and feel free to reach out to me if you have any questions, feedback, or just want to grab a cup of coffee (I am a big-time Java enjoyer).",
};

export const work = [
  {
    name: "Empire Life",
    position: "Student Software Developer",
    desc: "In my current role at Empire Life, I am developing a technology adoption tool that streamlines the onboarding of emerging technologies through full stack development with React, FastAPI, Auth0, Firebase, and GCP.  I am responsible for planning, designing, implementing, and testing (in that order) new features based on user feedback. Additionally, I am tasked with maintaining a robust production database, designing new API endpoints, and managing deployments to ensure this service is healthy and scalable. My work requires constant collaboration with other developers, and leveraging a variety of DevOps tools for CI/CD. My most notable task has been my Jira REST API integration, to track reported technologies with Atlassian management tools.",
    link: "https://www.empire.ca/",
    image: "empire_icon",
    time: "[ summer 2024 ]",
  },
  {
    name: "360insights",
    position: "Junior Data Scientist",
    desc: "As a data scientist at 360insights, my role was centered around improving predictive modelling and customer satisfaction, through numerous Python libraries focused on natural language processing and time series forecasting. I worked in a move-fast and break-things environment, where trying new things and innovating without fear of failure was the top priority. I was responsible for researching new time series forecasting models and techniques, testing their implementations, and deploying them to end users to help predict consumer rebates. At the end of my term, I worked on an NLP project using K-Means clustering powered by their call center transcript database that identified the most common complaints from consumer feedback.",
    link: "https://www.360insights.com/",
    image: "insights_icon",
    time: "[ summer 2023 ]",
  },
  {
    name: "Partisans",
    position: "Studio Intern",
    desc: "Before I learned about the world of computer science, my passion for creating things and designing led me to pursue architecture as a student intern at Partisans. Once I discovered my true passion, computer science, I left architecture behind but took with me important lessons about the principles of design that I continue to apply to my work to this day.",
    link: "https://partisans.com/",
    image: "partisans_icon",
    time: "[ summer 2018 - 2020 ]",
  },
];

export const education = [
  {
    name: "Queen's University",
    position: "Computer Science",
    desc: "As of the summer of 2024, I will be going into my fourth year of my undergraduate degree at Queen's University and will be graduating by May 2025. During my time at Queen's, I have been specializing in Cognitive Science within the faculty of computing, which is very unique learning experience that combines all of the fundamentals of computer science with linguistics and philosophy.",
    link: "https://www.cs.queensu.ca/undergraduate/programs/specializations/cognitive-science.php",
    image: "queens_icon",
    time: "[ 2021 - 2025 ]",
    extra: "Awards: Excellence Scholarship",
  },
];

export const clubs = [
  {
    name: "Project Red",
    position: "Co-Head of Web Development",
    desc: "During my time at Project Red, redesigned their website from the ground up to boost awareness and donations for the Heart & Stroke Foundation. I also promoted important events, including the annual Charity Fashion Show to widen participation, and through implementing online fundraising tools, I helped us get over our $200,000 fundraising goal for victims of heart disease and stroke.",
    link: "https://www.queensprojectred.ca/",
    image: "project_red_icon",
    time: "[ 2023 - 2025 ]",
  },
  {
    name: "QMIND",
    position: "Innovation Design Team",
    desc: "In QMIND I contributed to Canada's largest undergraduate artificial intelligence and machine learning organization by creating solutions for understanding typed sentiment through ML and AI technologies. Through investigating high-level programming languages, and researching use cases of multiple models, my team developed an innovative solution for a sentiment analysis natural language processing program.",
    link: "https://qmind.ca/",
    image: "qmind_icon",
    time: "[ 2022 - 2023 ]",
  },
  {
    name: "QUANTT",
    position: "Algorithm Developer",
    desc: "At Queen's University Algorithmic and Network Trading Team (QUANTT), I worked on a team to develop an automated time-series day trading algorithm within quantitative finance using Quant-Connect, which made decisions based on time series data, volatility, and market-impacting news.",
    link: "https://quanttgroup.wixsite.com/quantt",
    image: "quantt_icon",
    time: "[ 2023 - 2024 ]",
  },
  {
    name: "COMPSA",
    position: "Orientation Leader",
    desc: "For the Computing Students Association, I led the computing orientation for incoming first-year students, and hosted an interactive presentation for those interested in entering the cognitive science specialization.",
    link: "https://research.cs.queensu.ca/home/dsc/",
    image: "compsa_icon",
    time: "[ 2022 - 2023 ]",
  },
  {
    name: "QDAA",
    position: "General Member",
    desc: "At Queen's Data Analytics Association Team (QDAA), I was a general member who would attend meetings and participate in learning about data science.",
    link: "https://qdaa.github.io/",
    image: "qdaa_icon",
    time: "[ 2023 - 2024 ]",
  },
  {
    name: "QFSF",
    position: "Student Model",
    desc: "For Queen's For Sustainable Fashion (QFSF), I was student model (true story) who would participate in photoshoots to help promote sustainable fashion and minimizing rampant consumerism.",
    link: "https://qsf340.wixsite.com/qfsf",
    image: "qfsf_icon",
    time: "[ 2023 - 2024 ]",
  },
];

export const projects = [
  {
    title: "Portfolio",
    id: "1",
    bodyTitle: "henryvendittelli.com",
    githubLink: "https://github.com/hvenry/henry-vendittelli-portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "This portfolio website that you are currently reading about was built with Next.js, TypeScript, and Tailwind CSS from the ground up with no template. This website was developed iteratively with constant feedback from peers and other people in the industry, which is why it has an extensive version history. \n My portfolio is hosted on Vercel, which excels in deployment due to its seamless integration with Next.js, automatic HTTPS, serverless architecture, and was also selected because it costs a grand total of zero dollars to use. This choice ensures fast, reliable performance, easy scalability, and makes my wallet happy. \n The website features both light and dark modes for enhanced accessibility, a responsive design using Tailwind CSS that looks seamless on any device, and exemplifies my attention to detail and commitment to a high-quality user experience.",
    smallDescription:
      "Responsive portfolio using Next.js, TypeScript, and Tailwind CSS with Vercel hosting for seamless deployment and accessibility.",
    imageName: "portfolio_project.png",
  },
  {
    title: "Sentiment NLP",
    id: "2",
    bodyTitle: "Sentiment Analysis NLP for QMIND",
    technologies: ["Python", "PyTorch", "spaCy", "NLTK", "Pandas"],
    description:
      "For QMIND (Canada's largest undergraduate artificial intelligence and machine learning organization) I was part of an innovation design team that developed a machine learning program that could analyze sentiment from typed text using large quantities of data, and natural language processing techniques. \n During my time at QMIND, I researched use cases of multiple ML models and sourced data to develop an innovative solution for mapping sentiment to text, using a dataset of Reddit comments representing 1 of 27 emotions provided by Google. NLP techniques such as tokenization, stemming, lemmatization, and stop word removal were used to preprocess our large dataset, and that dataset was used to fine-tune an ALBERT model to classify a sentence based on which emotion is most prevalent.",
    smallDescription:
      "Developed NLP model for sentiment analysis using ALBERT and Reddit data to classify emotions in text.",
  },
  {
    title: "Rental Database",
    id: "3",
    bodyTitle: "Kingston Rental Webapp",
    githubLink: "https://github.com/hvenry/kingston-rental-webapp",
    youtubeLink: "https://youtu.be/bHJxmLcjUco",
    technologies: ["MySQL", "PHP", "HTML", "CSS", "Apache"],
    description:
      "The Kingston Rental Property Database is a web application designed to manage and display rental property listings in Kingston. \n This database was originally designed using an entity relation diagram, composed of entity types with relationships, then was implemented using a MySQL database for database implementation, PHP for server-side scripting, Apache as the web server, and HTML/CSS for the frontend interface.",
    smallDescription:
      "Web app for managing rental listings using MySQL, PHP, HTMl/CSS and an Apache HTTP server.",
    imageName: "rental_database_project.png",
  },
  {
    title: "C# Game",
    id: "4",
    bodyTitle: "Bear the Animal Tosser",
    githubLink: "https://github.com/hvenry/CISC-226-GAME",
    youtubeLink: "https://youtu.be/YPBpoDEXPhQ",
    technologies: ["C#", "Unity", "Git"],
    description:
      "Bear The Animal Tosser is an arcade-style game where players control a zookeeper named Bear who captures escaped zoo animals. The game's unique stacking mechanic lets players pick up and stack animals on their heads based on weight, requiring strategic planning and a LIFO mindset. \n Developed in C#, the game uses principles such as state machines for animal behaviour and physics-based collision systems. The focus of this project was to build a minimal viable product with the core novel mechanics from user feedback, before expanding with optional features like power-ups and cosmetics. \n The core gameplay revolved around the stacking mechanic, so players would have to strategically stack and throw animals into pens based on location, time remaining, and the animal's weight constraints. The game features a charming 2D pixel art aesthetic with a cartoony and humorous tone, created from original assets, and maps with diverse zoo settings worldwide.",
    smallDescription:
      "Arcade game developed in C# and Unity, featuring a unique animal stacking mechanic and 2D pixel art.",
    imageName: "bear_project.png",
  },
  {
    title: "Parking App",
    id: "5",
    bodyTitle: "parkQu",
    youtubeLink: "https://youtu.be/3u5slpDZprw",
    technologies: ["Figma"],
    description:
      "ParkQu is a parking app designed for university students at Queen's University to successfully address and reduce the challenges faced by those who lack parking passes. Through user-centred design principles and conducting multiple interviews, we identified an issue and user group to tailor a service that would accommodate their needs. \n Utilizing Figma for high-fidelity prototyping and iterative testing, parkQu delivers an innovative solution that allows students to book parking spots near campus through people who have access to extra parking on their properties, similar to how Airbnb operates, but instead of people listing their homes, they are instead listing their driveways, parking lots, or dirt roads-basically any piece of private property that a car can park in. \n The project shows how to plan and deliver large-scale applications that tackle a niche problem, by incorporating user feedback and iterative prototyping to have a user-centred app that does not stray away from its original mission statement.",
    smallDescription:
      "Parking app for students to book spots near campus, iteratively designed using user feedback.",
    imageName: "parkqu_project.png",
  },
];

export const videos = [
  {
    text: "parkqu | Parking App for University Students",
    video:
      "https://www.youtube.com/embed/3u5slpDZprw?si=3_ISxIoAD-RcIFKV&amp;&amp;rel=0",
    href: "/projects/5",
  },
  {
    text: "Kingston Rental Webapp | Rental Database",
    video:
      "https://www.youtube.com/embed/bHJxmLcjUco?si=E5Hti0SjpxpX1BF8&amp;start=7;&amp;rel=0",
    href: "/projects/3",
  },
  {
    text: "Bear the Animal Tosser | C# Game",
    video:
      "https://www.youtube.com/embed/YPBpoDEXPhQ?si=W0iLnaHJXuqsS2p-&amp;start=2&amp;rel=0",
    href: "/projects/4",
  },
];
