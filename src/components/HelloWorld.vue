<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>
      </v-col>
      <v-row>
        {{ todos }}
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'HelloWorld',

    data: () => ({
      todos: null,
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
    }),
    mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => (this.todos = response.data));
  }
  }
</script>
