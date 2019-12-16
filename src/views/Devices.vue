<template>
  <v-container class="fill-height ma-0 pa-0" fluid>
    <!-- <v-row>
      <v-col>
        <span>This is the devices page</span>
      </v-col>
    </v-row>-->
    <!-- <h1>group={{ groupItemModel }}</h1>
    <h1>location={{ locationItemModel }}</h1>

    <v-list>
      <v-list-item-group v-model="groupItemModel">
        <v-list-item v-for="(item, i) in groupItems" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-list-item-group v-model="locationItemModel">
        <v-list-item v-for="(item, i) in locationItems" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>-->
    <v-row class="fill-height" no-gutters>
      <v-col sm="2" class="border-right">
        <v-card class="fill-height pa-0 ma-0" tile elevation="0">
          <v-toolbar flat>
            <v-toolbar-title>Durchsuchen</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip top open-delay="500">
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <span>Mehr</span>
            </v-tooltip>
          </v-toolbar>
          <v-list subheader rounded dense>
            <v-subheader>Nach Standort</v-subheader>
            <v-list-item-group v-model="locationItemModel" color="primary">
              <v-list-item v-for="(item, i) in locationItems" :key="i">
                <!-- <v-list-item-avatar style="height:0;min-width:24px;width:24px;">
                  <v-icon small v-html="item.icon"></v-icon>
                </v-list-item-avatar>-->
                <v-list-item-content>
                  <v-list-item-title>
                    {{item.title}}
                    <span class="count">({{item.count}})</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-subheader>
              Nach Gruppe
              <v-spacer></v-spacer>
              <v-tooltip top open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn small icon v-on="on">
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>Neue Gruppe hinzufügen</span>
              </v-tooltip>
            </v-subheader>
            <v-list-item-group v-model="groupItemModel" color="primary">
              <v-list-item v-for="(item, i) in groupItems" :key="i">
                <!-- <v-list-item-avatar style="height:0;min-width:24px;width:24px;">
                  <v-icon small v-html="item.icon"></v-icon>
                </v-list-item-avatar>-->
                <v-list-item-content>
                  <v-list-item-title>
                    {{item.title}}
                    <span class="count">({{item.count}})</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-subheader>Nach Status</v-subheader>
            <v-list-item-group v-model="connectionStatusItemModel" color="primary">
              <v-list-item v-for="(item, i) in connectionStatusItems" :key="i">
                <v-list-item-avatar
                  style="height:0;min-width:16px;width:16px;margin-right:8px !important;"
                >
                  <v-icon small v-html="item.icon" :color="item.iconColor"></v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{item.title}}
                    <span class="count">({{item.count}})</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-slide-x-transition>
        <v-col :sm="deviceListSize" class="border-right">
          <v-card class="fill-height pa-0 ma-0" tile elevation="0">
            <v-toolbar flat>
              <v-toolbar-title>Geräte (10 von 18)</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip top open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>Neues Gerät registrieren</span>
              </v-tooltip>
              <v-tooltip top open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-file-upload-outline</v-icon>
                  </v-btn>
                </template>
                <span>Geräte importieren</span>
              </v-tooltip>
              <v-tooltip top open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Aktualisieren</span>
              </v-tooltip>
              <v-tooltip top open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <span>Mehr</span>
              </v-tooltip>
            </v-toolbar>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="desserts"
              item-key="name"
              show-select
              class="elevation-0"
              disable-pagination
              hide-default-footer
            >
              <template v-slot:top>
                <v-text-field
                  class="pl-4 pr-4"
                  placeholder="Suchen..."
                  prepend-icon="mdi-magnify"
                  filled
                  rounded
                  dense
                  single-line
                  clearable
                ></v-text-field>
              </template>
              <template v-slot:item.name="{ item }">
                <a href @click.prevent="showDeviceDetails=item.name">{{ item.name }}</a>
              </template>
              <template v-slot:item.calories="{ item }">
                <v-chip
                  class="ma-0"
                  :color="item.calories < 200 ? 'success' : 'gray'"
                  :text-color="item.calories < 200 ? 'white' : 'inherit'"
                  small
                  label
                >Verbunden</v-chip>
              </template>
              <!-- <template v-slot:item.data-table-select="{ isSelected, select }">
              <v-simple-checkbox color="green" :value="isSelected" @input="select($event)"></v-simple-checkbox>
              </template>-->
            </v-data-table>
          </v-card>
        </v-col>
      </v-slide-x-transition>
      <v-slide-x-reverse-transition>
        <v-col sm="3" class="border-right" v-if="showDeviceDetails">
          <v-card class="fill-height pa-0 ma-0" tile elevation="0">
            <v-toolbar flat>
              <v-toolbar-title>{{showDeviceDetails}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip top open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" @click.stop="showDeviceDetails=null">
                    <v-icon>mdi-window-close</v-icon>
                  </v-btn>
                </template>
                <span>Schließen</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-title class="pt-2">
              <v-btn depressed small color="primary">Firmware aktualisieren</v-btn>
            </v-card-title>
          </v-card>
        </v-col>
      </v-slide-x-reverse-transition>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "devices",
  data: () => ({
    groupItems: [
      {
        icon: "mdi-inbox",
        title: "Leitstand",
        count: 2
      },
      {
        icon: "mdi-star",
        title: "Anlage ABC",
        count: 9
      },
      {
        icon: "mdi-star",
        title: "Anlage XYZ",
        count: 3
      }
    ],
    groupItemModel: null,
    locationItems: [
      {
        icon: "mdi-inbox",
        title: "Regensburg",
        count: 11
      },
      {
        icon: "mdi-star",
        title: "München",
        count: 2
      }
    ],
    locationItemModel: null,
    connectionStatusItems: [
      {
        icon: "mdi-circle",
        iconColor: "success",
        title: "Verbunden",
        count: 8
      },
      {
        icon: "mdi-circle",
        iconColor: "black",
        title: "Getrennt",
        count: 2
      },
      {
        icon: "mdi-circle",
        iconColor: "yellow",
        title: "Wartung",
        count: 0
      },
      {
        icon: "mdi-circle",
        iconColor: "primary",
        title: "Registriert",
        count: 3
      }
    ],
    connectionStatusItemModel: null,
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%"
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%"
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%"
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%"
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%"
      }
    ],
    // deviceListSize: 10
    showDeviceDetails: null
  }),
  computed: {
    deviceListSize: function() {
      if (this.showDeviceDetails) return 7;
      return 10;
    }
  }
  /*components: {
    HelloWorld
  }*/
};
</script>
<style lang="scss">
.count {
  color: rgb(0, 0, 0, 0.54);
  font-size: 0.75rem;
}
</style>