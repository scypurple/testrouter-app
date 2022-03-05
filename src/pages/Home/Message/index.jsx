import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Message() {
    // state = {
    const   initMessages =  [
            {id: '01', title: 'message01'},
            {id: '02', title: 'message02'},
            {id: '03', title: 'message03'},
        ];
    // }
    //const {messages} = this.state;

    const [messages] = useState(initMessages);
   // console.log(messages);

    return (
        <div>
            <ul>
                {
                    messages.map(message => {
                        return (
                            <li key={message.id}>
                                {/* <Link to={`detail?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}
                                {/* <Link to={{ pathname: "detail", state: { id: message.id, title: message.title } }}>{message.title}</Link> */}
                                <Link 
                                to='detail' 
                                state={{
                                    'id': message.id,
                                    'title': message.title,
                                }}>
                                    {message.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )

}
