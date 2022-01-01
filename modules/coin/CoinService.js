export default class CoinService {
    #coin = 0

    add() {
        this.#coin += 1
    }

    remove() {
        this.#coin -= 1
    }

    getCoin() {
        return this.#coin
    }
}
