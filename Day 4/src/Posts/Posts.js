import React,{Component} from 'react';
import axios from 'axios';
import {Route } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        post: []
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const posts=response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Swati'
                    }
                } );
                this.setState( { post: updatedPosts } );
               
            } )
    }

    postSelectedHandler = ( id ) => {
        this.props.history.push( '/posts/' + id );
    }

    render () {
        const posts=this.state.post.map(posts=>{
            return <Post  key={posts.id}
                          title={posts.title}
                          author={posts.author}
                          clicked={()=>this.postSelectedHandler(posts.id)}
                      />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <aside>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                </aside>
            </div>
        );
    }
}

export default Posts;
