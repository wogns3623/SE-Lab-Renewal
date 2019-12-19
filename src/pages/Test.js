// import React, { Component } from "react";
// import Slide, {
//   SlideTitle,
//   SlidePage,
//   SlideSection,
//   PageTitle,
//   PageContent
// } from "component/courses/slide";

// class Test extends Component {
//   render() {
//     return (
//       <Slide
//         lectureID="CSE326"
//         lectureName="Web Application Development"
//         no="8"
//       >
//         <SlideTitle>JavaScript</SlideTitle>
//         {/* auto input in slide */}
//         {/* <SlidePage>
//           <PageTitle>
//             CSE3026: Web Application Development 08.JavaScript
//           </PageTitle>
//           <PageContent>
//             <h2>Scott Uk-Jin Lee</h2>

//             <p className="license">
//               Reproduced with permission of the authors. Copyright 2012 Marty
//               Stepp, Jessica Miller, and Victoria Kirst. All rights reserved.
//               Further reproduction or distribution is prohibited without written
//               permission.
//             </p>

//             <div className="w3c">
//               <a href="https://validator.w3.org/check/referer">
//                 <img
//                   src="./CSE3026 - 08. JavaScript_files/w3c-html.png"
//                   alt="Valid HTML 5"
//                 />
//               </a>
//               <a href="https://jigsaw.w3.org/css-validator/check/referer">
//                 <img
//                   src="./CSE3026 - 08. JavaScript_files/w3c-css.png"
//                   alt="Valid CSS!"
//                 />
//               </a>
//             </div>
//           </PageContent>
//         </SlidePage> */}

//         <SlideSection title="Key JavaScript Concepts">
//           <SlidePage>
//             <PageTitle>Client-side scripting</PageTitle>

//             <PageContent>
//               <div className="centerfigure">
//                 <img
//                   src="./CSE3026 - 08. JavaScript_files/figure_2_client_side_scripting.png"
//                   alt="client-side scripting"
//                 />
//               </div>

//               <ul>
//                 <li>
//                   <span className="term">client-side script</span>: code runs in
//                   browser <em>after</em> page is sent back from server
//                   <ul>
//                     <li>
//                       often this code manipulates the page or responds to user
//                       actions
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </PageContent>
//           </SlidePage>

//           <SlidePage>
//             <PageTitle>Why use client-side programming?</PageTitle>
//             <PageContent>
//               <p>
//                 PHP already allows us to create dynamic web pages. Why also use
//                 client-side scripting?
//               </p>

//               <ul>
//                 <li>
//                   client-side scripting (JavaScript) benefits:
//                   <ul>
//                     <li>
//                       <span className="term">usability</span>: can modify a page
//                       without having to post back to the server (faster UI)
//                     </li>
//                     <li>
//                       <span className="term">efficiency</span>: can make small,
//                       quick changes to page without waiting for server
//                     </li>
//                     <li>
//                       <span className="term">event-driven</span>: can respond to
//                       user actions like clicks and key presses
//                     </li>
//                   </ul>
//                 </li>

//                 <li>
//                   server-side programming (PHP) benefits:
//                   <ul>
//                     <li>
//                       <strong>security</strong>: has access to server's private
//                       data; client can't see source code
//                     </li>
//                     <li>
//                       <strong>compatibility</strong>: not subject to browser
//                       compatibility issues
//                     </li>
//                     <li>
//                       <strong>power</strong>: can write files, open connections
//                       to servers, connect to databases, ...
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </PageContent>
//           </SlidePage>
//         </SlideSection>

//         <SlideSection title="Key JavaScript Concepts">
//           <SlidePage>
//             <PageTitle>
//               <a href="http://www.w3schools.com/js/js_variables.asp">
//                 Variables
//               </a>{" "}
//               and types
//             </PageTitle>
//             <PageContent></PageContent>
//           </SlidePage>
//           <SlidePage>
//             <PageTitle>
//               <code>Number</code> type
//             </PageTitle>
//             <PageContent></PageContent>
//           </SlidePage>
//         </SlideSection>
//       </Slide>
//     );
//   }
// }

// export default Test;
