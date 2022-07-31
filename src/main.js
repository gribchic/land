import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import "@/scss/_index.scss";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core';
import faIcons from "@/imports/faIcons";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faIcons);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//gsap
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//Validation
import Vuelidate from 'vuelidate';
import VuelidateBehavior from './plugins/vuelidate-behavior';

Vue.use(Vuelidate);
Vue.use(VuelidateBehavior);

//InputMask
import VueInputmask from './plugins/vue-inputmask';

Vue.use(VueInputmask);

//VSelect
import vSelect from "./settings/vSelectConfig";

Vue.component('v-select', vSelect);

//GoogleMap
import * as VueGoogleMaps from 'vue2-google-maps';

//sendMail axios
import "./settings/axiosConfig";

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC-bBygcJcHt6OXFfmB5PDOKa4f3zfbfSM',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
})
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
