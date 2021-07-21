class User {
  constructor(userId, name, avatarUrl, wallpaperUrl, description) {
    this.userId = userId
    this.name = name
    this.avatarUrl = avatarUrl
    this.wallpaperUrl = wallpaperUrl
    this.description = description
    return this
  }
}

let inititalState = [
  {
    userId: 1,
    name: "Mary J Blige",
    avatarUrl: "https://bstars.ru/media/djcatalog2/images/item/20/mary-j-blige.1_f.webp",
    wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
    description: `Didn't smoke any dope w/ Yanix`,
    isFriend: true
  },
  {
    userId: 2,
    name: "John Legend",
    avatarUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/pmn/DR2KSCTTKNCMBGUZCCFOCQZTV4.jpg",
    wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
    description: `Singin' and believin' in love`,
    isFriend: false
  },
  {
    userId: 3,
    name: "Kanye West",
    avatarUrl: "https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/1577190.jpg",
    wallpaperUrl: "https://wallpaperaccess.com/full/1760835.jpg",
    description: `I am a god`,
    isFriend: true
  }
]

const usersReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "abracadabra":
            return state
        default:
            return state;
    }
}

export default usersReducer;