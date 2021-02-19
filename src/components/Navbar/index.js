import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <div>
        <ul className="navbar">
          <li className="nav">
            <Link
              to="/SearchFormpage"
              className={
                window.location.pathname === "/SearchFormpage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>

          <li className="nav">
            <Link
              to="/SearchResultpage"
              className={
                window.location.pathname === "SearchResultpage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Results
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       {/* <Link className="navbar-brand" to="/">
//         Google Books
//       </Link> */}

//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/searchFormpage"
//               className={
//                 window.location.pathname === "/SearchFormpage"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               Search
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/SearchResultpage"
//               className={
//                 window.location.pathname === "/SearchResultpage"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               Results
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
