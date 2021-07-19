import { PROFILE_CREATE_POST, PROFILE_LIKE_POST, PROFILE_UPDATE_CURRENT_POST } from "../actionTypes";
import { addPost, like, typingPost } from "../profileFunctions";

let postsData = [{
    id: 0,
    text: "Howdy, partner",
    author: "Ragnar Lodbrok",
    avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
    likes: 312,
    shares: 12,
    isLiked: false
  },
  {
    id: 1,
    text: "Lorem ipsemum... You know the drill",
    author: "Ragnar Lodbrok",
    avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
    likes: 228,
    shares: 124,
    isLiked: false
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

let inititalState = {
    postsData,
    userData,
    currentPost
}

const profileReducer = (state = inititalState, action) => {
    switch (action.type) {
        case PROFILE_CREATE_POST:
            addPost(state.postsData, state.currentPost.text, ...action.payload);
            typingPost(state.currentPost, "");
            return state

        case PROFILE_UPDATE_CURRENT_POST:
            typingPost(state.currentPost, ...action.payload);
            return state

        case PROFILE_LIKE_POST:
            like(...action.payload)
            return state

        default:
            return state
    }
}

export default profileReducer;