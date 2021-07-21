import Search from '../Utils/Search/Search'
import UserItem from './UserItem/UserItem'
import { userscontainer, userlist, searchbar, filters, friends_title } from './Users.module.scss'

const Users = (props) => {
    let friends = props.users.filter(user => user.isFriend === true).map(user => <UserItem user={user} />)
    return (
        <div className={userscontainer}>
            <div className={userlist}>
                <div className={searchbar}>
                    <Search placeholder="Looking for someone special?" />
                </div>
                <div className={friends_title}>
                    <h2>Friends</h2>
                </div>
                {friends}
            </div>
            <div className={filters}>
                <h1>Filters</h1>
                <p>City</p>
                <p>State</p>
                <p>Whatever</p>
            </div>
        </div>
    )
}

export default Users;