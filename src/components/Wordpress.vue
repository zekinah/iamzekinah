<template>
  <div class="wordpress__content">
    <div class="columns is-desktop">
        <div v-for="w of wordpress" :key="w.project_id" class="wordpress__project column">
            <div class="wordpress__card">
                <div class="wordpress__image">
                    <a :href="w.project_url" target="_blank" rel="nofollow noopener noreferrer">
                        <img :src="w.project_image" :alt="w.project_title">
                    </a>
                </div>
                <div class="wordpress__details">
                    <div class="wordpress__title title is-6 mt-1">
                      <a :href="w.project_url_github" target="_blank" rel="nofollow noopener noreferrer">{{w.project_title}}</a>
                      <div class="wordpress__links">
                        <a class="pr-1" :href="w.project_url_github">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                        </a>
                         <a :href="w.project_url">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                        </a>
                      </div>
                    </div>
                    <div class="wordpress__description mb-5">
                        <p>{{w.project_description}}</p>
                    </div>
                    <div class="wordpress__builtof subtitle is-6">
                        <div class="tags is-rounded">
                            <span v-for="tag of w.project_tags" :key="tag.tag" class="tag">{{tag.tag}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'Wordpress',
   data: () => ({
    wordpress: [
        {
          project_id: 1,
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
          project_id: 2,
          project_title: "Zone Pandemic Covid19",
          project_url: "https://wordpress.org/plugins/zone-pandemic-covid-19/",
          project_url_github: "https://github.com/zekinah/zone-pandemic-covid19",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/wp-zone-covid19.jpg",
          project_description: "A WordPress plugin that provides a shortcode that displays the live recorded data of how many patient(s) are active, confirmed, dead or recovered, in a world, and the continent or country assigned.",
          project_tags: [
            { tag: "PHP", },
            { tag: "jQuery", },
            { tag: "Bulma", },
            { tag: "Disease API", }
          ]
        },
        {
          project_id: 3,
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
      ]
  })
}
</script>