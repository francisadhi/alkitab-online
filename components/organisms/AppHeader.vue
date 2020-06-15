<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container fluid="lg">
    <b-navbar-brand><nuxt-link to="/" class="app-logo"><app-logo /></nuxt-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item right href="#">Link</b-nav-item>
        <b-nav-item right href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <nuxt-link v-for="routes in links"
          v-bind:key="routes.id" class="app-link"
          :to="`${routes.page}`">
          {{routes.text}}
          </nuxt-link>
          <!-- <nuxt-link to="/about">
            <b-nav-item>Tentang</b-nav-item>
          </nuxt-link> -->
          <!-- <nuxt-link to="/">
            <b-nav-item>Hubungi Kami</b-nav-item>
          </nuxt-link> -->
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
        <!-- </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
// import { Component, Vue } from 'nuxt-property-decorator'
// export default class Header extends Vue{

  import AppLink from '../atoms/AppLink'

  import HorizontalLinkList from '../molecules/HorizontalLinkList'
  import AppLogoVue from '~/components/atoms/AppLogo.vue'
  export default {
    components: {
      'app-logo': AppLogoVue
    },
    data() {
      return {
        links: [
          {
            id: 0,
            text: 'Tentang',
            page:'/about'
          },
          {
            id: 1,
            text: 'Hubungi Kami',
            page:'/contact-us'
          }
        ]
      }
    }
  }
// }
</script>

<style scoped>
.app-logo {
  color: #f0f5f3;
  margin: 0 10px 0 10px;
}
.app-link {
  color: #fff;
  text-decoration: none;
  margin: 0 20px 0 20px;
}
.app-link:hover {
  color: #000;
  /* background-color: #4fc08d; */
}
.router-link-exact-active {
  margin-bottom: 4px;
  border-bottom: 2px solid #4fc08d;
}
</style>