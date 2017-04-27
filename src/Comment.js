import React, {Component} from 'react'

export default function Comment({ comment }) {
    return (
        <li>
            <h3>{comment.user}</h3>
            <p>{comment.text}</p>
        </li>
    )
}