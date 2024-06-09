import {dashboardData} from "./dashboard-data";
import {KillKane} from "./features/kill-kane";
import {KillKaneAction} from "./actions/Killkane";

/**
 * @type ConfigType
 */
export const config = {
    name: "Dishub",
    footer: [
        {
            name: {zh: "支持", en: "Support"},
            url: "https://github.com/SonMooSans"
        }
    ],
    settings: detail => [
        {
            id: "say",
            name: "Test",
            type: "string",
            value: detail["say"]
        }
    ],
    actions: {
        "kill_kane": KillKaneAction
    },
    features: {
        "auto_kill_kane": KillKane
    },
    tutorialUrl: "https://github.com/SonMooSans/discord-bot-dashboard",
    serverUrl: "https://my-backend-2.thinbackend.app",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1249321650105749595&permissions=8&scope=bot",
    data: {
        dashboard: dashboardData,
    },
}
