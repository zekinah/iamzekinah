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
                    <div class="wordpress__title title is-5 mt-1">
                        <a :href="w.project_url" target="_blank" rel="nofollow noopener noreferrer">{{w.project_title}}</a>
                    </div>
                    <div class="wordpress__description subtitle is-6 mt-1">
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