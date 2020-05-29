import { fetchBooks } from '@/api/bible.js'
export const state = () => ({
    // isAuth: false,
    api_token: null,
    books: {},
    chapters: {},
    chapter: {}
})

export const mutations = {
    SET_API_TOKEN(state, payload) {
        state.api_token = payload
    },
    SET_BOOK_DATA(state, payload) {
        state.books = payload
    },
    SET_CHAPTER_DATA(state, payload) {
        state.chapters = payload
    },
    SET_CHAPTER(state, payload) {
        state.chapter = payload
    }
}

export const actions = {
    // nuxtServerInit({ commit }, context) {
    //     // commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)
    //     // if (context.app.$auth.$state.loggedIn) {
    //         commit('SET_API_TOKEN', '6203c1c09761df55ea32eac2b4f2b09f')
    //     // }
    // },
    getBookList({commit , state}, form){
    //   state.listLoading = true
        return new Promise((resolve, reject) => {
            this.$axios.get('/bibles/2dd568eeff29fb3c-01/books').then(response => {
                // console.log(response)

                if (response.status === 200){
                    commit('SET_BOOK_DATA', response.data.data)
                    resolve()
                } else {
                    reject(response)
                }
            })
        })
    },
    getChapterList({commit , state}, payload){
    //   state.listLoading = true
        return new Promise((resolve, reject) => {
            this.$axios.get(`/bibles/2dd568eeff29fb3c-01/books/${payload}/chapters`).then(response => {
                // console.log(response)

                if (response.status === 200){
                    commit('SET_CHAPTER_DATA', response.data.data)
                    resolve()
                } else {
                    reject(response)
                }
            })
        })
    },
    getChapter({commit , state}, payload){
    //   state.listLoading = true
        return new Promise((resolve, reject) => {
            this.$axios.get(`/bibles/2dd568eeff29fb3c-01/chapters/${payload}`).then(response => {
                // console.log(response)

                if (response.status === 200){
                    commit('SET_CHAPTER', response.data.data)
                    resolve()
                } else {
                    reject(response)
                }
            })
        })
    },
}