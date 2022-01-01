import * as fs from 'fs';

export default class PackageJson {
    #package

    constructor() {
        const buffer = fs.readFileSync('package.json')
        const content = buffer.toString()
        this.#package = JSON.parse(content)
    }

    get(name) {
        return this.#package[name]
    }
}
