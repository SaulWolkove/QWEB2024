import Header from "./Header"
import getJobsRequest from "../api/getJobsRequest";
import { useState } from "react";
import { useQuery } from "react-query";
export default function Jobboard() {
  
  const [jobs, setJobs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState('');


  const { isLoading, data: fetchedjobs } = useQuery(
    ["jobs"],
    () => getJobsRequest(),
    {
      onSuccess: (data) => {
        // sort data by expiration date and update posts state
          setJobs(data);
      },
    }
  );

  const handleMouseEnter = (bio) => {
    setShowPopup(true);
    setPopupInfo(bio);

  }
  return !isLoading &&(
      <div>
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>React App</title>
      <style dangerouslySetInnerHTML={{__html: "\n      ul {\n        \n        \n        padding: 0;\n        \n      }\n\n      li {\n        float: left;\n      }\n\n      li a {\n        font-family: Montserrat, sans-serif;\n        display: block;\n        color: black;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n\n      li a:hover {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      .active {\n        text-decoration-line: underline;\n    border:none; margin:none;    text-underline-offset: 2px;\n      }\n\n      #grad1 {\n        \n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 350px;\n        background-color: #C2E2FF; /* For browsers that do not support gradients */\n        background-image: linear-gradient(to right, #C2E2FF , #F6F7F8);\n      }\n\n      .grid-container {\n        display: grid;\n        grid-template-columns: auto auto auto;\n        column-gap: 150px;\n        row-gap: 50px;\n        justify-content: center;\n      }\n      .grid-container2 {\n        display: grid;\n        grid-template-columns: auto auto;\n      }\n      .grid-item {\n        font-size: 30px;\n        font-family: Montserrat, sans-serif;\n        border-radius: 15px;\n        background-color: rgba(255, 255, 255, 1);\n        border: 2px solid #D2D2D2;\n        width:400px;\n      }\n      .grid-item a:hover {\n        background-color: #333333;\n      }\n      .grid-item a:link {\n        background-color: #000000;\n      }\n      " }} />
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root" />
      <div id="grad1">
      
        
        <div style={{fontSize: '64px', paddingTop: '20px', paddingLeft: '10px', fontFamily: 'Montserrat, sans-serif'}}><Header current={"job"}/>Job Board</div>
        <div style={{fontSize: '64px', paddingLeft: '10px', fontFamily: 'Montserrat, sans-serif', opacity: 0}}>a</div>
        <div className="grid-container" style={{paddingTop: '150px'}}>
          {jobs.map((job)=>(
            <div className="grid-item" onMouseEnter={()=>handleMouseEnter(job.bio)} onMouseLeave={()=>setShowPopup(false)}>
              <div style={{padding: '10px'}} />
              <div style={{margin: 'auto', width: '360px', height: '360px', backgroundColor: '#E2E2E2', borderRadius: '15px'}}>
                <div style={{paddingLeft: '30px', paddingRight: '30px', paddingTop: '80px', fontWeight: 'bold'}}>{job.title}</div>
              </div>
              <div className="grid-container2" style={{margin: 'auto', width: '360px', paddingTop: '10px', fontWeight: 'bold', fontSize: '18px'}}>
                <div style={{padding: '5px'}}>Expires: {job.expiry}</div>
                <a href={job.link} target="_blank" style={{textDecoration: 'none', float: 'right', color: 'white', textAlign: 'center', padding: '5px 10px', borderRadius: '10000px', fontSize: '20px'}}>APPLY</a>
              </div>
              <div style={{padding: '10px'}} />
            </div>
          ))}
        </div>
        {showPopup && 
          <div>
            {popupInfo}
          </div>
        }
      </div>
    </div>
  )
}