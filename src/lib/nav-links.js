import Search from 'components/search'
import People from 'components/people'
import DataReset from 'components/data-reset'
import MakeFriends from 'components/make-friends'

// you can assume unique link text/path (i.e. you can use for child keys)
const NAV_LINKS = [{
  text: 'Search',
  path: 'search',
  component: Search
}, {
  text: 'People',
  path: 'people',
  component: People
}, {
  text: 'Make Friends',
  path: 'friends',
  component: MakeFriends
}, {
  text: 'Reset',
  path: 'reset',
  component: DataReset
}]


export default NAV_LINKS
