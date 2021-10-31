type Page = {
  prefixIndex: string
  label: string
  path: string
}

export const PAGES: Page[] = [
  {
    prefixIndex: '00',
    label: 'Home',
    path: '/',
  },
  {
    prefixIndex: '01',
    label: 'Destination',
    path: '/destination',
  },
  {
    prefixIndex: '02',
    label: 'Crew',
    path: '/crew',
  },
  {
    prefixIndex: '03',
    label: 'Technology',
    path: '/technology',
  },
]
