document.addEventListener('DOMContentLoaded', (event) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".visible");
  hiddenElements.forEach((el) => observer.observe(el));

  // Preloader
  window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});


// <!-- <div class="block-background">
//           <div class="block2">
//             <div class="heads block2-heading">&#60;Personal Projects&gt;</div>
//             <div class="vertical-line" style="margin-left: 2em"></div>
//             <div style="max-width: 400px" class="carousel">
//               <div id="carouselExampleCaptions" class="carousel slide">
//                 <div class="carousel-indicators" style="opacity: 0">
//                   <button
//                     type="button"
//                     data-bs-target="#carouselExampleCaptions"
//                     data-bs-slide-to="0"
//                     class="active"
//                     aria-current="true"
//                     aria-label="Slide 1"
//                   ></button>
//                   <button
//                     type="button"
//                     data-bs-target="#carouselExampleCaptions"
//                     data-bs-slide-to="1"
//                     aria-label="Slide 2"
//                   ></button>
//                   <button
//                     type="button"
//                     data-bs-target="#carouselExampleCaptions"
//                     data-bs-slide-to="2"
//                     aria-label="Slide 3"
//                   ></button>
//                   <button
//                     type="button"
//                     data-bs-target="#carouselExampleCaptions"
//                     data-bs-slide-to="3"
//                     aria-label="Slide 4"
//                   ></button>
//                   <button
//                     type="button"
//                     data-bs-target="#carouselExampleCaptions"
//                     data-bs-slide-to="4"
//                     aria-label="Slide 5"
//                   ></button>
//                   <button
//                     type="button"
//                     data-bs-target="#carouselExampleCaptions"
//                     data-bs-slide-to="5"
//                     aria-label="Slide 6"
//                   ></button>
//                 </div>
//                 <div class="carousel-inner">
//                   <div class="carousel-item active">
//                     <img
//                       src="./public/ILD.gif"
//                       class="d-block w-100"
//                       alt="..."
//                     />
//                     <div
//                       style="margin-top: 10px"
//                       id="carouselExampleFade"
//                       class="carousel-fade"
//                     >
//                       <h5
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           padding: 5px;
//                         "
//                       >
//                         Stress Computation for a bridge
//                       </h5>
//                       <p
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           font-size: x-small;
//                         "
//                       >
//                         Designed a matrix-based algorithm to calculate stress on
//                         a bridge over a moving unit load using Java. Developed a
//                         Java and JavaFX based application to facilitate user
//                         interaction and graphical representations
//                       </p>
//                     </div>
//                   </div>
//                   <div class="carousel-item">
//                     <img
//                       src="./public/CUBE_GAME.gif"
//                       class="d-block w-100"
//                       alt="..."
//                     />
//                     <div
//                       style="margin-top: 10px"
//                       id="carouselExampleFade"
//                       class="carousel-fade"
//                     >
//                       <h5
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           padding: 5px;
//                         "
//                       >
//                         Block Game
//                       </h5>
//                       <p
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           font-size: x-small;
//                         "
//                       >
//                         Developed an engaging game using Unity and C# for users
//                         that features a red cube navigating a challenging path
//                         filled with obstacles.
//                       </p>
//                     </div>
//                   </div>

//                   <div class="carousel-item">
//                     <img
//                       src="./public/MERN_Project.gif"
//                       class="d-block w-100"
//                       alt="..."
//                     />
//                     <div
//                       style="margin-top: 10px"
//                       id="carouselExampleFade"
//                       class="carousel-fade"
//                     >
//                       <h5
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           padding: 5px;
//                         "
//                       >
//                         Movie Review Application using MERN
//                       </h5>
//                       <p
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           font-size: x-small;
//                         "
//                       >
//                         Built an application using ReactJS, NodeJS, Express, and
//                         MongoDB, showcasing end-to-end development
//                         skills.Implemented REST APIs to enable CRUD operations,
//                         allowing seamless data manipulation within the
//                         application.
//                       </p>
//                     </div>
//                   </div>

//                   <div class="carousel-item">
//                     <img
//                       src="./public/Dynamic_analysis.jpg"
//                       class="d-block w-100"
//                       alt="..."
//                     />
//                     <div
//                       style="margin-top: 10px"
//                       id="carouselExampleFade"
//                       class="carousel-fade"
//                     >
//                       <h5
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           padding: 5px;
//                         "
//                       >
//                         Dynamic analysis of beam
//                       </h5>
//                       <p
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           font-size: x-small;
//                         "
//                       >
//                         The aim of this project is to develop a MATLAB code for
//                         conducting time-history analysis on forced vibrating
//                         cantilever beams, enabling an evaluation of a
//                         structure's durability and potential damage under
//                         time-varying loads.
//                       </p>
//                     </div>
//                   </div>

//                   <div class="carousel-item">
//                     <img src="./public/3.jpg" class="d-block w-100" alt="..." />
//                     <div
//                       style="margin-top: 10px"
//                       id="carouselExampleFade"
//                       class="carousel-fade"
//                     >
//                       <h5
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           padding: 5px;
//                         "
//                       >
//                         Movie Review Application
//                       </h5>
//                       <p
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           font-size: x-small;
//                         "
//                       >
//                         The "Movie Review" project is a web-based application
//                         that provides users with a platform to search, review
//                         and rate movies. The project is developed using Spring
//                         Boot for the backend, React for the front end and
//                         MongoDB for the database.
//                       </p>
//                     </div>
//                   </div>

//                   <div class="carousel-item">
//                     <img src="./public/6.jpg" class="d-block w-100" alt="..." />
//                     <div
//                       style="margin-top: 10px"
//                       id="carouselExampleFade"
//                       class="carousel-fade"
//                     >
//                       <h5
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           padding: 5px;
//                         "
//                       >
//                         Student Data Management Application
//                       </h5>
//                       <p
//                         style="
//                           background-color: rgba(0, 0, 0, 0.5);
//                           font-size: x-small;
//                         "
//                       >
//                         Developed a Spring Boot application for efficient
//                         management of student data, enabling CRUD
//                         operations.Integrated Spring Data JPA for efficient data
//                         retrieval, and manipulation of data from the MySQL
//                         database.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   class="carousel-control-prev"
//                   type="button"
//                   data-bs-target="#carouselExampleCaptions"
//                   data-bs-slide="prev"
//                 >
//                   <span
//                     class="carousel-control-prev-icon"
//                     aria-hidden="true"
//                   ></span>
//                   <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button
//                   class="carousel-control-next"
//                   type="button"
//                   data-bs-target="#carouselExampleCaptions"
//                   data-bs-slide="next"
//                 >
//                   <span
//                     class="carousel-control-next-icon"
//                     aria-hidden="true"
//                   ></span>
//                   <span class="visually-hidden">Next</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> -->