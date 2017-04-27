import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        foo: 'bar'
    }

    render() {

        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}

            </section>
        )
    }

    getComments() {
        // console.log(this.props.article.comments)
        return  (
            <ul>
                <CommentList comments={this.props.article.comments}/>
            </ul>
        )
    }

    getBody() {
        return this.state.isOpen &&
                <div>
                    {this.props.article.text}
                    {this.getComments()}
                </div>
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}