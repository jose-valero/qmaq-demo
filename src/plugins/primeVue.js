import Vue from "vue";

import Calendar from "primevue/calendar";
import MultiSelect from "primevue/multiselect";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FileUpload from 'primevue/fileupload';

import "primevue/resources/themes/vela-orange/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

Vue.component("Calendar", Calendar);
Vue.component("MultiSelect", MultiSelect);
Vue.component("Dropdown", Dropdown);
Vue.component("Button", Button);
Vue.component("FileUpload", FileUpload);