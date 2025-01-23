import {currencies} from "../data"
import { useCryptoStore } from "../store"
export default function CryptoSearchForm() {
    const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
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

            <div className="field">
                <label htmlFor="cryptocurrency">Criptomoneda:</label>
                <select 
                    name="cryptocurrency" 
                    id="cryptocurrency"
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

            <input 
                type="submit" 
                value='Cotizar'
            />
        </form>
    )
}
