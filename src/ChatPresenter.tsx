import * as React from "react";
import { Button, Input } from "antd";
import { message } from "./ChatContainer";

type ChatPresenterProps = {
    contents: Array<message>;
    message: string;
    username : string;
    setMessage: Function;
    setUsername : Function;
    handleEnter: Function;
};

export const ChatPresenter = ({
                                  contents,
                                  message,
                                  username,
                                  setMessage,
                                  setUsername,
                                  handleEnter,
                              }: ChatPresenterProps) => {
    return (
        <div className={"chat-box"}>
            <div className='header'>
                유저이름 :
                <Input
                    style={{flex : 1}}
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                />
            </div>
            <div className={"contents"}>
                {contents.map((message) => (
                    <div> {message.username} : {message.content} </div>
                ))}
            </div>
            <div>
                <Input.Search
                    placeholder="input your messages..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onSearch={(value) => handleEnter(username,value)}
                    enterButton={"Enter"}
                />
            </div>
        </div>
    );
};