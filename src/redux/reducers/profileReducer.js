import deepCopy from "../../utils/deepCopy";
import { PROFILE_CREATE_POST, PROFILE_LIKE_POST, PROFILE_UPDATE_CURRENT_POST } from "../actionTypes";
import { addPost, like, typingPost } from "../profileFunctions";

let postsData = [{
    id: 0,
    text: "Howdy, partner",
    author: {
      userId: 0,
      name: "Ragnar Lodbrok",
      avatarUrl: "https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg",
      wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nihil ad adipisci illo fugit asperiores officia iste itaque, praesentium accusantium
        laboriosam saepe tempora temporibus. Et incidunt architecto quaerat? Dolore, maxime itaque!`
    },
    avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
    likes: 312,
    shares: 12,
  },
  {
    id: 1,
    text: "Lorem ipsemum... You know the drill",
    author: {
      userId: 0,
      name: "Ragnar Lodbrok",
      wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
      avatarUrl: "https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nihil ad adipisci illo fugit asperiores officia iste itaque, praesentium accusantium
        laboriosam saepe tempora temporibus. Et incidunt architecto quaerat? Dolore, maxime itaque!`
    },
    avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
    likes: 228,
    shares: 124,
  }
];

let userData = {
  userId: 0,
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
          {
            let newState = {...state}
            newState.currentPost = deepCopy(state.currentPost)
            newState.postsData = deepCopy(state.postsData)
            addPost(newState.postsData, newState.currentPost.text, ...action.payload);
            typingPost(newState.currentPost, "");
            return newState
          }

        case PROFILE_UPDATE_CURRENT_POST:
            {
              let newState = {
                ...state
              };
              newState.currentPost = deepCopy(state.currentPost)
              typingPost(newState.currentPost, ...action.payload);
              return newState
            }

        case PROFILE_LIKE_POST:
            {
              // hacky way, tbh
              
              let newState = {...state}
              newState.postsData = deepCopy(state.postsData)
              like(newState.postsData, ...action.payload)
              
              return newState
            }

        default:
            return state
    }
}

export default profileReducer;