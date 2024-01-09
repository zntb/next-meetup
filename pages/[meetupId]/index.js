import MeetupDetail from '@/components/meetups/MeetupDetail';

/* eslint-disable @next/next/no-img-element */
function MeetupDetails(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    meetupData: {
      id: meetupId,
      image:
        'https://cdn.nwmgroups.hu/s/img/i/1809/20180908munchen-marienplatz-foter-ovaros.jpg',
      title: 'A First Meetup',
      address: 'Some address 5, 12345 Some City',
      description: 'The meetup description.',
    },
  };
}

export default MeetupDetails;
