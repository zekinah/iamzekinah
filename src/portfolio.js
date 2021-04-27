/**
 * Porfolio details
 * version v1.0.2
 */


/**  Homepage PAGE */

const introduction = {
    name: "Zekinah Lecaros",
    tagline: "A person who will strive for his achievements with the use of digital tools and open source.",
    email: "zjlecaros@gmail.com",
    resume_link: "//drive.google.com/file/d/1NovnG3rvqO2wjGranm7TvfigIeAd0W8D/view",
    social: [
        {
            social_link: "http://facebook.com/zekinahhh",
            social_icon: "facebook"
        },
        {
            social_link: "https://github.com/zekinah",
            social_icon: "github"
        },
        {
            social_link: "https://ph.linkedin.com/in/zekinah",
            social_icon: "linkedin"
        },
        {
            social_link: "https://profiles.wordpress.org/zekinah/",
            social_icon: "wordpress"
        },
    ]
 };


/**  PROJECT PAGE */

//Feature Section
 const featuredProject = {
    featured: [
        {
          project_title: "Pandemic Covid-19",
          project_url: "https://pandemiccovid19.netlify.app/",
          project_url_github: "https://github.com/zekinah/pandemiccovid-19",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/pandemiccovid19.png",
          project_description: "A Web app and PWA compatible worldwide tracker of Pandemic Covid-19, with visualization of graph, table, and map.",
          project_tags: [
            { tag: "VueJS", },
            { tag: "Bulma", },
            { tag: "Disease API", },
            { tag: "Leaflet", },
            { tag: "Chart", },
            { tag: "Count Up", },
          ]
        },
        {
          project_title: "Zone Pokédex 2",
          project_url: "https://zonepokedex2.netlify.app/",
          project_url_github: "https://github.com/zekinah/zone-pokedex2",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/zonepokedex2.png",
          project_description: "A Simple Web App and PWA compatible Pokédex built with VueJS and data was based on Poke API.",
          project_tags: [
            { tag: "VueJS", },
            { tag: "Vuetify", },
            { tag: "Poké API", },
            { tag: "Poké Sprites", },
          ]
        }
    ],
    display: true
}

// Thumbnail Project Section
const thumbnailProject = {
    wordpress: [
        {
          project_title: "Zone Cookie",
          project_url: "https://wordpress.org/plugins/zone-cookie/",
          project_url_github: "https://github.com/zekinah/zone-cookie",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/wp-zone-cookie.jpg",
          project_description: "A WordPress plugin for GDPR and CCPA Privacy Laws. It is user friendly and very simple to use. It provides control to your client data request and protection, messages, and layout.",
          project_tags: [
            { tag: "PHP", },
            { tag: "jQuery", },
            { tag: "Bootstrap", },
            { tag: "Osano", }
          ]
        },
        {
          project_title: "Zone Pandemic Covid19",
          project_url: "https://wordpress.org/plugins/zone-pandemic-covid-19/",
          project_url_github: "https://github.com/zekinah/zone-pandemic-covid19",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/wp-zone-covid19.jpg",
          project_description: "A WordPress plugin that provides a shortcode that displays the live recorded data of how many patient(s) are active, confirmed, dead or recovered world wide.",
          project_tags: [
            { tag: "PHP", },
            { tag: "jQuery", },
            { tag: "Bulma", },
            { tag: "Disease API", }
          ]
        },
        {
          project_title: "Zone Redirect ",
          project_url: "https://wordpress.org/plugins/zone-redirect/",
          project_url_github: "https://github.com/zekinah/zone-redirect",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/wp-zone-redirect.jpg",
          project_description: "A WordPress plugin that helps you manage and create 301 & 302 redirects for your WordPress site to improve SEO and visitor experience. With a user-friendly interface.",
          project_tags: [
            { tag: "PHP", },
            { tag: "jQuery", },
            { tag: "Bootstrap", }
          ]
        }
    ],
    display: true
}

/**  ABOUT PAGE */

// Personal Background Section
const background = {
    section: [
        {
            description: "I'm currently working as Web Developer at <strong>OptimizeX Inc.</strong> building things for web with someone awesome people. Before now, I recently graduated at <strong>Cavite State University</strong> and an interned student in <strong>Amorele Technology</strong>. ",
        },
        {
            description: "As a web developer, I always enjoy learning new stuffs that can improve myself in modern technology regarding on web development. My goal is to always build great websites and plugins that are scalable and efficient.",
        }
    ],
    display: true
}

// Skill Sets Section
const skillSet = {
    skills: [
        {
          skill_title: "Technologies",
          skill_list: [
            { skill_name: "Javascript (ES6)", },
            { skill_name: "HTML5 & (S)CSS", },
            { skill_name: "jQuery + Ajax", },
            { skill_name: "VueJS + Axios", },
            { skill_name: "My Sqli", },
            { skill_name: "PHP", } 
          ]
        },
        {
          skill_title: "CMS and Tools",
          skill_list: [
            { skill_name: "Wordpress & Woocommerce", },
            { skill_name: "Magento 1.9 & 2", },
            { skill_name: "GIT & SVN", },
            { skill_name: "Bootstrap", },
            { skill_name: "Vuetify", },
            { skill_name: "Bulma", }
          ]
        }
    ],
    display: true
}

// Work Experience Section
const workExperiences = {
    experience: [
        {
            name: "August 99",
            time: "April 2021 - Present",
            role: "Full Stack Developer"
        },
        {
            name: "OptimizeX Inc.",
            time: "Sept 2018 - April 2021",
            role: "Web Developer"
        },
        {
            name: "AMORELE Technology, Inc",
            time: "June - July 2017",
            role: "Software Developer Intern"
        }
    ],
    display: true
}

// Other Stuff Section
const otherStuffs = {
    hobbies: [
        { name: "Badminton"},
        { name: "Dancing" },
        { name: "Cardistry" },
    ],
    codersrank_name: "zekinah",
    github_stats: "https://github-readme-stats.vercel.app/api?username=zekinah",
    display: true
}