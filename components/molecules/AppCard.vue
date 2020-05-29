<template>
<div class="text-center">
    <b-col class="mt-3 text-center">
    <b-card
    :title="`${title}`"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ nameLong }}
    </b-card-text>

    <b-button style="background: rgb(228, 149, 149);"><nuxt-link class="app-button" :to="{name:`${link.name}`, params: {id: `${link.params.id}`}}">Buka {{title}}</nuxt-link></b-button>
  </b-card>
    </b-col>
</div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        link: {
            type: Object,
            required: true
        },
        nameLong: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.app-button {
    text-decoration: none;
    color: aliceblue;
    background: rgb(228, 149, 149);
}
</style>