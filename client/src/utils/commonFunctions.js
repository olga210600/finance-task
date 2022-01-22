import { ReactComponent as AppleLogo } from '../images/apple.svg';
import { ReactComponent as GoogleLogo } from '../images/google.svg';
import { ReactComponent as MicrosoftLogo } from '../images/microsoft.svg';
import { ReactComponent as AmazonLogo } from '../images/amazon.svg';
import { ReactComponent as FacebookLogo } from '../images/facebook.svg';
import { ReactComponent as TeslaLogo } from '../images/tesla.svg';

export const companies = {
    AAPL: {
        key: 'AAPL',
        name: 'Apple',
        icon: <AppleLogo />
    },
    GOOGL: {
        key: 'GOOGL',
        name: 'Alphabet',
        icon: <GoogleLogo/>
    },
    MSFT: {
        key: 'MSFT',
        name: 'Microsoft',
        icon: <MicrosoftLogo/>
    },
    AMZN: {
        key: 'AMZN',
        name: 'Amazon',
        icon: <AmazonLogo/>,
    },
    FB: {
        key: 'FB',
        name: 'Facebook',
        icon: <FacebookLogo/>
    },
    TSLA: {
        key: 'TSLA',
        name: 'Tesla',
        icon: <TeslaLogo/>
    },
}

export const getFullNameTicker = (ticker) => {
    switch (ticker) {
        case companies.AAPL.key:
            return companies.AAPL.name
        case companies.GOOGL.key:
            return companies.GOOGL.name
        case companies.MSFT.key:
            return companies.MSFT.name
        case companies.AMZN.key:
            return companies.AMZN.name
        case companies.FB.key:
            return companies.FB.name
        case companies.TSLA.key:
            return companies.TSLA.name
        default:
            return '';
    }
}