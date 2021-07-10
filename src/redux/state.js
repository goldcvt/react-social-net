let postsData = [{
    id: 0,
    text: "Howdy, partner",
    author: "Ragnar Lodbrok",
    avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
    likes: 312,
    shares: 12
  },
  {
    id: 1,
    text: "Lorem ipsemum... You know the drill",
    author: "Ragnar Lodbrok",
    avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
    likes: 228,
    shares: 124
  }
];

let userData = {
  id: 0,
  name: "Ragnar Lodbrok",
  wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
  avatarUrl: "https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nihil ad adipisci illo fugit asperiores officia iste itaque, praesentium accusantium
      laboriosam saepe tempora temporibus. Et incidunt architecto quaerat? Dolore, maxime itaque!`
};

const dialogItemsData = [{
    userId: 1,
    name: "Brigitte Valentine"
  },
  {
    userId: 2,
    name: "Actual Name"
  },
  {
    userId: 3,
    name: "Not an Actual Name"
  },
];

const messageData = [{
    msgId: 0,
    text: "Fuck",
    toMe: true
  },
  {
    msgId: 1,
    text: "I miss you!",
    toMe: true
  },
  {
    msgId: 2,
    text: "Too bad",
    toMe: false
  }
];

let dialogs = {dialogItemsData, messageData};
let profile = {postsData, userData};

let state = {dialogs, profile};

export { state };