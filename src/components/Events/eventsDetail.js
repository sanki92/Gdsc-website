import triwizard from '../../assets/Events/triwizardWeb.png'
import flutter from '../../assets/Events/flutterCampaign.png'
import googleCloud from '../../assets/Events/googleCloud.png'
import jetPack from '../../assets/Events/jetPack.png'

// Web Event
import web1 from '../../assets/Events/web1.jpg'
import web2 from '../../assets/Events/web2.jpg'
// Flutter Event
import flutter1 from '../../assets/Events/flutter1.jpg'
import flutter2 from '../../assets/Events/flutter2.jpg'
import flutter3 from '../../assets/Events/flutter3.jpg'
import flutter4 from '../../assets/Events/flutter4.jpg'



const events = [
    {
        "id":1,
        "eventImg":triwizard,
        "eventName":"Triwizard Web Campaign",
        "facilitator":" Akshat Vashisht, Pushkaraj Suryawanshi,  Parth Sakpal and Shrestha Pandey.",
        "date":"March 29th - April 4th 2023",
        "description":"In the four-day web campaign, students used HTML, CSS, JavaScript, and React to create their websites, significantly enhancing their portfolios with practical web development experience.",
        "images":[web1,web2]
    },
    {
        "id":2,
        "eventImg":flutter,
        "eventName":"Flutter Campaign",
        "facilitator":"Shashwat Sharma",
        "date":"Feb 6th - Feb 8th 2023",
        "description":"A dynamic, hands-on session facilitated by industry mentors, the campaign gave students to code and develop a mobile application using Flutter, an open source framework by Google.",
        "images":[flutter1,flutter2,flutter3,flutter4]
    },
    {
        "id":3,
        "eventImg":googleCloud,
        "eventName":"Google Cloud Career Practitioner Campaign",
        "facilitator":"Ms. Mrunal Pataskar",
        "date":"Feb 8th - March 8th 2023",
        "description":"Students were guided about Google Cloud technology and building projects on the Google cloud console. The cloud campaign was a very successful event, with members completing all the labs receiving schwags for being in Tier 3 of the campaign. ",
        "images":[]
    },
    {
        "id":4,
        "eventImg":jetPack,
        "eventName":"Jetpack Compose Camp ",
        "facilitator":" Yash Bansalryawanshi",
        "date":"Sep 23rd - Sep 26th",
        "description":"Students were taught how to build apps using Android's modern UI framework using Kotlin through four focused sessions. The student's newly acquired skills were put to test through the problem statement marathon.",
        "images":[]
    }
]
export default events;