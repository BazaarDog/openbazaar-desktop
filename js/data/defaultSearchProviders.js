export function getDefaultSearchProviders() {
  const defaultSearchProviders = [
    {
      id: 'ob1',
      name: 'OB1',
      logo: '../imgs/ob1searchLogo.png',
      search: 'https://search.ob1.io/search',
      listings: 'https://search.ob1.io/search/listings',
      torsearch: 'http://obsearchwhcqnhvj.onion/search',
      torlistings: 'http://obsearchwhcqnhvj.onion/search/listings',
      locked: true,
      order: 1,
    },
    {
      id: 'ob2',
      name: 'The server should overwrite this name',
      logo: '../imgs/defaultAvatar.png',
      search: 'https://search.ob1.io/search',
      listings: 'https://search.ob1.io/search/listings',
      torsearch: 'http://obsearchwhcqnhvj.onion/search',
      torlistings: 'http://obsearchwhcqnhvj.onion/search/listings',
      locked: true,
      order: 1,
    },
    {
      id: 'duo',
      name: 'Duo Search',
      logo: '../imgs/duoSearchLogo.png',
      search: 'https://search.duosear.ch/search',
      listings: 'https://search.duosear.ch/search/listings',
      torsearch: '',
      torlistings: '',
      locked: true,
      order: 2,
    },
  ];

  return defaultSearchProviders;
}
