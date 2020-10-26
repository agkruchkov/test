import React from "react";
import { useSelector, connect } from "react-redux";
import { getCurrentUser } from "../store/currentUser";

const NewsItem = ({ item, onDelete, onApprovedChange }) => {
  const currentUser = useSelector(getCurrentUser);

  return (
    <li key={item.id}>
      <div className="news-title-and-date">
        <div className="news-title">
          <h2>{item.title}</h2>
        </div>

        <div>
          {currentUser?.admin && (
            <div className="instruments-of-admin">
              <label>
                <input
                  type="checkbox"
                  value="Одобрено"
                  defaultChecked={item.approved}
                  onClick={() => onApprovedChange(item.id)}
                />
              </label>
              <div
                onClick={() => onDelete(item)}
                className="button-delete-news"
              >
                -
              </div>
            </div>
          )}

          {currentUser && !currentUser.admin && !item.approved && (
            <div className="news-not-approved">Не одобрена администратором</div>
          )}

          <div className="news-date">{item.date}</div>
        </div>
      </div>

      <div className="news-content">{item.content}</div>
    </li>
  );
};

export default NewsItem;

// class NewsItem extends React.Component {
//   render() {
//     return (
//       <li key={this.props.item.id}>
//         <div className="news-title-and-date">
//           <div className="news-title">
//             <h2>{this.props.item.title}</h2>
//           </div>

//           <div>
//             <div className="instruments-of-admin">
//               <label>
//                 <input
//                   type="checkbox"
//                   value="Одобрено"
//                   defaultChecked={this.props.item.approved}
//                   onClick={() =>
//                     this.props.onApprovedChange(this.props.item.id)
//                   }
//                 />
//               </label>
//               <div
//                 onClick={() => this.props.onDelete(this.props.item)}
//                 className="button-delete-news"
//               >
//                 -
//               </div>
//             </div>

//             {this.props.currentUser &&
//               !this.props.currentUser.admin &&
//               !this.props.item.approved && (
//                 <div className="news-not-approved">
//                   Не одобрена администратором
//                 </div>
//               )}

//             <div className="news-date">{this.props.item.date}</div>
//           </div>
//         </div>

//         <div className="news-content">{this.props.item.content}</div>
//       </li>
//     );
//   }
// }

// const mapStatetoProps = (state) => ({
//   currentUser: state.currentUser,
// });

// export default connect(mapStatetoProps)(NewsItem);
