export const state = () => ({
    messages: []
})

export const mutations = {
    setMessages(state, messages){
        state.messages = messages
    }
}

export const actions = {
    async getM(){
        const data = await this.$axios.$get('http://localhost:9000/message')

    }
}

export const getters = {
    messages: s => s.messages
}
