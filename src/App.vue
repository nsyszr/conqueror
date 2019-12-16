<template>
  <v-app id="app">
    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      mini-variant
      mini-variant-width="64"
      color="white"
      light
    >
      <v-list dense>
        <v-list-item link to="/" color="primary">
          <v-list-item-action>
            <v-tooltip right open-delay="100">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-view-dashboard</v-icon>
              </template>
              <span>Dashboard</span>
            </v-tooltip>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/devices" color="primary">
          <v-list-item-action>
            <v-tooltip right open-delay="100">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-view-list</v-icon>
              </template>
              <span>Geräteverwaltung</span>
            </v-tooltip>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Geräteverwaltung</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app clipped-left color="white" elevation="0" dense> -->
    <v-app-bar app clipped-left color="white" elevation="1" class="pl-1" id="app-bar">
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
      <!-- <div class="d-flex flex-column border-bottom app-breadcrumbs pl-4">
        <v-breadcrumbs class="pa-0" :items="items" divider=">"></v-breadcrumbs>
      </div> style="margin-top:-32px;padding-top:32px;"-->
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
    drawer: null,
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_dashboard"
      },
      {
        text: "Geräteverwaltung",
        disabled: true,
        href: "breadcrumbs_link_1"
      }
    ]
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
  /*box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.66) !important;*/
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12) !important;
}

#app-footer {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.12);
  // border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  // box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.33) !important;
}

.app-breadcrumbs {
  background-color: rgba(0, 0, 0, 0);
  min-height: 32px;
  padding-top: 6px;
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
