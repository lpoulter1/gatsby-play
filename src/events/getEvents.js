const fetch = import('fetch');

const getEvents = 'https://alwaysberunning.net/api/tournaments/results';
// const getEvent = `https://alwaysberunning.net/api/entries?id=${eventId}`;


const EVENT_TYPES = {
  SC: 'store championship'
};

fetch(getEvents)
  .then(response => {
    response.json().then(events => {
      let filtered = events.filter((event) => {
        return event.type === EVENT_TYPES.SC && event.location_country === 'United Kingdom'
      });

      filtered.map((event) => {
        if (event.store) {
          console.log(`${event.store}: ${event.date}`);
        } else {
          console.log(`${event.title}: ${event.date}`);
        }
      })

      // filtered.map((event) => {
      //   fetch(`https://alwaysberunning.net/api/entries?id=${event.id}`)
      //     .then(response => {
      //       response.json().then(players => {
      //         let winner = players.find((player) => player.rank_top === '1');
      //         if(winner && winner.user_name)
      //           console.log(`${event.store}: ${winner.user_name}`);
      //         else if(winner && winner.user_import_name) {
      //           console.log(`${event.store}: ${winner.user_import_name}`);
      //         }
      //       })
      //     })
      // })
    });
  })
  .catch(error => {
    console.log(error);
  });

