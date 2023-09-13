import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
  text: {
    type: OptionType.STRING,
    description: "What to replace the \"I'm new here, say hi!\" text with",
    default: "I\'m new here :(",
    restartNeeded: true,
}});

export default definePlugin({
    name: "ImNewHere",
    description: "Allows for the ability to change the \"I\'m new here, say hi!\" text on new joiners",
    authors: [{
        id: 589322754470445057n,
        name: "dwnas"
    }],
    settings,
    patches: [{
        find: "NEW_MEMBER_BADGE_TOOLTIP_TEXT:",
            replacement: {
                match: /"I\'m new here, say hi\!"/,
                replace: "$self.settings.store.text"
            }
    }],

});
