import React, {Component} from 'react';
import {Post} from '../requests/posts';
import {Link} from 'react-router-dom';
import { Card, CardImg,  CardBody,
  CardTitle,  Button } from 'reactstrap';
import jwtDecode from 'jwt-decode';

class PostIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    };

  }


  async componentDidMount () {
    const posts = await Post.all();
    console.log(posts);
    this.setState({posts, loading: false});
  }

  render () {
    const {loading} = this.state;

    if (loading) {
      return (
        <main
          className="PostIndexPage"
          style={{padding: '0  20px'}}
          >
            <h3>Loading posts...</h3>
          </main>
        )
      }

      return (
        <main
          className="PostIndexPage"
          style={{padding: '0  20px', width:'100%'}}
          >
            <h2>Posts</h2>
            <div style={{width:'100%', paddingLeft: '0 20px',display: 'flex',justifyContent: 'space-between', flexWrap: 'wrap'}}>
              {
                this.state.posts.map(post => (
                  <Card style={{ width:'33%', marginBottom: '1rem' }} key={post.id}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <Link to={`/posts/${post.id}`}>
                      <CardTitle>{post.title}</CardTitle>
                    </Link>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </main>
      );
    }
  }


  export {PostIndexPage};
