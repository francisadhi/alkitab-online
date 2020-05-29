<template>
  <div>
    <b-container>
    <div>
      <app-carousel class="app-carousel"/>
      <b-row class="text-center">
        <b-col class="mt-4">
          <app-card title="Daftar Kitab" :link="{name: 'bible-book', params: {id: ''}}" />
        </b-col>
        <b-col class="mt-4">
          <app-card title="Lagu Pujian" :link="{name: '', params: {id: ''}}" />
        </b-col>
        <b-col class="mt-4">
          <app-card title="Blog" :link="{name: '', params: {id: ''}}" />
        </b-col>
      </b-row>
      <app-section title="Test">
        <b-row class="text-center">
          <b-col class="mt-4">
            <app-card />
          </b-col>
          <b-col class="mt-4">
            <app-card />
          </b-col>
          <b-col class="mt-4">
            <app-card />
          </b-col>
        </b-row>
      </app-section>
      <!-- <logo />
      <h1 class="title">
        alkitab-online
      </h1>
      <h2 class="subtitle">
        My lovely Nuxt.js projectttt
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
    </b-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import AppCarousel from '~/components/atoms/AppCarousel.vue'
import AppCard from '~/components/molecules/AppCard.vue'
import AppSection from '../components/molecules/AppSection.vue'

export default {
  components: {
    Logo,
    'app-carousel': AppCarousel,
    'app-card': AppCard,
    'app-section': AppSection
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.app-carousel {
  margin: 10px 0 40px 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
