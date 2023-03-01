import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { plugin, defaultConfig } from "@formkit/vue";
import BaseButton from "./components/UIs/BaseButton.vue";
import BaseCard from "./components/UIs/BaseCard.vue";

import BaseInput from "./components/UIs/BaseInput.vue";
import BaseBadge from "./components/UIs/BaseBadge.vue";
import BaseModalDialog from "./components/UIs/BaseModalDialog.vue";
import BaseRatingStarIcon from "./components/UIs/BaseRatingStarIcon.vue";

const app = createApp(App);

app.use(createPinia());

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-input", BaseInput);
app.component("base-badge", BaseBadge);
app.component("base-modal-dialog", BaseModalDialog);
app.component("base-rating-star-icon", BaseRatingStarIcon);

app.use(router).use(plugin, defaultConfig).mount("#app");
