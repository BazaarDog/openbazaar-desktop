const defaultSearchProviders = [
  {
    id: 'ob1',
    name: 'OB1',
    logo: '../imgs/ob1searchLogo.png',
    localLogo: '../imgs/ob1searchLogo.png',
    search: 'https://search.ob1.io/search',
    listings: 'https://search.ob1.io/search/listings',
    reports: 'https://search.ob1.io/reports',
    torsearch: 'http://my7nrnmkscxr32zo.onion/search',
    torlistings: 'http://my7nrnmkscxr32zo.onion/search/listings',
    locked: true,
  },
  {
    id: 'blockbooth',
    name: 'Block Booth',
    logo: '../imgs/blockboothLogo.png',
    localLogo: '../imgs/blockboothLogo.png',
    search: '',
    listings: 'https://search.blockbooth.com/api/',
    torsearch: 'http://vnjzhvm5gkctyldn.onion/api/',
    torlistings: 'http://vnjzhvm5gkctyldn.onion/api/',
    locked: true,
  },
  {
    id: 'bazaardog',
    name: 'Bazaar Dog',
    logo: '../logo.png',
    localLogo: '../imgs/bazaarDogLogoOffline.png',
    search: 'https://bazaar.dog',
    listings: 'https://bazaar.dog/api/',
    reports: 'https://bazaar.dog/reports',
    torsearch: 'http://obfojhv6ay5fedog.onion/',
    torlistings: 'http://obfojhv6ay5fedog.onion/api/',
    locked: false,
  },
];

export default defaultSearchProviders;
