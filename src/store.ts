import axios from "axios"
import {create} from "zustand"
import {CryptoCurrenciesResponseSchema} from "./schema/crypto-schema"
import {CryptoCurrency} from "./types"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>

}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    
    if(result.success) {
        return result.data
    }
}

export const useCryptoStore = create<CryptoStore>(set => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        console.log('Desde FetchCryptos')
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    }

}))