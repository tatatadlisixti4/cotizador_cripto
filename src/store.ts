import {devtools} from 'zustand/middleware'
import {create} from "zustand"
import {CryptoCurrency, CryptoPrice, Pair} from "./types"
import {fetchCurrentCryptoPrice, getCryptos} from "./services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools(set => ({
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result
        }))
    }
})))