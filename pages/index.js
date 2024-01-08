import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://cdn.nwmgroups.hu/s/img/i/1809/20180908munchen-marienplatz-foter-ovaros.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://cdn.nwmgroups.hu/s/img/i/1809/20180908munchen-marienplatz-foter-ovaros.jpg',
    address: 'Some address 10, 15345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
