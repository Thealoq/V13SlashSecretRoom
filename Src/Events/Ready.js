const config = global.config
const client = global.client
const Time = new Date()
class Events {
    constructor() {
        this.name = "ready"
    }
    async execute() {
        client.user.setPresence({ activities: [{ name: config.footer }] });
    }
}
module.exports = Events