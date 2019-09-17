import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../Redux/profile-reducer.js';

const MyPosts = (props) => {
  console.log(props);
  let postsElements = props.posts.map(post => <Post message={post.text} like={post.likeCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  
  return (
          <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div><button onClick={ onAddPost } >Add post</button></div>    
            </div>
            <div className={style.posts}>
              {postsElements}
            </div>
           </div>
  )
}

export default MyPosts;