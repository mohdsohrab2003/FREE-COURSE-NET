coursesData=[
    {
        id:6,
        img:"Asset/IMG/COURSES IMG/Course3.jpg",
        title:"Alpha 4.0 : Complete Placement Preparation!",
        post_date:"15 Aug 2024",
        category:"Programing",
        link:"https://open.spotify.com/?nd=1"
    },
    {
        id:5,
        img:"Asset/IMG/COURSES IMG/Course2.jpg",
        title:"Delta 5.0 : Complete Web Development!",
        post_date:"15 Aug 2024",
        category:"Web Development",
        link:"https://open.spotify.com/?nd=1"
    },
    {
        id:4,
        img:"Asset/IMG/COURSES IMG/Course1.jpg",
        title:"The Ultimate React Course 2023: React, Redux & More",
        post_date:"15 Aug 2024",
        category:"Web Development",
        link:"https://open.spotify.com/?nd=1"
    },
    {
        id:3,
        img:"Asset/IMG/COURSES IMG/Course3.jpg",
        title:"Alpha 4.0 : Complete Placement Preparation!",
        post_date:"15 Aug 2024",
        category:"Programing",
        link:"https://open.spotify.com/?nd=1"
    },
    {
        id:2,
        img:"Asset/IMG/COURSES IMG/Course2.jpg",
        title:"Delta 5.0 : Complete Web Development!",
        post_date:"15 Aug 2024",
        category:"Web Development",
        link:"https://open.spotify.com/?nd=1"
    },
    {
        id:1,
        img:"Asset/IMG/COURSES IMG/Course1.jpg",
        title:"The Ultimate React Course 2023: React, Redux & More",
        post_date:"15 Aug 2024",
        category:"Web Development",
        link:"https://open.spotify.com/?nd=1"
    },


]

const course_cont=document.querySelector(".courses");
const ulEl = document.querySelector('ul');
const btnSearch = document.querySelector('.btn-search');
const inputEl = document.querySelector('.form-control');


window.addEventListener("DOMContentLoaded", () => {
    displayCoursesData(coursesData);
    // setupMenuToggle();
});

function displayCoursesData(course) {
    let displaydata = course.map(function(cat_item) {
        return `
           <article class="course">
        <div class="course-img">
          <img src="${cat_item.img}" alt="">
        </div>
        <div class="course-info">
          <div class="course-cat">
            <p>${cat_item.category}</p>
            <p class="bx bx-clander">${cat_item.post_date}</p>
          </div>
          <div class="course-heading">
            <a href="#"><h3>${cat_item.title}</h3></a>
          </div>
        </div>
      </article> 
        `;
    });
    displaydata=displaydata.join(" ");
    course_cont.innerHTML = displaydata;
}
