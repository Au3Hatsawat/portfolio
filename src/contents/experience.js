import { faGithub } from "@fortawesome/free-brands-svg-icons";
import flutter_photo from "../assets/flutter.png";
import hotel_photo from "../assets/hotelManagement.png";
export const data = [
    {
        id:1,
        title:"Minimal Portfolio",
        date:"Nov 2024",
        description:["• Created a portfolio website with React and Tailwind."],
        items:[{id:1,icon:faGithub}],
        skills:[{id:1,name:"React"},{id:2,name:"Tailwind"}],
        links:["https://github.com/Au3Hatsawat/portfolio"],
        photo:""
    },
    {
        id:2,
        title:"Server Status Checker" ,
        date:"Jul 2024" ,
        description:["• Created Flutter application for android that checks if an Ip address or HTTP is still online."],
        items:[{id:1,icon:faGithub}],
        skills:[{id:1,name:"Flutter"},{id:2,name:"Android Studio"}],
        links:["https://github.com/The1Re/ip_checker"],
        photo:flutter_photo
    },
    {
        id:3,
        title:"Hotel Management Website For Database Project (Only Bookings And Services page)",
        date:"Oct 2024",
        description:["• Designed and created a database for a hotel management web application.","• Front end by HTML , CSS","• Back end by php","• Database by phpmyadmin"],
        items:[{id:1,icon:faGithub}],
        skills:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"php"},{id:4,name:"mySQL"}],
        links:["https://github.com/Au3Hatsawat/databaseProject"],
        photo:hotel_photo
    }
]