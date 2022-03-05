import React from 'react';
// import { useParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const data = [
    { id: '01', content: 'Hello, React' },
    { id: '02', content: 'Hello, Vue' },
    { id: '03', content: 'Hello, World' },
];
export default function Detail() {
    // 类式组件
    //console.log(props)
    //const {id, title} = props.location.state || {};
    //const {content} = data.find(e => e.id === id) || {};
    // 函数式组件 params
    //const { id, title } = useParams()
    // console.log("@", id,title)
    // 函数式组件 search
    // const [search] = useSearchParams();
    // const [id, title] = [search.get('id'), search.get('title')];
    // 函数式组件 state
    const {state: {id, title}} = useLocation();
   // console.log(id,title);
   const { content } = data.find(e => e.id === id) || {};

    return (
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>content:{content}</li>
        </ul>
    )

}
