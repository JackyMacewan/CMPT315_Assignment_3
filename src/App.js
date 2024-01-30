import './App.css';
import { useEffect, useState } from 'react';
import SideBar from './components/sidebar/sidebar.component';
import Message from './components/body/body.component';
import SearchBar from './components/searchbar/searchbar.component';


function App() {
  const [list_emails, setSideBar] = useState([]); //for rendering emails into sidebar
  const [selected_email, setSelectedEmail] = useState({}); //for rendering the selected email into the body
  const [update_list, setUpdateList] = useState([]); //for filtering by using search
  const [searchInput, setSearchInput] = useState(""); //initial state is an empty string value

  //click set selected mail to the clicked card
  //e is the email card 
  const clickCard = email => {
    setSelectedEmail(email);
    //update the read status of the select in the updated_list.
    for (let i = 0; i < update_list.length; i++) {
      if (update_list[i].id === email.id) {
          update_list[i].read = 'active';
      } else {
        if (update_list[i].read === "active") {
          update_list[i].read = 'true'
        }
      }
    }
    setUpdateList(update_list); //update the list of email
  }

  //for handling user input
  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  //retrieving email from api
  useEffect( () => {
    const fetchEmails = async() => {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const mails = await response.json();
      setSideBar(mails);
    };
    fetchEmails();
    }, []); //adding the square bracket ensure that list of emails will only fetch once

  useEffect( () => { //handling search input, update sidebar 
    let filtered = []; 
    if (searchInput === "") {
      filtered = list_emails; //set the result state to the current monster state 
    }
    else {
      filtered= list_emails.filter(email => email.from.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setUpdateList(filtered);}, [list_emails, searchInput]); //two dependcies state

  return (
    <div className="App">
      <h1> Simple React Mail Client </h1>
      <div id = 'searchbar'> <SearchBar placeholder={'Search Sender'} handleInput={handleInput}/> </div>
      <div id = 'content'>
        <div id = "c_sidebar"> <div id = "sidebar"> <SideBar emails ={update_list} cardClick={clickCard}/> </div> </div>
        <div id = "email_content"> <Message email = {selected_email}/> </div>
      </div>
    </div>
  );
}

export default App;
