import React, { useState } from "react";
import { useSelector, connect } from "react-redux";

import NewsList from "./NewsList";
import AddNews from "./AddNews";
import NewsSearch from "./NewsSearch";
import { getCurrentUser } from "../store/currentUser";
import { getFilteredNewsItems } from "../store/newsItems";

const News = () => {
  const currentUser = useSelector(getCurrentUser);
  const filteredNewsItems = useSelector(getFilteredNewsItems);
  const [showFieldAddNews, setShowFieldAddNews] = useState(false);
  
  return (
    <div className="middle-news">
      <div className="news-column-search-and-add">
        <NewsSearch />

        {currentUser && !currentUser.admin && (
          <button
            className="btn"
            type="button"
            onClick={() => setShowFieldAddNews(true)}
          >
            Добавить новость
          </button>
        )}

        {currentUser && !currentUser.admin && showFieldAddNews && (
          <AddNews setShowFieldAddNews={setShowFieldAddNews} />
        )}
      </div>

      <NewsList filteredNewsItems={filteredNewsItems} />
    </div>
  );
};

export default News;

// class News extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { showFieldAddNews: false };
//   }

//   render() {
//     const handleClick = () => {
//       this.setState({ showFieldAddNews: true });
//     };
//     return (
//       <div className="middle-news">
//         <div className="news-column-search-and-add">
//           <NewsSearch />

//           {this.props.currentUser && !this.props.currentUser.admin && (
//             <button className="btn" type="button" onClick={handleClick}>
//               Добавить новость
//             </button>
//           )}

//           {this.props.currentUser &&
//             !this.props.currentUser.admin &&
//             this.state.showFieldAddNews && (
//               <AddNews setShowFieldAddNews={this.state.ShowFieldAddNews} />
//             )}
//         </div>

//         <NewsList filteredNewsItems={this.props.filteredNewsItems} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   currentUser: state.currentUser,
//   filters: state.filters,
//   filteredNewsItems: getFilteredNewsItems(state),
// });

// export default connect(mapStateToProps)(News);
