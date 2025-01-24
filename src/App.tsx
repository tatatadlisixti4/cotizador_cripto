import {useEffect} from "react"
import {useCryptoStore} from "./store"
import CryptoSearchForm from "./components/CryptoSearchForm"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

export default function App() {
	const fetchCryptos = useCryptoStore(state => state.fetchCryptos)
	
	useEffect(() => {
		fetchCryptos()
	}, [])

	return (
		<div className="container">
			<h1 className="app-title">
				Cotizador de <span>Criptomonedas</span>
			</h1>

			<div className="content">
				<CryptoSearchForm />
				<CryptoPriceDisplay />
			</div>
		</div>
	)
}
