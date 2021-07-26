import deepCopy from "../../utils/deepCopy"
import { USERS_FETCH_USERS, USERS_REDUCE_USERS, USERS_TOGGLE_FRIENDSHIP } from "../actionTypes"
import * as axios from 'axios'

class User {
  constructor(id, name, avatarUrl, wallpaperUrl, description) {
    this.id = id
    this.name = name
    this.avatarUrl = avatarUrl
    this.wallpaperUrl = wallpaperUrl
    this.description = description
    return this
  }
}

let inititalState = {
  users: [], 
  currentPage: 1,
  totalUsers: 100,
  usersPerPage: 10,
  totalPages: Math.ceil(this.totalUsers / this.usersPerPage)
}


// {
//   id: 1,
//   name: "Mary J Blige",
//   avatarUrl: "https://bstars.ru/media/djcatalog2/images/item/20/mary-j-blige.1_f.webp",
//   wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
//   description: `Didn't smoke any dope w/ Yanix`,
//   followed: true
// },
// {
//   id: 2,
//   name: "John Legend",
//   avatarUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/pmn/DR2KSCTTKNCMBGUZCCFOCQZTV4.jpg",
//   wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
//   description: `Singin' and believin' in love`,
//   followed: false
// },
// {
//   id: 3,
//   name: "Kanye West",
//   avatarUrl: "https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/1577190.jpg",
//   wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
//   description: `I am a god`,
//   followed: true
// }

const usersReducer = (state = inititalState, action) => {
    
    switch (action.type) {
        case USERS_TOGGLE_FRIENDSHIP:
          {  
            let newState = deepCopy(state)
            let id = action.payload[0]
            axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then((response) => {
              let followed = response.data
              if (followed) axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
              else axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            }).then(() => {
              // fetch mothafuckas again? idk
            })
            
            return newState
          }

          case USERS_FETCH_USERS: {
            // back to overwriting state
            let {users, totalCount, error, currentPage} = deepCopy(action.payload)
            let newState = {...state, users: users, totalUsers: totalCount, currentPage: currentPage}
            return newState;
          }

          case USERS_REDUCE_USERS: {
            let newState = deepCopy(state).slice(1, 10)
            return newState
          }

        default:
            return state;
    }
}

export default usersReducer;