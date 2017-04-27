import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <section>
                <small onClick={this.toggleOpen}>
                    <br/>
                    {this.getButton()}
                </small>
                {this.getComments()}
            </section>
        )
    }
    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    getButton() {
        return this.state.isOpen ? 'Close' : 'Open'
    }
    getComments() {
        if(this.state.isOpen) {
            return this.comments = this.props.comments.map(comment => <Comment comment={comment}/>)
        }
    }
}