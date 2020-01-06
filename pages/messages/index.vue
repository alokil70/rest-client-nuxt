<template>
    <ul>
        <li v-for="message in messages" :key="message.id">
            {{message.text}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "index",
        data: () => ({
            messages: []
        }),
        async mounted() {
            this.messages = await this.$axios.$get('http://localhost:9000/message')
        },
        methods: {}
    }
</script>

<style scoped>

</style>
