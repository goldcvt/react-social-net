import React from "react";
import Search from '../Utils/Search/Search'
import UserItem from './UserItem/UserItem'
import { allUsers_title, userscontainer, userlist, searchbar, filters, friends_title } from './Users.module.scss'
import * as axios from 'axios'

class Users extends React.Component {
    loadUsers = () => {
        let props = this.props
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(function(response) {
            props.fetchUsers(response.data.items)
        })
    }
    render() {
        let friends = this.props.users.filter(user => user.followed === true).map(user => <UserItem user={user} toggleFriendship={this.props.toggleFriendship} />)
        let notYetFriends = this.props.users.filter(user => user.followed !== true).map(user => <UserItem user={user} toggleFriendship={this.props.toggleFriendship} />)
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
                    <div className={allUsers_title}>
                        <h2>
                            Not Friends Yet
                        </h2>
                    </div>
                    {notYetFriends}
                    <button onClick={this.loadUsers}>Show More</button>
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
}

export default Users;