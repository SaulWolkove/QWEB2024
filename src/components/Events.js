import Header from "./Header"
import {useQuery} from "react-query"
import getEventsRequest from "../api/getEventsRequest";
import { useState } from "react";
import style from "../styles/events.css";

export default function Events() {
  const gridItemStyles = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease'
  };
  const [events, setEvents] = useState([]);

  const { isLoading, data: fetchedEvents } = useQuery(
    ["events"],
    () => getEventsRequest(),
    {
      onSuccess: (data) => {
        // sort data by expiration date and update posts state
          setEvents(data);
      },
    }
  );
  return (
      <div>
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>React App</title>
      <style dangerouslySetInnerHTML={{__html: "\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n\n      li {\n        float: left;\n      }\n\n      li a {\n        font-family: Montserrat, sans-serif;\n        display: block;\n        color: black;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n\n      li a:hover {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      .active {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      #grad1 {\n        \n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 350px;\n        background-color: #C2E2FF; /* For browsers that do not support gradients */\n        background-image: linear-gradient(to right, #C2E2FF , #F6F7F8);\n      }\n\n      .grid-container {\n        display: grid;\n        grid-template-columns: auto auto auto;\n        column-gap: 150px;\n        row-gap: 50px;\n        justify-content: center;\n      }\n      .grid-item {\n        font-size: 30px;\n        font-family: Montserrat, sans-serif;\n        border-radius: 15px;\n        background-color: rgba(235, 235, 235, 0.75);\n        width:400px;\n      }\n      " }} />
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root" />
      <div id="grad1">
        
        <div style={{fontSize: '64px', paddingTop: '20px', paddingLeft: '10px', fontFamily: 'Montserrat, sans-serif'}}><Header current={"events"}/>Upcoming</div>
        <div style={{fontSize: '64px', paddingLeft: '10px', fontFamily: 'Montserrat, sans-serif'}}>Events!</div>
        <div className="grid-container" style={{padding: '150px'}}>
          {events && events.length > 0 && !isLoading ? events.map((event)=>(
            <div key = {event._id} style={gridItemStyles}>
              <div style={{paddingLeft: '20px', paddingTop: '30px', fontWeight: 'bold', fontSize:"2em"}}>
                {event.title}
              </div>
              <div style={{paddingLeft: '20px', paddingTop: '30px', fontSize:"1.5em"}}>
                {event.bio}
              </div>
              <div style={{paddingLeft: '20px', paddingTop: '30px', fontSize:"1.3em"}}>
                Location<br/>
                <b>{event.location}</b><br/><br/>
                Date / Time <br/>
                <b>{event.date}</b>
              </div>
            </div>
          )): <div>
                No Events At This Time
              </div>
          }
        </div>
        <div style={{padding: '20px'}} />
      </div>
    </div>
    )
}