import PackageJson from "./PackageJson.js";

export default class Logger {
    static #instance = new Logger()
    #packageJson = new PackageJson()
    #context

    static getInstance() {
        return this.#instance
    }

    static #getDate() {
        return new Date().toLocaleString()
    }

    setContext(context) {
        this.#context = context
    }

    getContext() {
        return this.#context ? `[${this.#context}] ` : ``
    }

    log(content) {
        const dt = Logger.#getDate()
        const appName = this.#packageJson.get('name')
        const context = this.getContext()
        console.log(`[${appName}] ${dt}   LOG ${context}${content}`)
    }
}
