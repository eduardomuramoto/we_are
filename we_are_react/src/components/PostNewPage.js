import React, {Component} from 'react';
import {PostForm} from './PostForm';
import {Post} from '../requests/posts';

class PostNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newPost: {
        owner_is_company:this.props.user.company_profile? true : false,
        owner_profile_id:this.props.user.company_profile? this.props.user.company_profile.id : this.props.user.person_profile.id,
        owner_name:this.props.user.company_profile? `${this.props.user.company_profile.name}` : `${this.props.user.person_profile.first_name} ${this.props.user.person_profile.last_name}`
      }
    };

    this.createPost = this.createPost.bind(this);
    this.updateNewPost = this.updateNewPost.bind(this);
  }

  updateNewPost (data) {
    const {newPost} = this.state;

    this.setState({
      newPost: {...newPost, ...data}
    });
  }

  createPost () {
    const {history} = this.props;
    const {newPost} = this.state;
    Post
      .create({post:newPost})
      .then(({id}) => {
        history.push(`/posts/${id}`)
      });
  }

  render () {
    const {newPost} = this.state;

    return (
      <main
        className="PostNewPage"
        style={{padding: '0 15%'}}
      >
        <h2>Create your post</h2>
        <PostForm
          post={newPost}
          onChange={this.updateNewPost}
          onSubmit={this.createPost}
        />

      </main>
    );
  }
}

export {PostNewPage};
