async function getLeagues() {
    return []
}

export default {
    namespaced: true,
    state: {
        bundesliga: {}
    },
    mutations: {

    },
    actions: {
        async initLeagues(context) {
            context.bundesliga = getLeagues()
        }
    },
    getters: {}
}
