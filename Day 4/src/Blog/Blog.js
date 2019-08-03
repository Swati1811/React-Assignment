import React,{Component} from 'react';
import Posts from '../Posts/Posts';
import './Blog.css';

import {Route,Link,Switch} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';



//basically it displays all the post 
class Blog extends Component{
   
    render(){
       
        return (
            <div className="Blog">
            <h1>BLOGS PAGE</h1>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/posts" >Posts</Link></li>
                        <li><Link to="/new-post">New Post</Link></li>
                    </ul>
                </nav>
            </header>
                <section className="Posts">
                    <Switch> 
                        <Route path="/posts" exact component={Posts}/>  
                        <Route path="/new-post" exact component={NewPost}/>  
                    </Switch>
                </section>
            </div>
        );

    }
}

export default Blog;