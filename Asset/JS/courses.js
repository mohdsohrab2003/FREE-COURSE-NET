const coursesData = [
    {
        id: 20,
        img: "Asset/IMG/COURSES IMG/Course20.jpg",
        title: "[Coding Block] Algo++ Data Structures & Algorithms",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course20.html"
    },

    {
        id: 19,
        img: "Asset/IMG/COURSES IMG/Course19.jpg",
        title: "[CodingBlocks] Python for Developers Master Course",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course19.html"
    },
    {
        id: 18,
        img: "Asset/IMG/COURSES IMG/Course18.jpg",
        title: "[CodingBlocks] Kotlin for Beginners",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course18.html"
    },
    {
        id: 17,
        img: "Asset/IMG/COURSES IMG/Course17.jpg",
        title: "Java Master Course: Crux",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course17.html"
    },
    {
        id: 16,
        img: "Asset/IMG/COURSES IMG/Course16.jpg",
        title: "CodingBlocks: Java Fundamentals",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course16.html"
    },
    {
        id: 15,
        img: "Asset/IMG/COURSES IMG/Course15",
        title: "[CodingBlocks] Interview Preparation [C++]",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course15.html"
    },
    {
        id: 14,
        img: "Asset/IMG/COURSES IMG/Course14",
        title: "CodingBlocks: Interview Preparation Java",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course14.html"
    },

    {
        id: 13,
        img: "Asset/IMG/COURSES IMG/Course13.jpg",
        title: "[CodingBlocks] Graph Algorithm",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course13.html"
    },
    
    {
        id: 12,
        img: "Asset/IMG/COURSES IMG/Course12.jpg",
        title: "[CodingBlocks] Full Stack Web Development with NodeJS Master Course",
        post_date: "23 Aug 2024",
        category: "Web Development",
        link: "Courses/Course12.html"
    },
    {
        id: 11,
        img: "Asset/IMG/COURSES IMG/Course11.jpg",
        title: "CodingBlocks: Dynamic Programming",
        post_date: "23 Aug 2024",
        category: "Programming",
        link: "Courses/Course11.html"
    },
    {
        id: 10,
        img: "Asset/IMG/COURSES IMG/Course10.jpg",
        title: "[CodingBlocks] Competitive Programming",
        post_date: "21 Aug 2024",
        category: "Programming",
        link: "Courses/Course10.html"
    },
    {
        id: 9,
        img: "Asset/IMG/COURSES IMG/Course9.jpg",
        title: "C++ Standard Template Library",
        post_date: "21 Aug 2024",
        category: "Programming",
        link: "Courses/Course9.html"
    },
    {
        id: 8,
        img: "Asset/IMG/COURSES IMG/Course8.jpg",
        title: "Coding Blocks: Data Structures in Real Life Projects",
        post_date: "21 Aug 2024",
        category: "Programming",
        link: "Courses/Course8.html"
    },
    {
        id: 7,
        img: "Asset/IMG/COURSES IMG/Course7.jpg",
        title: "[Coding Blocks] Master Interview Questions for FAANG & Product Companies",
        post_date: "21 Aug 2024",
        category: "Programming",
        link: "Courses/Course7.html"
    },
    {
        id: 6,
        img: "Asset/IMG/COURSES IMG/Course6.jpg",
        title: "[Coding Blocks] Web Development with Python-Django",
        post_date: "21 Aug 2024",
        category: "Web Development",
        link: "Courses/Course6.html"
    },
    {
        id: 5,
        img: "Asset/IMG/COURSES IMG/Course5.jpg",
        title: "Android App Development Master Course",
        post_date: "21 Aug 2024",
        category: "App Development",
        link: "Courses/Course5.html"
    },
    {
        id: 4,
        img: "Asset/IMG/COURSES IMG/Course4.jpg",
        title: "Algo.Java | Data Structures and Algorithms: Mastering the Core of Programming",
        post_date: "21 Aug 2024",
        category: "Programming",
        link: "Courses/Course4.html"
    },
    {
        id: 3,
        img: "Asset/IMG/COURSES IMG/Course1.jpg",
        title: "Over 8,999 Printable Pages! Fun Kids' Activities, Commercial Use",
        post_date: "20 Aug 2024",
        category: "Graphic",
        link: "Courses/Course3.html"
    },

    {
        id: 2,
        img: "Asset/IMG/COURSES IMG/Course3.jpg",
        title: "Alpha 4.0 : Complete Placement Preparation!",
        post_date: "19 Aug 2024",
        category: "Programming",
        link: "Courses/Course2.html"
    },
    {
        id: 1,
        img: "Asset/IMG/COURSES IMG/Course2.jpg",
        title: "Delta 5.0 : Complete Web Development!",
        post_date: "16 Aug 2024",
        category: "Web Development",
        link: "Courses/Course1.html"
    },
    
];

const course_container = document.querySelector('.courses');
const ulEl = document.querySelector('ul');
const btnSearch = document.querySelector('.btn-search');
const inputEl = document.querySelector('.form-control');

window.addEventListener("DOMContentLoaded", () => {
    displayCoursesData(coursesData); // displaying the data in the DOM
    setupPagination(coursesData);
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
                  <a href="${cat_item.link}"><h3>${cat_item.title}</h3></a>
                </div>
              </div>
            </article> 
        `;
    });
    displaydata = displaydata.join(" ");
    course_container.innerHTML = displaydata;
}

btnSearch.addEventListener("click", () => {
    let searchValue = inputEl.value.trim();
    if (searchValue !== "") {
        let searchResults = coursesData.filter(data => 
            data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.category.toLowerCase().includes(searchValue.toLowerCase())
        );
        displayCoursesData(searchResults);
        setupPagination(searchResults);
        inputEl.value = "";
    } else {
        alert("Please enter a search term");
    }
});

function setupPagination(courses) {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear previous pagination

    function getPageList(totalPages, page, maxLength) {
        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }

        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }

        return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
    }

    $(function() {
        var numberOfItems = courses.length;
        var limitPerPage = 15; // How many card items visible per page 
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 5;  // How many elements to show in the pagination
        var currentPage;

        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;
            currentPage = whichPage;
            $(".courses .course").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dot-page")
                         .toggleClass("active", item === currentPage)
                         .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "..."))
                         .insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page")
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
            $("<li>").addClass("page-item").addClass("next-page")
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
        );

        $(".courses").show();
        showPage(1);

        $(document).on("click", ".pagination li.current-page:not(.active)", function() {
            return showPage(+$(this).text());
        });

        $(".next-page").on("click", function() {
            return showPage(currentPage + 1);
        });
        $(".previous-page").on("click", function() {
            return showPage(currentPage - 1);
        });
    });
}
