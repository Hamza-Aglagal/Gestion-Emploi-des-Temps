import React, { useState, useEffect, Fragment } from "react";
// import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { Container, Row, Col, Card, CardBody, Media, Form, FormGroup, Input, InputGroup, Button, Nav, NavItem, NavLink, TabPane, TabContent } from "reactstrap";
// import { GET_MEMBERS_SUCCESS } from "../../../redux/actionType";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
// import { getAllChats, changeChat, createNewChat, searchMember, sendMessage, replyByUser } from "../../../redux/chat-app/action";
// import four from "../../../assets/images/user/4.jpg";
// import one from "../../../assets/images/user/1.jpg";
// import two from "../../../assets/images/user/2.jpg";
// import errorImg from "../../../assets/images/search-not-found.png";
// import start_conversion from "../../../assets/images/start-conversion.jpg";
// import { Picker } from "emoji-mart";

const Chat = (props) => {
    // const allMembers = useSelector((content) => content.ChatApp.allMembers);
    // const chats = useSelector((content) => content.ChatApp.chats);
    // const selectedUser = useSelector((content) => content.ChatApp.selectedUser);
    // const currentUser = useSelector((content) => content.ChatApp.currentUser);
    // const online = useSelector((content) => content.ChatApp.online);
    // const members = useSelector((content) => content.ChatApp.members);

    const dispatch = useDispatch();

    const [searchKeyword, setSearchKeyword] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const [activeTab, setActiveTab] = useState("1");

    // var images = require.context("../../../assets/images", true);

    // useEffect(() => {
    //     const currentUserId = 0;
    //     dispatch({ type: GET_MEMBERS_SUCCESS });
    //     dispatch(getAllChats(currentUserId));
    // }, [dispatch]);

    // const dynamicImage = (image) => {
    //     return images(`./${image}`);
    // };

    // const toggleEmojiPicker = () => {
    //     setShowEmojiPicker(!showEmojiPicker);
    // };

    // const addEmoji = (emoji) => {
    //     const text = `${messageInput}${emoji.native}`;
    //     setShowEmojiPicker(false);
    //     setMessageInput(text);
    // };

    // const changeChatClick = (e, selectedUserId) => {
    //     handleSearchKeyword("");
    //     const currentChat = chats.find((x) => x.users.includes(currentUser.id) && x.users.includes(selectedUserId));
    //     if (currentChat) {
    //         dispatch(changeChat(selectedUserId));
    //     } else {
    //         dispatch(createNewChat(currentUser.id, selectedUserId, chats));
    //     }
    // };

    // const handleSearchKeyword = (keyword) => {
    //     setSearchKeyword(keyword);
    //     dispatch(searchMember(keyword));
    // };

    // const handleMessageChange = (message) => {
    //     setMessageInput(message);
    // };

    // const handleMessagePress = (e) => {
    //     if (e.key === "Enter" || e === "send") {
    //         var container = document.querySelector(".chat-history");
    //         setTimeout(function () {
    //             container.scrollBy({ top: 200, behavior: "smooth" });
    //         }, 310);

    //         let currentUserId = currentUser.id;
    //         let selectedUserId = selectedUser.id;
    //         let selectedUserName = selectedUser.name;

    //         if (messageInput.length > 0) {
    //             dispatch(sendMessage(currentUserId, selectedUserId, messageInput, chats, online));
    //             setMessageInput("");

    //             setTimeout(() => {
    //                 const replyMessage = "Hey This is " + selectedUserName + ", Sorry I busy right now, I will text you later";

    //                 if (selectedUser.online === true) document.querySelector(".status-circle").classList.add("online");

    //                 selectedUser.online = true;
    //                 dispatch(replyByUser(currentUserId, selectedUserId, replyMessage, chats, online));
    //             }, 5000);
    //         }
    //     }
    // };

    // const chatMenuToggle = () => {
    //     console.log("call chat ment ");
    //     setMenuToggle(!menuToggle);
    // };

    // const selectedChat = allMembers && chats && selectedUser ? chats.find((x) => x.users.includes(currentUser.id) && x.users.includes(selectedUser.id)) : null;

    // var activeChat = 0;
    // if (selectedUser != null) activeChat = selectedUser.id;

    return (

        <Box>

            {/* <Breadcrumb parent="Apps / User" title="Chat App" /> */}

            <Container >
                <Row>
                    <Col sm="12" className="call-chat-sidebar">
                        <Card>
                            <CardBody className="chat-body">
                                <div className="chat-box">
                                    {/* Chat left side Start */}
                                    <div className="chat-left-aside">

                                        <div className="media">

                                            {/* <Media src={dynamicImage(currentUser.thumb)} className="rounded-circle user-image" alt="" /> */}

                                            <div className="about">
                                                {/* <div className="name f-w-600">{currentUser.name}</div> */}
                                                {/* <div className="status">{currentUser.status}</div> */}
                                            </div>

                                        </div>

                                        <div className="people-list">

                                            <div className="search">
                                                <Form className="theme-form">
                                                    <FormGroup className="form-group">
                                                        {/* <Input className="btn-pill" type="text" placeholder="search" defaultValue={searchKeyword} onChange={(e) => handleSearchKeyword(e.target.value)} /> */}
                                                        <i className="fa fa-search">.</i>
                                                    </FormGroup>
                                                </Form>
                                            </div>

                                            {/* {
                                                members.length > 0 ? (
                                                    <ul className="list">
                                                        {members
                                                            .filter((x) => x.id !== currentUser.id)
                                                            .map((item, i) => {
                                                                return (
                                                                    <li className={`clearfix ${activeChat === item.id ? "active" : ""}`} key={i} onClick={(e) => changeChatClick(e, item.id)}>
                                                                        <img src={dynamicImage(item.thumb)} className="rounded-circle user-image" alt="" />
                                                                        <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                                                                        <div className="about">
                                                                            <div className="name">{item.name}</div>
                                                                            <div className="status">{item.status}</div>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            })}
                                                    </ul>
                                                ) : (
                                                    <Media className="img-fluid m-auto" src={errorImg} alt="" />
                                                )
                                            } */}



                                        </div>

                                    </div>

                                    {/* Chat left side Ends */}
                                </div>

                            </CardBody>

                        </Card>

                    </Col>

                    <Col className="call-chat-body">

                        <Card>
                            <CardBody className="p-0">
                                <Row className="chat-box">
                                    {/* Chat right side start */}
                                    <Col className="pe-0 chat-right-aside">
                                        {/* chat start */}
                                        <div className="chat">
                                            {/* chat-header start */}

                                            <div className="chat-header clearfix">

                                                {/* <Media src={dynamicImage(selectedUser.thumb)} className="rounded-circle" alt="" /> */}

                                                <div className="about">
                                                    {/* <div className="name">{selectedUser.name}</div> */}
                                                    {/* <div className="status digits">{selectedUser.online ? "online" : selectedUser.lastSeenDate}</div> */}
                                                </div>

                                                <ul className="list-inline float-start float-sm-end chat-menu-icons">

                                                    <li className="list-inline-item">
                                                        <a href="#javascript">
                                                            <i className="icon-search">.</i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#javascript">
                                                            <i className="icon-clip">.</i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#javascript">
                                                            <i className="icon-headphone-alt">.</i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#javascript">
                                                            <i className="icon-video-camera">.</i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item toogle-bar" >
                                                        <a href="#javascript">
                                                            <i className="icon-menu">.</i>
                                                        </a>
                                                    </li>

                                                </ul>

                                            </div>

                                            {/* chat-header end */}
                                            <div className="chat-history chat-msg-box custom-scrollbar">

                                                <ul>
                                                    {/* {selectedChat.messages.length > 0 ? (
                                                        selectedChat.messages.map((item, index) => {
                                                            const participators = allMembers.find((x) => x.id === item.sender);
                                                            return (
                                                                <li key={index} className="clearfix">
                                                                    <div className={`message my-message ${item.sender !== currentUser.id ? "" : "float-end"}`}>
                                                                        <Media src={dynamicImage(participators.thumb)} className={`rounded-circle ${item.sender !== currentUser.id ? "float-start" : "float-end"} chat-user-img img-30`} alt="" />
                                                                        <div className="message-data text-end">
                                                                            <span className="message-data-time">{item.time}</span>
                                                                        </div>
                                                                        {item.text}
                                                                    </div>
                                                                </li>
                                                            );
                                                        })
                                                    ) : (
                                                        <div>
                                                            <Media className="img-fluid" src={start_conversion} alt="start conversion " />
                                                        </div>
                                                    )} */}
                                                </ul>

                                            </div>
                                            {/* end chat-history */}
                                            <div className="chat-message clearfix">

                                                <Row>
                                                    <div className="mb-2"> .</div>
                                                    <Col xl="12" className="d-flex">
                                                        <div className="smiley-box bg-primary">
                                                            <div className="picker" >
                                                                {/* <Media src={require("../../../assets/images/smiley.png")} alt="" /> */}
                                                            </div>
                                                        </div>
                                                        <InputGroup className="text-box">
                                                            <Input type="text" className="form-control input-txt-bx" placeholder="Type a message......"  />
                                                            <div addontype="append" className="input-group-append">
                                                                {/* <Button color="primary rounded-0" onClick={() => handleMessagePress("send")}>
                                                                    SEND
                                                                </Button> */}
                                                            </div>
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            {/* end chat-message */}
                                            {/* chat end */}
                                            {/* Chat right side ends */}
                                        </div>


                                    </Col>


                                    <Col className={`ps-0 chat-menu ${menuToggle ? "show" : ""}`}>

                                        <Nav tabs className="border-tab-primary">
                                            <NavItem id="myTab" role="tablist">
                                                <NavLink tag="a" href="#javascript" >
                                                    CALL
                                                </NavLink>

                                            </NavItem>

                                            <NavItem id="myTab" role="tablist">
                                                <NavLink tag="a" href="#javascript" >
                                                    STATUS
                                                </NavLink>

                                            </NavItem>

                                            <NavItem id="myTab" role="tablist">
                                                <NavLink tag="a" href="#javascript" >
                                                    PROFILE
                                                </NavLink>

                                            </NavItem>

                                        </Nav>

                                        <TabContent >

                                            <TabPane tabId="1">
                                                <div className="people-list">
                                                    <ul className="list digits custom-scrollbar">
                                                        <li className="clearfix">
                                                            {/* <Media className="rounded-circle user-image" src={four} alt="" /> */}
                                                            <div className="about">
                                                                <div className="name">Erica Hughes</div>
                                                                <div className="status">
                                                                    <i className="fa fa-share font-success">.</i> 5 May, 4:40 PM
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix">
                                                            {/* <Media className="rounded-circle user-image mt-0" src={one} alt="" /> */}
                                                            <div className="about">
                                                                <div className="name">
                                                                    Vincent Porter
                                                                    <div className="status">
                                                                        <i className="fa fa-reply font-danger">.</i> 5 May, 5:30 PM
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        {/* {
                                                            allMembers
                                                                .filter((x) => x.id !== currentUser.id)
                                                                .map((member, i) => (
                                                                    <li className="clearfix" key={i} onClick={(e) => changeChatClick(e, member.id)}>
                                                                        {/* <Media src={dynamicImage(member.thumb)} className="rounded-circle user-image" alt="" /> */}
                                                                        {/* <div className="about">
                                                                            <div className="name">{member.name}</div>
                                                                            <div className="status">
                                                                                {member.reply}
                                                                                {member.status}
                                                                            </div>
                                                                        </div> */}
                                                                    {/* </li> */}
                                                                {/* )) */}
                                                        {/* } */} 


                                                    </ul>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <div className="people-list">
                                                    <div className="search">
                                                        <Form className="theme-form">
                                                            <FormGroup>
                                                                <Input className="form-control" type="text" placeholder="Write Status..." />
                                                                <i className="fa fa-pencil">.</i>
                                                            </FormGroup>
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="status">
                                                    <p className="font-dark">Active</p>
                                                    <hr />
                                                    <p>
                                                        Established fact that a reader will be distracted <i className="icofont icofont-emo-heart-eyes font-danger f-20">.</i>
                                                        <i className="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5">.</i>
                                                    </p>
                                                    <hr />
                                                    <p>
                                                        Dolore magna aliqua <i className="icofont icofont-emo-rolling-eyes font-success f-20">.</i>
                                                    </p>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <div className="user-profile">
                                                    <div className="image">
                                                        <div className="avatar text-center">
                                                            {/* <Media body alt="" src={two} /> */}
                                                        </div>
                                                        <div className="icon-wrapper">
                                                            <i className="icofont icofont-pencil-alt-5">.</i>
                                                        </div>
                                                    </div>
                                                    <div className="user-content text-center">
                                                        <h5 className="text-uppercase">mark jenco</h5>
                                                        <div className="social-media">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <a href="https://www.facebook.com/">
                                                                        <i className="fa fa-facebook">.</i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://accounts.google.com/signin">
                                                                        <i className="fa fa-google-plus">.</i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://twitter.com/">
                                                                        <i className="fa fa-twitter">.</i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://www.instagram.com/">
                                                                        <i className="fa fa-instagram">.</i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://dashboard.rss.com/auth/sign-in/">
                                                                        <i className="fa fa-rss">.</i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <hr />
                                                        <div className="follow text-center">
                                                            <Row>
                                                                <Col className="border-end">
                                                                    <span>Following</span>
                                                                    <div className="follow-num">236k</div>
                                                                </Col>
                                                                <Col>
                                                                    <span>Follower</span>
                                                                    <div className="follow-num">3691k</div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <hr />
                                                        <div className="text-center digits">
                                                            <p className="mb-0">Mark.jecno23@gmail.com</p>
                                                            <p className="mb-0">+91 365 - 658 - 1236</p>
                                                            <p className="mb-0">Fax: 123-4560</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Box>
 
    );
};

export default Chat;
