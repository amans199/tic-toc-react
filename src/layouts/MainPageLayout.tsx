import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Routes from '../Routes'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }: { currency: string, rate: string }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

// ExchangeRates.propTypes = {
//     currency: propTypes.string.isRequired,
//     rate: propTypes.string.isRequired,
// };


const MainPageLayout = ({ children }: { children: any }) => {
    return (
        <>
            <Routes />
            <main>
                <ExchangeRates />
                {children}
            </main>
        </>
    )
}


export default MainPageLayout