import React,{Component} from 'react';
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component{
    state={
        title : '',
        content :'',
        author:'Swati',
        
    }

    submitDataHandler=()=>{
        const data={
            title:this.state.title,
            content: this.state.content,
            author:this.state.author
        }
         
        axios.post('http://jsonplaceholder.typicode.com/posts',data)
            .then(response=>{
                console.log(response);
                this.props.history.push('/Home');
            });

    
    }
    render(){
        
        return(
            <div className="NewPost">
                <h1>Enter a post..!</h1>
                <label>Title</label>
                <input type='text' value={this.state.title} onChange={(event)=>{this.setState({title: event.target.value})}}/>
                <label>Content</label>
                <input type='text' value={this.state.content} onChange={(event)=>{this.setState({content: event.target.value})}}/>
                <label>Author</label>
                <select value={this.state.author} onChange={(event)=>{this.setState({author: event.target.value})}}>
                    <option value="Swati">Swati</option>
                    <option value="Priya">Priya</option>
                </select>    
                <button onClick={this.submitDataHandler}>Submit Post</button>
            </div>

        );
    }
}

export default NewPost;