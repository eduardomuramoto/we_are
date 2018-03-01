import React, {Component} from 'react';
import {Post} from '../requests/posts';
import {Link} from 'react-router-dom';
import { Card, CardText,  CardBody,
  CardTitle,  Button } from 'reactstrap';

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
          style={{width:'100%'}}
          >
            <h2 style={{padding: '0 17%'}}>Posts</h2>
            <div className="body" style={{width:'95%', padding: '0 10%',display: 'flex',justifyContent: 'center', flexWrap: 'wrap'}} >
              {
                this.state.posts.map(post => (
                  <Card  style={{width:'40%', marginBottom:"10px", marginLeft:"10px"}} key={post.id} >
                    <CardBody>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.executive_summary}</CardText>
                    <Link to={`/posts/${post.id}`}>
                      <Button size="sm">More Details</Button>
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
