<template>
  <div class="repo repo-wrapper">
    <div class="card tile">
      <div class="card-content">
        <div class="content">
          <p class="repo__title">
            <span class="icon">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />
              </svg>
            </span>
            <a class="repo__link" :href="data.html_url" target="_blank" rel="noopener noreferrer">{{data.name}}</a>
            <a class="repo__homepage is-pulled-right" :href="data.homepage" target="_blank" rel="noopener noreferrer" v-if="data.homepage">
              <span class="icon" >
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </span>
            </a>
            </p>
          <p class="repo__description">{{data.description}}</p>
          <nav class="repo__stats level is-mobile">
            <div class="level-left">
              <a class="repo__language level-item">
                <span>{{data.language}}</span>
              </a>
              <a class="repo__forkcount level-item">
                 <span class="icon">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z" />
                  </svg>
                </span>
                {{data.forks_count}}
              </a>
              <a class="repo__starcount level-item">
                 <span class="icon">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                  </svg>
                </span>
                {{data.stargazers_count}}
              </a>
              <a class="repo__size level-item">
                <span>{{data.size}} KB</span>
              </a>
            </div>
          </nav>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'repo',
  props: ['data'],
}
</script>

<style lang="scss">
  .repo .repo__title {
      font-weight: bold;
  }
  .repo .repo__title a {
      color: #4a4a4a;
  }
  .repo .repo__title svg {
    position: absolute;
    margin-top: 6px;
  }
  .repo__description {
      font-size: 13px;
  }
  .repo__stats {
      font-size: 15px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      line-height: 1.5em;
      margin-top: 40px;
  }
  .repo__stats a {
    color: #beaab7;
  }
</style>