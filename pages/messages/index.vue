<template>
    <v-layout>
        <!--        <ul>

                    <li v-for="message in messages" :key="message.id">
                        {{message.text}} "-&#45;&#45;" {{message.text1}}
                        <a href="" @click.prevent="openMessage(message.id)">Message id {{message.id}}</a>
                    </li>
                </ul>-->
        <v-flex>
            <v-card v-for="message in messages" :key="message.id">

                <v-img :src="`http://192.168.0.206:9000/img/${message.imageName}`" aspect-ratio="1.4">
                    <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                            <div class="subheading">{{message.text}}</div>
                            <div class="body-1">{{message.text1}}</div>
                        </v-col>
                    </v-row>
                </v-img>

                <v-card-title class="headline">
                    {{message.text}}
                </v-card-title>
                <v-card-text>
                    <p>{{message.text1}}</p>
                    <p>
                        Перейти к карточке
                        <a href="" @click.prevent="openMessage(message.id)">номер id {{message.id}}</a>
                    </p>

                    <div class="text-xs-right">
                        <em><small>&mdash;  Алибек ногмова кафе</small></em>
                    </div>

                    <br>
                    <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                    >
                        Закажи!!!
                    </a>
                </v-card-text>
<!--                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="primary"
                        nuxt
                        to="/inspire"
                    >
                        Continue
                    </v-btn>
                </v-card-actions>-->
            </v-card>
        </v-flex>
    </v-layout>

</template>

<script>
    export default {
        name: "index",
        data: () => ({
            messages: []
        }),
        async mounted() {
            //this.messages = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
            this.messages = await this.$axios.$get('http://192.168.0.206:9000/message/')
        },
        methods: {
            openMessage(message) {
                this.$router.push('messages/' + message)
            }
        },
        computed: {
            loadImage: function(e) {
                return "http://192.168.0.206:9000/img/" + e
            }
        }
    }
</script>

<style scoped>
    .v-card {
        margin-bottom: 10px;
    }
</style>
