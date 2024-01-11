import img from "../Media/Images/banner2.jpg";
// import { ClassNames } from '@emotion/react';
import CollectionsIcon from "@mui/icons-material/Collections";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EastIcon from "@mui/icons-material/East";

export const AnalyticsSmallData = [
   {
    Heading: "Buy Now Clicks",
    numbers: "5",
    Days: "on last 7 days"
   },
   {
    Heading: "Transactions",
    numbers: "2",
    Days: "on last 7 days"
   },
   {
    Heading: "Total Revenue (INR)",
    numbers: "1000",
    Days: "on last 7 days"
   },
   {
    Heading: "Average Order Value",
    numbers: "1000",
    Days: "on last 7 days"
   }

]


export const BannerData = [
    {
        Head: "Image",
        img : img,
        title : "Select screen to open on tapping banner",
        boxtitle : "None (no action on tapping banner)"
    },
    {
        Head: "Image",
        img : img,
        title : "Select screen to open on tapping banner",
        boxtitle : "Specific Course"
    },
    {
        Head: "Image",
        img : img,
        title : "Select screen to open on tapping banner",
        boxtitle : "Zoom Class Link"
    },
    {
        Head: "Image",
        img : img,
        title : "Select screen to open on tapping banner",
        boxtitle : "External Link (sheikhshoeb.com)"
    },
]

export const AdditionalData = [
    {
        href : "#",
        icon: <CollectionsIcon />,
        heading: "Banner"
    },
    {   
        href : "#",
        icon: <LoyaltyIcon />,
        heading: "Coupons"
    },
    {
        href : "#",
        icon: <BookmarkAddedIcon />,
        heading: "Zoom"
    },
    
]

export const OfferData = [
    {
        icon : <CollectionsIcon />,
        head: "Course",
        title: "3 Published Course",
        button: "Create Course",
        arrow: <EastIcon />
    },
    {
        icon : <CollectionsIcon />,
        head: "Test Portal",
        title: "15 Tests Created",
        button: "Test Portal",
        arrow: <EastIcon />
    },
    {
        icon : <CollectionsIcon />,
        head: "Total Transactions",
        title: "3",
        button: "Total Transactions",
        arrow: <EastIcon />
    },
    {
        icon : <CollectionsIcon />,
        head: "Total Revenue",
        title: "50000",
        button: "Total Revenue",
        arrow: <EastIcon />
    },
]

export const TranscationCardData =[
    {
        Head : " Transactions ",
        number: "2"
    },
    {
        Head : " Transactions Amount",
        number: " ₹2"
    },
    {
        Head : " Avg Order Value ",
        number: "₹1"
    },
]


