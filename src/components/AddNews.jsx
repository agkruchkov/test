import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector, connect } from "react-redux";
import * as newsItemsActions from "../store/newsItems";
import { getCurrentUser } from "../store/currentUser";

import InputForm from "./common/InputForm";
import TextAreaForm from "./common/TextAreaForm";
import getFormatDate from "../utils/getFormatDate";
import { getNewsItems } from "../store/newsItems";

const validationSchema = Yup.object({
  title: Yup.string()
    .max(80, "Must be 80 characters or less")
    .required("Required"),
});

const AddNews = ({ setShowFieldAddNews }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const newsItems = useSelector(getNewsItems);

  const handleSubmitNews = (values) => {
    setShowFieldAddNews(false);

    dispatch(
      newsItemsActions.created({
        id: String(newsItems.length + 1),
        title: values.title,
        content: values.content,
        date: getFormatDate(values.date),
        approved: false,
        author: currentUser.id,
      })
    );
  };

  return (
    <div className="add-news-form">
      <Formik
        initialValues={{ title: "", content: "", date: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmitNews}
      >
        <Form>
          <div>
            <InputForm label="Заголовок: " name="title" type="text" />
          </div>
          <div>
            <TextAreaForm label="Текст: " name="content" type="text" />
          </div>
          <InputForm label="Дата: " name="date" type="date" />
          <button className="btn" type="submit">
            Сохранить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNews;

// class AddNews extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   handleSubmitNews(values) {
//     this.props.setShowFieldAddNews(false);
//     this.props.dispatch(
//       newsItemsActions.created({
//         id: String(this.props.newsItems.length + 1),
//         title: values.title,
//         content: values.content,
//         date: getFormatDate(values.date),
//         approved: false,
//         author: this.props.currentUser.id,
//       })
//     );
//   }

//   render() {
//     return (
//       <div className="add-news-form">
//         <Formik
//           initialValues={{ title: "", content: "", date: "" }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => this.handleSubmitNews(values)}
//         >
//           <Form>
//             <div>
//               <InputForm label="Заголовок: " name="title" type="text" />
//             </div>
//             <div>
//               <TextAreaForm label="Текст: " name="content" type="text" />
//             </div>
//             <InputForm label="Дата: " name="date" type="date" />
//             <button className="btn" type="submit">
//               Сохранить
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   currentUser: state.currentUser,
//   newsItems: state.newsItems,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dispatch: dispatch,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
