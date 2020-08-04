import React, { Component } from 'react'
import '../style/contactsPanel.css'
import ChatCard from './ChatCard'
import AddAFriend from './AddAFriend'
import Navbar from './Navbar'
// import { useAuth } from "../context/auth";
// import { AuthContext } from "../context/auth";

export class ContactsPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    render() {
       
        return (
            // <AuthContext.Consumer>
            // {authTokens => (
    
            <div className="contacts-main">
                <ul className="list">
                    {/* Add Each Contact As Items here as List Item using Iteration*/}
                    <AddAFriend />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Ramiz Rizqallah"} text={"Hello World"} />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Khader Ballout"} text={"Welcome to my tutorial"} />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Abed"} text={"Quality Assurance is the best"} />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Jannat"} text={"Dont Forget Ahmed!"} />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Mays"} text={"authTokens"} />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Gharam"} text={"I have a new sticker"} />


                </ul>


                <div className="buttons">
                    <button id="chats" />
                    <button id="people" />
                </div>
            </div>
            //  )}
            //  </AuthContext.Consumer>
        )
    }
}

export default ContactsPanel
