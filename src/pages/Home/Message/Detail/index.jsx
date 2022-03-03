import React, { Component } from 'react'

const data = [
    { id: '01', content: 'Hello, React' },
    { id: '02', content: 'Hello, Vue' },
    { id: '03', content: 'Hello, World' },
]
export default class Detail extends Component {
    render() {
        console.log(this.props)
        const {id, title} = this.props.location.state || {};
        const {content} = data.find(e => e.id === id) || {};
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content}</li>
            </ul>
        )
    }
}
