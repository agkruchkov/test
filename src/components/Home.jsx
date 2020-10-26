import React from "react";
import { connect, useSelector } from "react-redux";

const Home = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div className="middle-home container clearfix">
      <h2>Привет, {currentUser?.login || "Гость"}!</h2>
    </div>
  );
};

export default Home;

// class Home extends React.Component {
//   render() {
//     return (
//       <div className="middle-home container clearfix">
//         <h2>Привет, {this.props.currentUser?.login || "Гость"}!</h2>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   currentUser: state.currentUser,
// });

// export default connect(mapStateToProps)(Home);
