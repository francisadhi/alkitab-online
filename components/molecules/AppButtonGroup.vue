<template>
    <div class="text center">
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
        <b-button>&laquo;</b-button>
        <b-button><nuxt-link :to="{name:`${link.name}`, params: {id: `${link.params.preid}`}}">&lsaquo;</nuxt-link></b-button>
        </b-button-group>
        <b-button-group class="mx-1">
        <b-button disabled="">Edit</b-button>
        <b-button disabled="">Undo</b-button>
        <b-button disabled="">Redo</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
        <b-button><nuxt-link :to="{name:`${link.name}`, params: {id: `${link.params.nextid}`}}">&rsaquo;</nuxt-link></b-button>
        <b-button>&raquo;</b-button>
        </b-button-group>
    </b-button-toolbar>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        },
    }

}
</script>

<style scoped>

</style>