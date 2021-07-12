import {addPost, typingPost} from './profileFunctions';
import {addMessage} from './dialogFunctions';
import {rerenderTree} from '../render';

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
    name: "Mary J Blige",
    avatarUrl: "https://bstars.ru/media/djcatalog2/images/item/20/mary-j-blige.1_f.webp"
  },
  {
    userId: 2,
    name: "John Legend",
    avatarUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/pmn/DR2KSCTTKNCMBGUZCCFOCQZTV4.jpg"
  },
  {
    userId: 3,
    name: "Kanye West",
    avatarUrl: "https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/1577190.jpg"
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

let friends = [{
    userId: 1,
    name: "Mary J Blige",
    avatarUrl: "https://bstars.ru/media/djcatalog2/images/item/20/mary-j-blige.1_f.webp"
  },
  {
    userId: 2,
    name: "John Legend",
    avatarUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/pmn/DR2KSCTTKNCMBGUZCCFOCQZTV4.jpg"
  },
  {
    userId: 3,
    name: "Kanye West",
    avatarUrl: "https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/1577190.jpg"
  },
];

let currentPost = {
  text: ""
};

let dialogs = {
  dialogItemsData,
  messageData
};
let profile = {
  postsData,
  userData,
  currentPost
};

export let functions = {
  dialogs: {
    messages: {
      create: (messages, msgText) => {
        addMessage(messages, msgText);
        rerenderTree(state);
      }
    }
  },
  profile: {
    posts: {
      create: (posts, text, author, avatarUrl, likes, shares) => {
        addPost(posts, text, author, avatarUrl, likes, shares);
        rerenderTree(state);
      },
      changeCurrent: (post, text) => {
        typingPost(post, text);
        rerenderTree(state);
      }
    }
  },
  friends: null
}

export let state = {
  dialogs,
  profile,
  friends
};