import axios from 'axios'

const BACKEND_ENDPOINT = 'http://localhost:9999'
const BACKEND_URL = BACKEND_ENDPOINT + '/api/football/leagues'

async function getLeagues() {
    try {
        const response = await axios.get(BACKEND_URL)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
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
            //let userid = context.rootState.currentUser
            let leagues = await getLeagues()
            if (!leagues || leagues.length === 0) {
                return
            }
            let defaultLeague = leagues[0]
            console.log(context)
            console.log(defaultLeague)

            // context.commit('updateBusinessname', defaultCompany.name)
            // context.commit('updateStreet', defaultCompany.address.street)
            // context.commit('updateHousenumber', defaultCompany.address.housenumber)
            // context.commit('updatePostalcode', defaultCompany.address.zipCode)
            // context.commit('updateCity', defaultCompany.address.city)
            // context.commit('updatePhone', defaultCompany.phone)
            // context.commit('updateEmail', defaultCompany.businessEmail)
            // context.commit('updateIndustry', defaultCompany.industry)
            // context.commit('updateWebsite', defaultCompany.website)
        }
    },
    getters: {}
}