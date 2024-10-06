import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {

    let allCourses=[];

    function getCourses(){
  
      
      Object.values(courses).forEach(array=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
  return (
    <div>
        {
            getCourses().map((course)=>{
                return <Card key={course.id} course={course}></Card>
            })
        }
    </div>
  )
}

export default Cards;