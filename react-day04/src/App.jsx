// import React from "react";
import Card from './components/Card.jsx'
// 1 day learn folder and react flow
// 2 day learn component
// 3 day learn props(properties)
// 4 day learn mini company card project objects

const jobPosts = [
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    posted: "2 days ago",
    jobTitle: "Frontend Developer",
    jobType: ["Remote", "Full-time"],
    level: "Senior",
    pay: "$45/hr",
    location: "London"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    posted: "5 days ago",
    jobTitle: "Backend Engineer",
    jobType: ["Onsite", "Full-time"],
    level: "Mid-level",
    pay: "$40/hr",
    location: "Berlin"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    posted: "1 day ago",
    jobTitle: "Full Stack Developer",
    jobType: ["Remote", "Contract"],
    level: "Senior",
    pay: "$50/hr",
    location: "Toronto"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    posted: "7 days ago",
    jobTitle: "UI/UX Designer",
    jobType: ["Remote", "Part-time"],
    level: "Junior",
    pay: "$30/hr",
    location: "San Francisco"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    posted: "3 days ago",
    jobTitle: "React Developer",
    jobType: ["Onsite", "Full-time"],
    level: "Senior",
    pay: "$48/hr",
    location: "New York"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    posted: "10 days ago",
    jobTitle: "iOS Developer",
    jobType: ["Onsite", "Full-time"],
    level: "Mid-level",
    pay: "$55/hr",
    location: "Cupertino"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    companyName: "Spotify",
    posted: "4 days ago",
    jobTitle: "Data Engineer",
    jobType: ["Remote", "Full-time"],
    level: "Senior",
    pay: "$47/hr",
    location: "Stockholm"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    posted: "6 days ago",
    jobTitle: "DevOps Engineer",
    jobType: ["Onsite", "Full-time"],
    level: "Senior",
    pay: "$52/hr",
    location: "Austin"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    companyName: "Airbnb",
    posted: "8 days ago",
    jobTitle: "Product Manager",
    jobType: ["Remote", "Contract"],
    level: "Mid-level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    posted: "9 days ago",
    jobTitle: "Mobile App Developer",
    jobType: ["Onsite", "Full-time"],
    level: "Junior",
    pay: "$35/hr",
    location: "Dubai"
  }
];


function App(){

 
  return (
    <>
  <div className="card-wrapper">
    {jobPosts.map(function(elem,key){
    return  <Card cardId={Math.round(Math.random()*23)} companyLogo={elem.companyLogo} companyName={elem.companyName} jobPost={elem.posted} jobTitle={elem.jobTitle} jobType={elem.jobType} jobLevel={elem.level} pay={elem.pay} location={elem.location} />
    })}
  </div>  
    </>
  )
}

export default App