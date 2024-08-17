const relatedcoursesData = [

    {
        id: 26,
        img: "../Asset/IMG/COURSES IMG/Course3.jpg",
        title: "Alpha 4.0 : Complete Placement Preparation!",
        post_date: "15 Aug 2024",
        category: "Programming",
        link: "https://open.spotify.com/?nd=1"
    },
    {
        id: 23,
        img: "../Asset/IMG/COURSES IMG/Course2.jpg",
        title: "Delta 5.0 : Complete Web Development!",
        post_date: "15 Aug 2024",
        category: "Web Development",
        link: "https://open.spotify.com/?nd=1"
    },
    {
        id: 22,
        img: "../Asset/IMG/COURSES IMG/Course1.jpg",
        title: "The Ultimate React Course 2023: React, Redux & More",
        post_date: "15 Aug 2024",
        category: "Web Development",
        link: "https://open.spotify.com/?nd=1"
    },
    {
        id: 21,
        img: "../Asset/IMG/COURSES IMG/Course3.jpg",
        title: "Alpha 4.0 : Complete Placement Preparation!",
        post_date: "15 Aug 2024",
        category: "Programming",
        link: "https://open.spotify.com/?nd=1"
    },
]

const pop_course_cont=document.querySelector('.related-course');

window.addEventListener("DOMContentLoaded",()=>{
    dispayRelatedData(relatedcoursesData);
});

function dispayRelatedData(course){
    let displaydata = course.map(function(cat_item) {
        return `
           <article class="pop-course ">
        <div class="p-course-img">
          <img src="${cat_item.img}" alt="">
        </div>
        <div class="p-course-heading">
          <h1><a href="${cat_item.link}">${cat_item.title}</a></h1>
        </div>
      </article>
        `;
    });
    displaydata = displaydata.join(" ");
    pop_course_cont.innerHTML = displaydata;
}