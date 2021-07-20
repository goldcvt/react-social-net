import { likePost } from '../../../../redux/actionCreators';
import Post from './Post';

const PostContainer = (props) => {
    let like = () => {
        let action = likePost([props.state.id])
        props.dispatch(action)
    }

    return <Post post={props.state} like={like} />
}


export default PostContainer;