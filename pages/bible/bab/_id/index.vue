<template>
    <div class="container">
        <b-row class="text-center">
        <!-- <b-col class="mt-4"> -->
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
                <b-card-text>
                {{ chapter.content }}
                </b-card-text>
            </b-card>
        <!-- </b-col> -->
        </b-row>
    </div>
</template>

<script>
import AppCardVue from '@/components/molecules/AppCard.vue';
import AppSearchVue from '@/components/organisms/AppSearch.vue';
import { mapActions, mapState } from 'vuex'
export default {
    // props: {
    //     link: {
    //         type: Object,
    //         required: true
    //     },
    // },
    components: {
        'app-search': AppSearchVue,
        'app-card': AppCardVue
    },
    async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('bible/getChapter', params.id)
        ])
        return
    },
    data() {
        return {
            params: this.$route.params.chapterid
        }
    },
    created() {
        // console.log(this.$props.link)
        // this.getChapters()
        // console.log('test '+this.params)
    },
    computed: {
        ...mapState('bible', {
            chapter: state => state.chapter,
        })
    },
    methods: {
        ...mapActions('bible', ['getChapterList']),
        // getChapters(){
        //     this.$store.dispatch('bible/getChapterList',this.$route.params.chapterid)
        // }
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