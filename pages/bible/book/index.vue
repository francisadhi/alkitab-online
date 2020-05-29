<template>
    <div class="container">
        <b-row class="text-center">
        <!-- <b-col class="mt-4"> -->
            <app-card v-for="book in books" :key="book.id" :title="book.name" :nameLong="book.nameLong" :link="{name: 'bible-bab-id', params: {id: book.id}}" />
        <!-- </b-col> -->
        </b-row>
    </div>
</template>

<script>
import AppCardVue from '@/components/molecules/AppCard.vue';
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        // 'app-search': AppSearchVue,
        'app-card': AppCardVue
    },
    async asyncData({store}) {
        await Promise.all([
            store.dispatch('bible/getBookList')
        ])
        return
    },
    computed: {
        ...mapState('bible', {
            books: state => state.books,
        })
    },
    methods: {
        ...mapActions('bible', ['getBookList']),
    }
}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>