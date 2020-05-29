<template>
    <div class="container">
        <b-row class="text-center">
        <!-- <b-col class="mt-4"> -->
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
                <b-card-text>
                {{ chapter.content }}
                </b-card-text>
            </b-card>
            <app-button-group :link="{name: 'bible-bab-id', params: {id: '', nextid: chapter.next.id, preid: chapter.previous.id}}" class="text center"/>
        <!-- </b-col> -->
        </b-row>
    </div>
</template>

<script>
import AppCardVue from '@/components/molecules/AppCard.vue';
import AppSearchVue from '@/components/organisms/AppSearch.vue';
import { mapActions, mapState } from 'vuex'
import AppButtonGroupVue from '@/components/molecules/AppButtonGroup.vue';
export default {
    // props: {
    //     link: {
    //         type: Object,
    //         required: true
    //     },
    // },
    components: {
        'app-search': AppSearchVue,
        'app-card': AppCardVue,
        'app-button-group': AppButtonGroupVue
    },
    async asyncData({store, params}) {
        // if (params.id != ''){
            await Promise.all([
                store.dispatch('bible/getChapter', params.id)
            ])
        // } else if (params.nextid != '') {
        //     await Promise.all([
        //         store.dispatch('bible/getChapter', params.nextid)
        //     ])
        // } else if (params.preid != '') {
        //     await Promise.all([
        //         store.dispatch('bible/getChapter', params.preid)
        //     ])
        // }
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