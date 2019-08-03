import React,{Component} from 'react';
import './FullPost.css';
import axios from 'axios';


class FullPost extends Component{
    state = {
        loadedPost: null
    }
    componentDidMount () {
        console.log(this.props);
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( 'http://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id )
                    .then( response => {
                        
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }
    render(){
        let post=<p>Please select a post..!</p>;
        post=(
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                <p>{this.state.loadedPost.author}</p>
               
            </div>
        )
        return post;
    }
}

export default FullPost;