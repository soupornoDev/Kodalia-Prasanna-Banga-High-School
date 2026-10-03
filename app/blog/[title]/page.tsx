type BlogProps = {
  params:Promise<{title:string}>
};

import React from 'react'

export default async function Blog({params}:BlogProps) {
let BlogData = [
  {
    id:1,
    title:"Demo-Title",
    description:"This a Demo Description for Testing Perpose only Not in Peoduction Webside.I test Next JS Skills that I Learn from Seriyans Codding School"
  }
]
  const BlogParams = await params
  const BlogName = BlogParams.title
  const Blogs = BlogData.find(Blogs => Blogs.title.toLocaleLowerCase() === BlogName.toLocaleLowerCase())
  
  return (
    <div>
    <h1>{Blogs.title}</h1>

      <p>{Blogs.description}</p>
    </div>
  )
}