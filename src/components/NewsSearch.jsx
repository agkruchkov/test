import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { changedQuery, getFilters } from "../store/filters";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);
  return (
    <div className="middle-news-search">
      <label>
        Поиск:
        <input
          type="text"
          value={filters.query}
          onChange={(event) =>
            dispatch(changedQuery({ query: event.target.value }))
          }
        />
      </label>
    </div>
  );
};

export default NewsSearch;

// class NewsSearch extends React.Component {
//   render() {
//     return (
//       <div className="middle-news-search">
//         <label>
//           Поиск:
//           <input
//             type="text"
//             value={this.props.filters.query}
//             onChange={this.props.handleChangedQuery}
//           />
//         </label>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   filters: state.filters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleChangedQuery: (event) =>
//     dispatch(changedQuery({ query: event.target.value })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NewsSearch);
