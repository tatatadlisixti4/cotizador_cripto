import {devtools} from 'zustand/middleware'
import {create} from "zustand"
import {CryptoCurrency} from "./types"
import getCryptos from "./services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools(set => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        console.log('Desde FetchCryptos')
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    }
})))