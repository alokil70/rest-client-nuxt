<template>
    <v-layout
        column
        justify-center
        align-center
    >
        <v-flex
            xs12
            sm8
            md6
        >
            <div class="text-center">

            </div>
            <v-card>
                <v-card-title class="headline">
                    Welcome to the Vuetify + Nuxt.js template
                </v-card-title>
                <v-card-text>
                    <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to
                        empower developers to create amazing applications.</p>

                    <p>
                        If you have questions, please join the official <a
                        href="https://chat.vuetifyjs.com/"
                        target="_blank"
                        title="chat"
                    >
                        discord
                    </a>.
                    </p>

                    <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in
                        the future.</p>
                    <div class="text-xs-right">
                        <em><small>&mdash; John Leider</small></em>
                    </div>

                    <br>

                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="primary"
                        nuxt
                        to="/inspire"
                    >
                        Continue
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

    export default {
        components: {
        }
    }
</script>
