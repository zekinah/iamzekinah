<template>
  <div class="page project">
    <h1 class="page-header">Projects.</h1>
    <div class="page-content"></div>
    <div class="featured">
      <h3 class="page-subheader">Featured</h3>
      <ProjectFeatured />
    </div>
    <div class="wordpress">
      <h3 class="page-subheader">Wordpress Plugins</h3>
      <ProjectWordpress />
    </div>
    <div class="open-source">
      <h3 class="page-subheader">Open Source</h3>
      <Loading v-show="profileLoading"/>
      <div class="columns is-multiline masonry">
          <div v-for="repos of repository" :key="repos.id" class="column is-one-third" v-show="!repos.fork">
            <ProjectRepository :data="repos"/>
          </div>
      </div>
    </div>
    <SiteFooter/>
  </div>
</template>

<script>
import GitHub from "github-api";
import { featuredProject } from "@/portfolio";
import Loading from "@/components/Loading.vue";
import ProjectRepository from "@/components/ProjectRepository.vue";
import ProjectFeatured from "@/components/ProjectFeatured.vue";
import ProjectWordpress from "@/components/ProjectWordpress.vue";
import SiteFooter from "@/components/SiteFooter.vue";
const github = new GitHub();
const user = github.getUser(featuredProject.github_username);

export default {  
  name: 'Project',
  data: () => ({
    counter: 1,
    profileLoading: false,
    reposLoading: false,
    profile: '',
    repository: '',
    githubError: ''
  }),
  created() {
    this.fetchGithub();
  },
  methods: {
    async fetchGithub() {
      this.profileLoading = true;
      this.reposLoading = true;
      try {
        this.profile = (await user.getProfile()).data;
        this.repository = (await user.listRepos({ type: "owner" })).data.map(i => ({
          ...i,
        }));
      } catch (e) {
        if (e.response && e.response.status === 404) {
          this.githubError = "User not found!";
        } else {
          this.githubError = "Oh no! Something went wrong. Try again later!";
        }
      }
      this.profileLoading = false;
      this.reposLoading = false;
      
    },
  },
  components: {
    ProjectFeatured,
    ProjectRepository,
    ProjectWordpress,
    Loading,
    SiteFooter
  },
  mounted() {
    this.$ga.page('/project');
  }
}
</script>