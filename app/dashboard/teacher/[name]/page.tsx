type TeacherProps ={
 params:Promise<{name:string}>
};
import React from 'react'

export default async function TeacherDashboard({params}:TeacherProps) {
 let users = [
   {
     username:"Admin7",
     name:"Sumit",
     subject:"Math",
   
   }
 ]
  const TeacherParams = await params
  const TeacherName = TeacherParams.name
  const user = users.find(user => user.name.toLocaleLowerCase() === TeacherName.toLocaleLowerCase())
  


  return (
    <div>
    <p> Hello {user?.name}</p>
    </div>
  )
}