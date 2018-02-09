import React, {Component} from 'react';
import {PostDetails} from './PostDetails';
import {Post} from '../requests/posts';

class PostShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      post: {},
    };

  }

  async componentDidMount () {
    const {params} = this.props.match;
    const post = await Post.get(params.id);
    // console.log(post)
    this.setState({post, loading: false});
  }

  render () {
    const {loading, post} = this.state;

    if (loading) {
      return (
        <main
          className="PostShowPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading company profile...</h3>
        </main>
      )
    }
    return (
      <main
        className="PostShowPage"
        style={{
          padding: '0 20px'
        }}
      >
        <PostDetails {...post} />
      </main>
    );
  }
}

export {PostShowPage};
