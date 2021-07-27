import React from "react";
import Search from '../Utils/Search/Search'
import UserItem from './UserItem/UserItem'
import { paginator, current_page, page_number, page_container, allUsers_title, userscontainer, userlist, searchbar, filters, friends_title } from './Users.module.scss'
import * as axios from 'axios'
import { NavLink } from "react-router-dom";

class Users extends React.Component {
    loadUsers = (params = null) => {
        let getQuery = params ? Object.entries(params).reduce((accum, cur) => {
            return accum + `${cur[0]}=${cur[1]}`
        }, `?`) : ""
        let props = this.props
        console.log(getQuery)
        let pageNumber = params ? params.page : props.currentPage
        axios.get(`https://social-network.samuraijs.com/api/1.0/users${getQuery}`).then(function(response) {
            let payload = {...response.data, pageNumber}
            props.fetchUsers(payload)
        })
    }
    render() {
        const createPaginator = () => {
            let pagebar = []
            
            for (let index = 1; index <= this.props.totalPages; index++) {
                
                pagebar.push(
                    <div>
                        <NavLink to={index === 1 ? `/users` : `/users?page=${index}`} activeClassName={current_page} >
                            <div className={page_number} onClick={
                                () => {
                                    this.loadUsers({ page: index })
                                }
                            }
                            >{index}</div>
                        </NavLink>
                    </div>
                )
            }
            let currentPage = this.props.currentPage
            let totalPages = this.props.totalPages
            if ((currentPage >= 5) && (currentPage <= totalPages - 4)) {
                let rightEnd = currentPage + 2
                let leftEnd = currentPage - 2
                pagebar = [pagebar[0]].concat(
                    <div>
                        <div className={page_number}>...</div>
                    </div>
                ).concat(
                    pagebar.slice(leftEnd - 1, rightEnd)
                ).concat(
                    <div>
                        <div className={page_number}>...</div>
                    </div>
                ).concat(
                    [pagebar[pagebar.length - 1]]
                )
            } else if (currentPage < 5) {
                pagebar = pagebar.slice(0, 5).concat(
                    <div>
                        <div className={page_number}>...</div>
                    </div>
                ).concat(
                    [pagebar[pagebar.length - 1]]
                )
            } else if (currentPage > totalPages - 4) {
                let leftEnd = totalPages - 4
                pagebar = [pagebar[0]].concat(
                    <div>
                        <div className={page_number}>...</div>
                    </div>
                ).concat(
                    pagebar.slice(leftEnd - 1, totalPages)
                )
            }
            return pagebar
        }

        let pagebar = createPaginator()

        let friends = this.props.users.filter(user => user.followed === true).map(user => <UserItem user={user} toggleFriendship={this.props.toggleFriendship} />)
        let notYetFriends = this.props.users.filter(user => user.followed !== true).map(user => <UserItem user={user} toggleFriendship={this.props.toggleFriendship} />)
        return (
            <div className={page_container}>
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
                <div className={paginator}>{pagebar}</div>
            </div>
        )
    }
    componentDidMount() {
        this.loadUsers()
    }
}

export default Users;