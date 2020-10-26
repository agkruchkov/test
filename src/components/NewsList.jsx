import React from "react";
import NewsItem from "./NewsItem";
import * as newsItemsActions from "../store/newsItems";
import { useDispatch, connect } from "react-redux";
import { approvedFunc } from "../store/newsItems";

const NewsList = ({ filteredNewsItems }) => {
  const dispatch = useDispatch();

  const handleApprovedChange = (id) => {
    dispatch(approvedFunc(id));
  };

  const handleDelete = (item) => {
    dispatch(newsItemsActions.deleted(item.id));
  };

  return (
    <ul className="news-list">
      {filteredNewsItems.map((item) => (
        <NewsItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onApprovedChange={handleApprovedChange}
        />
      ))}
    </ul>
  );
};

export default NewsList;

// class NewsList extends React.Component {
//   render() {
//     return (
//       <ul className="news-list">
//         {this.props.newsItems.map((item) => (
//           <NewsItem
//             key={item.id}
//             item={item}
//             onDelete={() => this.props.handleDelete(item.id)}
//             onApprovedChange={() => this.props.handleApprovedChange(item.id)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   newsItems: state.newsItems,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleDelete: (id) => dispatch(newsItemsActions.deleted(id)),
//   handleApprovedChange: (id) => dispatch(newsItemsActions.approved(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
