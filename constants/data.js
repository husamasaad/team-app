import Mockup from 'public/mockup.png'
import SectionImg1 from 'public/sections-4.png'

import Avatar1 from 'public/avatar-01.png'
import Avatar2 from 'public/avatar-02.png'
import Avatar3 from 'public/avatar-03.png'
import Avatar4 from 'public/avatar-04.png'
import Avatar5 from 'public/avatar-05.png'


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


export const loginFields=[
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  }
]

export const signupFields=[
  {
      labelText:"Username",
      labelFor:"username",
      id:"username",
      name:"username",
      type:"text",
      autoComplete:"username",
      isRequired:true,
      placeholder:"Username"   
  },
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  }
]

export const avatars = [
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
]