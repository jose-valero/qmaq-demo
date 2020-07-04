import Vue from "vue";
import Calendar from "primevue/calendar";
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';

import "primevue/resources/themes/vela-orange/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"

Vue.component("Calendar", Calendar);
Vue.component("MultiSelect", MultiSelect);
Vue.component("Dropdown", Dropdown);