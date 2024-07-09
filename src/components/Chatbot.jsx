import React, { useEffect, useState } from 'react';
import "../css/chatbot.css";

function Chatbot() {
    const [query, setQuery] = useState('');
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchPrevChats = async () => {
            try {
                const prevchat = await fetch('http://localhost:3001/prevchat/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username: "user" })
                });
                if (!prevchat.ok) {
                    throw new Error("Error fetching data");
                }
                const prev_chats = await prevchat.json();
                console.log(prev_chats);

                let oldChats = [];
                for (let i = 0; i < prev_chats.length; i += 2) {
                    const user_Query = prev_chats[i]?.text_root === 'user' ? prev_chats[i].text_str : '';
                    const bot_Reply = prev_chats[i + 1]?.text_root === 'bot' ? prev_chats[i + 1].text_str : '';

                    oldChats.push(
                        <React.Fragment key={i}>
                            <ChatSection
                                userquery={user_Query}
                                message={bot_Reply}
                                poster={prev_chats[i+1].poster}
                                title={prev_chats[i+1].mv_title}
                                release={prev_chats[i+1].mv_release_dt}
                                genre={prev_chats[i+1].mv_genre}
                                actor={prev_chats[i+1].mv_actors}
                            /><br />
                        </React.Fragment>
                    );
                }
                setChats(oldChats);
            } catch (err) {
                console.error("An error occurred while fetching previous chats", err);
            }
        };

        fetchPrevChats();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(query);
        try {
            const response = await fetch('http://localhost:3001/botquery/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ chat_text: query })
            });
            if (!response.ok) {
                throw new Error('Error fetching bot response');
            }
            const data = await response.json();
            console.log(data);

            const newChat = (
                <React.Fragment key={chats.length}>
                    <ChatSection
                        userquery={query}
                        message={data.message}
                        poster={data.poster || ''}
                        title={data.title || ''}
                        release={data.release || ''}
                        genre={data.genre || ''}
                        actor={data.actor || ''}
                    /><br />
                </React.Fragment>
            );

            setChats((prevChats) => [...prevChats, newChat]);
            setQuery('');
        } catch (err) {
            console.error("An error occurred while fetching bot response", err);
        }
    };

    const ChatSection = ({ userquery, message, poster, title, release, genre, actor }) => {
        return (
            <React.Fragment>
                {userquery && (
                    <div id="user-chat">
                        <div id="chat-logo">
                            <div id="user-logo">U</div>
                        </div>
                        <div id="user">
                            <div id="chat-text">{userquery}</div>
                        </div>
                    </div>
                )}
                {message && (
                    <div id="ai-chat">
                        <div id="chat-logo">
                            <div id="ai-logo">AI</div>
                        </div>
                        <div id="ai">
                            <div id="chat-text">
                                {message}
                                {poster && (
                                    <div id="poster">
                                        <img src={poster} alt="" />
                                    </div>
                                )}
                                {title && (
                                    <div id="title-movie-bot">
                                        <strong>Title:</strong><em>{title}</em>
                                    </div>
                                )}
                                {release && (
                                    <div id="rel-dt-movie-bot">
                                        <strong>Release:</strong><em>{release}</em></div>)}
                                {genre && (
                                    <div id="genre-movie-bot">
                                        <strong>Genre:</strong><em>{genre}</em>
                                    </div>
                                )}
                                {actor && (
                                    <div id="actors-movie-bot">
                                        <strong>Actors:</strong><em>{actor}</em>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <div id="chat-window">
                <div id="notice">* Disclaimer! This movie suggestion AI is in experimental phase and may produce wrong result.*</div>
                <div id="ai-window">
                    {chats}
                </div>
                <form id="user-input" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your query" value={query} onChange={(e) => setQuery(e.target.value)} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Chatbot;