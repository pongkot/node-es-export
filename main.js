import CoinService from "./modules/coin/CoinService.js";
import Logger from "./modules/common/Logger.js";

const main = async () => {
    const coin = new CoinService()
    const logger = Logger.getInstance()
    for (let i = 0; i < 10; i++) {
        const rand = Math.floor(Math.random() * 2)
        logger.log(`rand: ${rand}`)
        if (rand > 0) {
            coin.add()
            logger.log(`coin++`)
        } else if (coin.getCoin() > 0) {
            coin.remove()
            logger.log(`coin--`)
        }
    }
    const coins = coin.getCoin()
    logger.log(`coin: ${coins}`)
}

main().then(null)
