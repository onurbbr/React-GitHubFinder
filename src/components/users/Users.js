import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: 2,
        login: 'defunkt',
        avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
        id: 3,
        login: 'pjhyett',
        avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        id: 4,
        login: 'wycats',
        avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
        html_url: 'https://github.com/wycats',
      },
      {
        id: 5,
        login: 'ezmobius',
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/ezmobius',
      },
      {
        id: 6,
        login: 'ivey',
        avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4',
        html_url: 'https://github.com/ivey',
      },
      {
        id: 7,
        login: 'evanphx',
        avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
        html_url: 'https://github.com/evanphx',
      },
      {
        id: 17,
        login: 'vanpelt',
        avatar_url: 'https://avatars.githubusercontent.com/u/17?v=4',
        html_url: 'https://github.com/vanpelt',
      },
      {
        id: 18,
        login: 'wayneeseguin',
        avatar_url: 'https://avatars.githubusercontent.com/u/18?v=4',
        html_url: 'https://github.com/wayneeseguin',
      },
      {
        id: 19,
        login: 'brynary',
        avatar_url: 'https://avatars.githubusercontent.com/u/19?v=4',
        html_url: 'https://github.com/brynary',
      },
      {
        id: 20,
        login: 'kevinclark',
        avatar_url: 'https://avatars.githubusercontent.com/u/20?v=4',
        html_url: 'https://github.com/kevinclark',
      },
      {
        id: 21,
        login: 'technoweenie',
        avatar_url: 'https://avatars.githubusercontent.com/u/21?v=4',
        html_url: 'https://github.com/technoweenie',
      },
      {
        id: 22,
        login: 'macournoyer',
        avatar_url: 'https://avatars.githubusercontent.com/u/22?v=4',
        html_url: 'https://github.com/macournoyer',
      },
      {
        id: 23,
        login: 'takeo',
        avatar_url: 'https://avatars.githubusercontent.com/u/23?v=4',
        html_url: 'https://github.com/takeo',
      },
      {
        id: 25,
        login: 'caged',
        avatar_url: 'https://avatars.githubusercontent.com/u/25?v=4',
        html_url: 'https://github.com/caged',
      },
      {
        id: 26,
        login: 'topfunky',
        avatar_url: 'https://avatars.githubusercontent.com/u/26?v=4',
        html_url: 'https://github.com/topfunky',
      },
      {
        id: 27,
        login: 'anotherjesse',
        avatar_url: 'https://avatars.githubusercontent.com/u/27?v=4',
        html_url: 'https://github.com/anotherjesse',
      },
      {
        id: 28,
        login: 'roland',
        avatar_url: 'https://avatars.githubusercontent.com/u/28?v=4',
        html_url: 'https://github.com/roland',
      },
      {
        id: 29,
        login: 'lukas',
        avatar_url: 'https://avatars.githubusercontent.com/u/29?v=4',
        html_url: 'https://github.com/lukas',
      },
      {
        id: 30,
        login: 'fanvsfan',
        avatar_url: 'https://avatars.githubusercontent.com/u/30?v=4',
        html_url: 'https://github.com/fanvsfan',
      },
      {
        id: 31,
        login: 'tomtt',
        avatar_url: 'https://avatars.githubusercontent.com/u/31?v=4',
        html_url: 'https://github.com/tomtt',
      },
      {
        id: 32,
        login: 'railsjitsu',
        avatar_url: 'https://avatars.githubusercontent.com/u/32?v=4',
        html_url: 'https://github.com/railsjitsu',
      },
      {
        id: 34,
        login: 'nitay',
        avatar_url: 'https://avatars.githubusercontent.com/u/34?v=4',
        html_url: 'https://github.com/nitay',
      },
      {
        id: 35,
        login: 'kevwil',
        avatar_url: 'https://avatars.githubusercontent.com/u/35?v=4',
        html_url: 'https://github.com/kevwil',
      },
      {
        id: 36,
        login: 'KirinDave',
        avatar_url: 'https://avatars.githubusercontent.com/u/36?v=4',
        html_url: 'https://github.com/KirinDave',
      },
      {
        id: 37,
        login: 'jamesgolick',
        avatar_url: 'https://avatars.githubusercontent.com/u/37?v=4',
        html_url: 'https://github.com/jamesgolick',
      },
      {
        login: 'atmos',
        id: 38,
        avatar_url: 'https://avatars.githubusercontent.com/u/38?v=4',
        html_url: 'https://github.com/atmos',
      },
      {
        id: 44,
        login: 'errfree',
        avatar_url: 'https://avatars.githubusercontent.com/u/44?v=4',
        html_url: 'https://github.com/errfree',
      },
      {
        id: 45,
        login: 'mojodna',
        avatar_url: 'https://avatars.githubusercontent.com/u/45?v=4',
        html_url: 'https://github.com/mojodna',
      },
      {
        id: 46,
        login: 'bmizerany',
        avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
        html_url: 'https://github.com/bmizerany',
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default Users;
