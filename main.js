// const { createApp } = Vue;

const app = Vue.createApp({
  data() {
    return {
      message: "Ciao Vue 3!",
      image: " ./img/planning1.png",
    };
  },
});

app.mount("#root");
