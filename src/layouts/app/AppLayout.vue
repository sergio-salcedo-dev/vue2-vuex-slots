<template>
  <div class="container-fluid app-container">
    <header class="header app-container__item">
      <slot name="header">
        <AppLogo></AppLogo>
        <h1 class="fs-2 p-0 m-0 ms-2">My App</h1>
      </slot>
    </header>

    <slot name="nav">
      <AppNavbar class="nav" />
    </slot>

    <main class="main">
      <slot name="main">MAIN</slot>
    </main>

    <footer class="footer app-container__item">
      <slot name="footer">
        <AppLogo></AppLogo>
        <h1 class="fs-2 p-0 m-0 ms-2">My Footer App</h1>
      </slot>
    </footer>
  </div>
</template>

<script>
import AppNavbar from "@/components/app/AppNavbar";
import AppLogo from "@/components/app/AppLogo";

export default {
  name: "AppLayout",

  components: {
    AppNavbar,
    AppLogo,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-container {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, 1fr) 200px; */
  /*para que el aside se quede mas pequeño!!!*/
  /*grid-template-columns: repeat(auto-fill, 300px);*/
  //grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-columns: 1fr;
  /*el aside coge 300 el articulo 600px*/

  /* grid-template-columns: 1fr; */

  /*grid-template-rows: 100px 100px repeat(auto-fill, 1fr);*/
  //grid-template-rows: 50px 50px repeat(3, 1fr) 50px;
  grid-template-rows: 50px 50px 1fr 50px;
  /* grid-template-rows: 1fr 2fr 2fr 1fr; */

  /*gap: 0.5rem;*/

  /* hasta 900px */
  /*grid-template-areas:*/
  /*  "header header header"*/
  /*  "nav nav nav"*/
  /*  "main main main"*/
  /*  "footer footer footer";*/

  /* hasta 1200px */
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";

  width: 100%;
  height: 100vh;
  min-width: 320px;
  max-width: 1600px;
  padding: 0;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
  }
}

.header {
  grid-area: header;
  background-color: #42d382;
}

.nav {
  grid-area: nav;
  background-color: royalblue;
}

/*.aside {*/
/*  grid-area: aside;*/
/*  background-color: pink;*/
/*}*/

/*.article {*/
/*  grid-area: article;*/
/*  background-color: green;*/
/*  text-align: justify;*/
/*}*/

.footer {
  grid-area: footer;
  background-color: teal;
}
</style>
