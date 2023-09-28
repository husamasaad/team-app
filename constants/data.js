import Mockup from 'public/mockup.png'
import SectionImg1 from 'public/sections-4.png'

import Avatar1 from 'public/avatar-01.png'
import Avatar2 from 'public/avatar-02.png'
import Avatar3 from 'public/avatar-03.png'
import Avatar4 from 'public/avatar-04.png'
import Avatar5 from 'public/avatar-05.png'

import Thumbnail1 from 'public/gallery-01.png'
import Thumbnail2 from 'public/gallery-02.png'
import Thumbnail3 from 'public/gallery-03.jpg'
import Thumbnail4 from 'public/gallery-04.png'
import Thumbnail5 from 'public/gallery-05.jpg'
import Thumbnail6 from 'public/gallery-06.png'
import Thumbnail7 from 'public/gallery-07.png'
import Thumbnail8 from 'public/gallery-08.png'
import Thumbnail9 from 'public/gallery-09.png'


export const sectionsData = [
  {
    id: 1,
    heading: 'Chats for your distributed teams',
    details: 'Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.',
    imgUrl : Mockup,
    dir: 'left'
  },
  {
    id: 2,
    heading: 'Chats for your distributed teams',
    details: 'Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.',
    imgUrl : SectionImg1,
    dir: 'right'
  },
  {
    id: 3,
    heading: 'Choose how you want to work',
    details: 'In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.',
    imgUrl : Mockup,
    dir: 'left'
  },
  {
    id: 4,
    heading: 'Move faster with your Team tools',
    details: 'With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.',
    imgUrl : SectionImg1,
    dir: 'right'
  },
]

export const navLinks = [
  {
    id: 1,
    name: 'Product',
    goto: '/'
  },
  {
    id: 2,
    name: 'Blog',
    goto: '/blog'
  },
  {
    id: 3,
    name: 'Support',
    goto: '/'
  },
  {
    id: 4,
    name: 'Log-in',
    goto: '/'
  },
]

export const testimonials = [
  {
    id: 1,
    name : 'Chealsea Morgan',
    job: 'CEO ot Subway',
    rate: 5,
    imgUrl: Avatar1,
    body: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.'
  },
  {
    id: 2,
    name : 'Nick Cave',
    job: 'CMO ot Nokia',
    rate: 5,
    imgUrl: Avatar2,
    body: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis'
  },
  {
    id: 3,
    name : 'Lana Rosenfeld',
    job: 'Senior VP ot Pinterest',
    rate: 5,
    imgUrl: Avatar3,
    body: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.'
  },
  {
    id: 4,
    name : 'Giorgio Moroder',
    job: 'CTO ot Glovo',
    rate: 5,
    imgUrl: Avatar4,
    body: 'Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.'
  },
  {
    id: 5,
    name : 'Young Liu',
    job: 'CAO ot Foxconn',
    rate: 5,
    imgUrl: Avatar5,
    body: 'Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis. In a laoreet purus.'
  },
]

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "Product",
        link: "/",
      },
      {
        name: "Blogs",
        link: "/blog",
      },
      {
        name: "Support",
        link: "/",
      },
    ],
  },
  {
    title: "Features",
    links: [
      {
        name: "Screen Sharing",
        link: "/",
      },
      {
        name: "iOS & Android Apps",
        link: "/",
      },
      {
        name: "File Sharing",
        link: "/",
      },
      {
        name: "User Managment",
        link: "/",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "info@teamapp.com",
        link: "/",
      },
      {
        name: "1-800-200-300",
        link: "/",
      },
      {
        name: "1010 Sunset Blv",
        link: "/",
      },
      {
        name: "Palo Alto, California",
        link: "/",
      },
    ],
  },
];

export const blogposts = [
  {
    id: 1,
    title: 'Data exported by Team Cloud organization',
    details: 'An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip’s invitation links.',
    author: 'Cameron Williamson',
    date: 'July 1, 2023',
    thumbnail: Thumbnail1,
    authorImg: Avatar1
  },
  {
    id: 2,
    title: 'Swap long video calls and emails for asynchronous video',
    details: 'Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.',
    author: 'Robert Fox',
    date: 'June 21, 2023',
    thumbnail: Thumbnail2,
    authorImg: Avatar2
  },
  {
    id: 3,
    title: 'Flexibility reigns: six key takeaways from Frontiers 2023',
    details: 'The future of work is having a digital HQ that works for you.',
    author: 'Jenny Wilson',
    date: 'June 10, 2023',
    thumbnail: Thumbnail3,
    authorImg: Avatar3
  },
  {
    id: 4,
    title: 'Team plus Sales Cloud: Your sales team’s new digital HQ',
    details: 'Why everyone on your sales team will benefit from our app’s killer features.',
    author: 'Kathryn Murphy',
    date: 'May 11, 2023',
    thumbnail: Thumbnail4,
    authorImg: Avatar4
  },
  {
    id: 5,
    title: 'Steve Dotto’s top 10 tips for overcoming workplace hiccups',
    details: 'The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.',
    author: 'Theresa Webb',
    date: 'April 4, 2023',
    thumbnail: Thumbnail5,
    authorImg: Avatar5
  },
  {
    id: 6,
    title: 'What is digital culture?',
    details: 'The teams best prepared for change use modern digital communication tools, feel comfortable learning new ones and continually adapt how they work.',
    author: 'Devon Lane',
    date: 'May 22, 2023',
    thumbnail: Thumbnail6,
    authorImg: Avatar1
  },
  {
    id: 7,
    title: 'What’s new in Team: iPad updates, split-screen view and more',
    details: 'An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip’s invitation links.',
    author: 'Eleanor Pena',
    date: 'March 18, 2023',
    thumbnail: Thumbnail7,
    authorImg: Avatar1
  },
  {
    id: 8,
    title: 'Drive more efficiency and cost savings with these updates to Workflow Builder',
    details: 'New and upcoming automation features help your teams do more with less.',
    author: 'Jerome Bell',
    date: 'February 12, 2023',
    thumbnail: Thumbnail8,
    authorImg: Avatar1
  },
  {
    id: 9,
    title: '7 tips to onboard sales reps with ease',
    details: 'The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.',
    author: 'Savannah Nguyen',
    date: 'January 7, 2023',
    thumbnail: Thumbnail9,
    authorImg: Avatar1
  },
]