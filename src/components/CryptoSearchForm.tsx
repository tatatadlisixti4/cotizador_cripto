import {ChangeEvent, useState} from "react"
import {currencies} from "../data"
import {useCryptoStore} from "../store"
import { Pair } from "../types"

export default function CryptoSearchForm() {
    const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptoCurrency: ''
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option 
                            key={currency.code}
                            value={currency.code}
                        >{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptoCurrency">Criptomoneda:</label>
                <select 
                    name="cryptoCurrency" 
                    id="cryptoCurrency"
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    {cryptoCurrencies.map(crypto => (
                        <option
                            key={crypto.CoinInfo.FullName}
                            value={crypto.CoinInfo.Name}
                        >{crypto.CoinInfo.FullName}</option>
                    ))}
                    
                </select>
            </div>

            <input 
                type="submit" 
                value='Cotizar'
            />
        </form>
    )
}
