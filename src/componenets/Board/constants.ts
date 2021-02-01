export interface SuitDetails {
  label: string;
  path: string;
  img: string;
}

export const SUITS_META = {
  STARSHIPS: {
    label: 'Starships',
    path: '/starships',
    img:
      'https://scandinaviantraveler.com/sites/default/files/styles/article_top_full_imagecustom_user_desktop_large_1x/public/starwars-fleet-1140x619.jpg?itok=jDZnk9oX',
  },
  PEOPLE: {
    label: 'People',
    path: '/people',
    img: 'https://pvpantherprint.org/wp-content/uploads/2018/03/star-wars-prequels.jpg',
  },
};

export const STARSHIPS_CARD_IMGS = {
  'c3RhcnNoaXBzOjI=':
    'https://www.pngfind.com/pngs/m/79-790919_corellian-corvette-png-download-transparent-png.png',
};

export const PEOPLE_CARD_IMGS = {
  'cGVvcGxlOjE=':
    'https://static01.nyt.com/images/2017/11/16/watching/force-awakens-watching-02/force-awakens-watching-02-jumbo-v4.jpg?quality=90&auto=webp',
  cGVvcGxlOjc2:
    'https://lumiere-a.akamaihd.net/v1/images/databank_emirwattambor_01_169_9528ba0f.jpeg?region=53%2C0%2C1454%2C818&width=768',
};
