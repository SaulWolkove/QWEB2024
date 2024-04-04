import { useQuery,useQueryClient,useMutation   } from "react-query";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import EventForm from "./EventForm";
import getEventsRequest from "../api/getEventsRequest";
import getJobsRequest from "../api/getJobsRequest";
import JobForm from "./JobForm";
import addEventRequest from "../api/addEventRequest";
import addJobRequest from "../api/addJobRequest";
import deleteEventRequest from "../api/deleteEventRequest";
import deleteJobRequest from "../api/deleteJobRequest";



export default function AdminPanel (){

  const [authenticated, setAuthenticated] = useState(false);

  const useAuth = () => {
  
    useEffect(() => {
      // Check if JWT token exists in local storage or wherever it's stored
      const token = localStorage.getItem('token');
  
      if (token) {
        // Token exists, user is authenticated
        setAuthenticated(true);
      } else {
        // Token does not exist, user is not authenticated
        setAuthenticated(false);
      }
    }, []);
  
    return authenticated;
  };
    const [events, setEvents] = useState([]);

    const { isLoadingEvents, data: fetchedEvents } = useQuery(
        ["events"],
        () => getEventsRequest(),
        {
          onSuccess: (data) => {
            // sort data by expiration date and update posts state
              setEvents(data);
          },
        }
      );

      const [jobs, setJobs] = useState([]);

      const { isLoadingJobs, data: fetchedjobs } = useQuery(
        ["jobs"],
        () => getJobsRequest(),
        {
          onSuccess: (data) => {
            // sort data by expiration date and update posts state
              setJobs(data);
          },
        }
      );

      const queryClient = useQueryClient();


      const submitEvent = (data)=> {
        addEventRequest(data);
      }
      const deleteEvent= (data)=>{
        deleteEventRequest(data);
        queryClient.invalidateQueries('events');

      }

      const submitJob = (data)=> {
        addJobRequest(data);
      }
      const deleteJob =(data)=>{
        deleteJobRequest(data);
        queryClient.invalidateQueries('jobs');

      }

      const navigate = useNavigate()

    return(

    useAuth() ? <div>
        <EventForm submitEvent={submitEvent}/>
        <JobForm submitJob={submitJob}/>

        <div style = {{display:"flex",width:"100%",height:"100vh", marginTop:"40px"}}>
            <div style={{flex:"1"}}>
                {events.map((event)=>(
                    <div key = {event._id} style={{textAlign:"center",border:"2px solid grey", margin:"10px", borderRadius:"20px"}}>
                    <div style={{fontWeight: 'bold', fontSize:"1.2em"}}>
                        {event.title}
                    </div>
                    <div style={{fontSize:"1em"}}>
                        {event.bio}
                    </div>
                    <div style={{fontSize:"1em"}}>
                        Location<br/>
                        <b>{event.location}</b><br/><br/>
                        Date / Time <br/>
                        <b>{event.date}</b> 
                    </div>
                    <button onClick={()=>deleteEvent(event._id)}>Delete</button>
                    </div>
                ))
                }
            </div>
            <div style={{flex:"1"}}>
                {jobs.map((job)=>(
                    <div key = {job._id} style={{textAlign:"center",border:"2px solid grey", margin:"10px", borderRadius:"20px"}}>
                    <div style={{fontWeight: 'bold', fontSize:"1.2em", justifyContent: "center"}}>
                        {job.title}
                    </div>
                    <div style={{fontSize:"1em"}}>
                        {job.bio}<br/>
                        <a href={job.link} target="_blank">Click me</a>

                    </div>
                    <div style={{fontSize:"1em"}}>
                        Location<br/>
                        <b>{job.location}</b><br/><br/>
                        Expires <br/>
                        <b>{job.expiry}</b>
                    </div>
                    <button onClick={()=>deleteJob(job._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
    : navigate("/")
    )
                

}