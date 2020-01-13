<template>
    <v-app id="inspire">

        <v-card outlined v-for="message in messages" :key="message.id">
            <v-card-title class="headline">
                {{message.text}}-----{{message.text1}}

                <v-col
                    class="text-right">
                    <v-btn
                        small
                        text
                        @click="btnDelete(message.id)"
                    >Удалить
                    </v-btn>
                </v-col>
            </v-card-title>


            <v-card-text>
                <li>
                    Перейти к карточке
                    <a href="" @click.prevent="openMessage(message.id)">номер id {{message.id}}</a>
                </li>
                <v-btn
                    color="primary"
                    x-small
                    nuxt
                    right

                    to="/inspire"
                >
                    Изменить
                </v-btn>
            </v-card-text>


        </v-card>


        <v-btn
            bottom
            color="pink"
            dark
            fab
            fixed
            x-large
            right
            @click="dialog = !dialog"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog
            v-model="dialog"
            width="800px"
        >
            <v-card>
                <v-card-title class="grey darken-2">
                    Create contact
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col
                            class="align-center justify-space-between"
                            cols="12"
                        >
                            <v-row
                                align="center"
                                class="mr-0"
                            >
                                <v-avatar
                                    size="40px"
                                    class="mx-3"
                                >
                                    <img
                                        src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                        alt=""
                                    >
                                </v-avatar>
                                <v-text-field v-model="text"
                                              placeholder="Name"
                                />
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="text1"
                                          prepend-icon="business"
                                          placeholder="Company"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="text3"
                                          placeholder="Job title"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="text4"
                                          prepend-icon="mail"
                                          placeholder="Email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-file-input show-size label="File input" ref="file" v-model="files"
                            >File
                            </v-file-input>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn
                        text
                        color="primary"
                    >More
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                        text
                        color="primary"
                        @click="dialog = false"
                    >Cancel
                    </v-btn>
                    <v-btn
                        text
                        @click="submitFiles"
                    >Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    export default {
        name: "addForm",
        data() {
            return {
                text: '',
                text1: '',
                text3: '',
                text4: '',
                text5: '',
                text6: '',
                files: null,
                imageName: '',
                messages: [],
                dialog: false
            }
        },
        async mounted() {
            this.messages = await this.$axios.$get('http://192.168.0.206:9000/message/')
        },
        methods: {
            async save() {
                const formFields = {
                    text: this.text,
                    text1: this.text1,
                    imageName: this.imageName
                };
                await this.$axios.$post('http://192.168.0.206:9000/message/', formFields)
                    .then(res => {
                        console.log(res)
                    })
            },
            async submitFiles() {
                if (this.files) {
                    //this.files = event.target.files[0]
                    const formData = new FormData();
                    /*  for (let file of this.files) {
                      console.log('file   ' + file)*/
                    formData.append("image", this.files, this.files.name);
                    await this.$axios.$post('http://192.168.0.206:9000/message/upload', formData)
                        .then(response => {
                            this.imageName = response;
                            console.log("Fiile Success!");
                            console.log({response});
                        })
                }
                this.save()
            },
            btnDelete(id) {
                return this.$axios.$delete("http://192.168.0.206:9000/message/" + id)
            }
        }

    }
</script>

<style scoped>
    .v-card {
        margin-bottom: 10px;
    }
</style>
