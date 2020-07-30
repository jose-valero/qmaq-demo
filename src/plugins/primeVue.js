import Vue from "vue";

//componentes
import Calendar from "primevue/calendar";
import MultiSelect from "primevue/multiselect";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";

//estilos globales
import "primevue/resources/themes/vela-orange/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//implementacion
Vue.component("Calendar", Calendar);
Vue.component("MultiSelect", MultiSelect);
Vue.component("Dropdown", Dropdown);
Vue.component("Button", Button);
Vue.component("FileUpload", FileUpload);
Vue.component("DataTable", DataTable);
Vue.component("Column", Column);
Vue.component("ColumnGroup", ColumnGroup);
