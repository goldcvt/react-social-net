import {addPost, typingPost} from './profileFunctions';
import {addMessage, typingMessage} from './dialogFunctions';

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

let currentPost = {
  text: ""
};

let dialogItemsData = [{
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

let messageData = [{
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

let currentMessage = {
  text: ""
}

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

let dialogs = {
  dialogItemsData,
  messageData,
  currentMessage
};

let profile = {
  postsData,
  userData,
  currentPost
};

let state = {
  dialogs,
  profile,
  friends
};

let store = {
  _state: state,
  getState() {
    return this._state;
  },
  setState(st) {
    this._state = st;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber(arg) {
    return null;
  },
  dispatch(action) {
    // action: {type, payload}
    //  action[action.type](payload)
    switch(action.type) {
      case "DIALOGS-CREATE-MESSAGE": 
        addMessage(this.getState().dialogs.messageData, this.getState().dialogs.currentMessage.text);
        typingMessage(this.getState().dialogs.currentMessage, "");
        // This looks evil
        this._callSubscriber(this);
        break;

      case "DIALOGS-UPDATE-CURRENT-MESSAGE":
        typingMessage(this.getState().dialogs.currentMessage, ...action.payload);
        // This looks evil
        this._callSubscriber(this);
        break

      case "PROFILE-CREATE-POST": 
        addPost(this.getState().profile.postsData, this.getState().profile.currentPost.text, ...action.payload);
        typingPost(this.getState().profile.currentPost, "");
        this._callSubscriber(this);
        break

      case "PROFILE-UPDATE-CURRENT-POST":
        typingPost(this.getState().profile.currentPost, ...action.payload);
        this._callSubscriber(this);
        break

      default: 
        this._callSubscriber(this);
    }
  }
}

export default store;

window.store = store;