<template>
  <div class="page project">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1 class="page-header">Projects.</h1>
    <div class="page-content"></div>
    <Loading v-show="profileLoading"/>
    <div class="columns is-multiline">
        <div v-for="repos of repository" :key="repos.id" class="column is-one-third">
          <Repo :data="repos"/>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import GitHub from "github-api";
import Loading from "@/components/Loading.vue";
import Repo from "@/components/Repo.vue";
import Footer from "@/components/Footer.vue";
const github = new GitHub();
const user = github.getUser('zekinah');
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
    Repo,
    Loading,
    Footer
  },
  mounted() {
    this.$ga.page('/project');
  }
}
</script>
