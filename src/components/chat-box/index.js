import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { useUsers } from "../../contexts/UsersContext";

const Chatbox = () => {
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const [isChattingOpen, setIsChattingOpen] = useState(false);
  const [singleChatDetail, setSingleChatDetail] = useState({});

  const users = useUsers();

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      users[i].isActive = Math.random() < 0.5;
    }
  }, []);

  const toggleChatMenu = () => {
    setIsChatMenuOpen(!isChatMenuOpen);
  };

  const toggleChattingBox = () => {
    setIsChattingOpen(!isChattingOpen);
  };

  const closeChattingbox = () => {
    setIsChattingOpen(false);
  };

  const openSingleChat = (item) => {
    setIsChattingOpen(true);
    setSingleChatDetail(item);
  };

  return (
    <>
      <div className="chat-msg-box">
        <button className="btn chat-menu-toggle" onClick={toggleChatMenu}>
          <span className="icon-message-square msg-icon"></span>
          Chats
          <span
            className={`close-icon ${
              isChatMenuOpen ? "icon-chevron-down" : "icon-chevron-up"
            }`}
          ></span>
        </button>
        <div
          className={`chat-menu-content ${
            isChatMenuOpen ? "d-block" : "d-none"
          }`}
        >
          <SimpleBar
            forceVisible="y"
            autoHide={false}
            className="custom-scrollbar"
            style={{ maxHeight: "360px" }}
          >
            <ul className="chat-list">
              {users.map((item) => (
                <li
                  key={item.id}
                  type="button"
                  onClick={() => openSingleChat(item)}
                >
                  <Link
                    to="#"
                    className={`chat-list-item text-truncate ${
                      item?.isActive ? "active" : ""
                    }`}
                  >
                    <img src={item.profilepicture} alt="..." />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </SimpleBar>
        </div>
      </div>
      {isChattingOpen && (
        <div className="chat-msg-box chatting-msg-box">
          <button
            className="btn chat-menu-toggle text-truncate"
            onClick={closeChattingbox}
          >
            <img
              src={singleChatDetail?.profilepicture}
              className="profile-icon"
            />
            {singleChatDetail?.name}
            <span
              className={`close-icon ${
                isChattingOpen ? "icon-chevron-down" : "icon-chevron-up"
              }`}
            ></span>
            <button className="btn icon-btn">
              <span className="icon-x"></span>
            </button>
          </button>
          <div
            className={`chat-menu-content ${
              isChattingOpen ? "d-block" : "d-none"
            }`}
          >
            <SimpleBar
              forceVisible="y"
              autoHide={false}
              className="custom-scrollbar"
              style={{ maxHeight: "260px" }}
            >
              <div>
                <div className="recieved msg-chat">
                  <p>Loream ipsum dolor sldkfj sdklfj </p>
                  <p>Loream ipsum dolor sldkfj sdklfj </p>
                </div>
                <div className="timestamp">
                  <span>3:16PM</span>
                </div>
                <div className="send msg-chat">
                  <p>Loream ipsum dolor sldkfj sdklfj </p>
                  <p>Loream ipsum dolor sldkfj sdklfj </p>
                </div>
              </div>
            </SimpleBar>
            <form className="input-msg-box">
              <input type="text" />
              <button className="btn icon-btn">
                <span className="icon-send"></span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbox;
