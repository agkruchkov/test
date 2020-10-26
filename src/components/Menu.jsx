import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { getCurrentUser, messLogOut } from "../store/currentUser";

const Menu = ({ openModalHandler }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  return (
    <nav className="menu-header">
      <ul>
        <li>{currentUser ? `(${currentUser.login})` : "(Гость)"}</li>
        <li>
          <Link to={"/home"}>Главная</Link>
        </li>
        <li>
          <Link to={"/news"}>Новости</Link>
        </li>
        <li
          onClick={() =>
            currentUser ? dispatch(messLogOut) : openModalHandler()
          }
        >
          <a href="#">{currentUser ? "Выход" : "Вход"}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

// class Menu extends React.Component {
//   render() {
//     return (
//       <nav className="menu-header">
//         <ul>
//           <li>
//             {this.props.currentUser
//               ? `(${this.props.currentUser.login})`
//               : "(Гость)"}
//           </li>
//           <li>
//             <Link to={"/home"}>Главная</Link>
//           </li>
//           <li>
//             <Link to={"/news"}>Новости</Link>
//           </li>
//           <li
//             onClick={() =>
//               this.props.currentUser
//                 ? this.props.dispatch(loggedOut())
//                 : this.props.openModalHandler()
//             }
//           >
//             <a href="#">{this.props.currentUser ? "Выход" : "Вход"}</a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   currentUser: state.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   loggedOut: () => dispatch(loggedOut()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Menu);
