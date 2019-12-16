<template>
  <v-app id="app">
    <!-- <v-navigation-drawer v-model="drawer" mini-variant>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/devices">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <!-- <v-app-bar app clipped-left class="pl-3" color="white" elevation="0" dense> -->
    <v-app-bar app clipped-left color="white" elevation="1" id="app-bar">
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer" />

      <v-toolbar-title>IoT Konsole</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <v-img src="./assets/insys-icom-logo.png" height="48" width="86"></v-img>
      </span>
      <v-spacer></v-spacer>
      <v-btn icon color="primary">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- <v-footer app class="ma-0 pa-0" id="app-footer">
      <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app-bar {
  color: #08a5e0;
  box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.96) !important;
}

#app-footer {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.12);
  // border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  // box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.33) !important;
}

/*.v-list-item {
  min-height: 0 !important;
}*/

.shadow {
  box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.96) !important;
}

.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.border-right:last-child {
  border-right: 1px solid transparent;
}

.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/*#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
