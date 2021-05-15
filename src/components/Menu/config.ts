import { MenuEntry } from '@durianexchange/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://localhost:3000/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://localhost:3000/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://localhost:3000/syrup',
  },
  /* {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://localhost:3000/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'http://localhost:3000/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'http://localhost:3000/teams',
      },
      {
        label: 'Your Profile',
        href: 'http://localhost:3000/profile',
      },
    ],
  }, */
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.durian.exchange',
      },
      {
        label: 'Tokens',
        href: 'https://info.durian.exchange/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.durian.exchange/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.durian.exchange/accounts',
      },
    ],
  },
  /* {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'http://localhost:3000/ifo',
  }, */
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      }, */
      {
        label: 'Github',
        href: 'https://github.com/DurianExchange',
      },
      {
        label: 'Docs',
        href: 'https://docs.durian.exchange',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config
