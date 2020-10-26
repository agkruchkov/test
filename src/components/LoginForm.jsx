import React, { useState } from "react";
import { Formik, Form } from "formik";
import Modal from "react-modal";
import { useDispatch, connect } from "react-redux";
import * as currentUserActions from "../store/currentUser";

import { login } from "../data/Users";
import InputForm from "./common/InputForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

const LoginForm = ({ setIsShowing, isShowing }) => {
  const dispatch = useDispatch();

  const [verificationUser, setVerificationUser] = useState(true);
  const handleCloseModal = () => setIsShowing(false);

  function handleSaveData(values) {
    let result = login(values);
    if (result) {
      dispatch(currentUserActions.loggedIn(result));
      setIsShowing(false);
      setVerificationUser(true);
    } else setVerificationUser(false);
  }

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={handleSaveData}
    >
      <Modal
        isOpen={isShowing}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="LoginForm"
      >
        <Form>
          <InputForm label="Логин: " name="login" type="text" />
          <InputForm label="Пароль: " name="password" type="password" />
          {!verificationUser && (
            <div className="login-password-error">
              Введена неверная пара логин\пароль
            </div>
          )}
          <div className="button-block-in-login-form">
            <button className="btn" type="button" onClick={handleCloseModal}>
              Закрыть
            </button>
            <button className="btn" type="submit" onSubmit={handleSaveData}>
              Войти
            </button>
          </div>
        </Form>
      </Modal>
    </Formik>
  );
};

export default LoginForm;

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       verificationUser: true,
//     };
//   }

//   handleSaveData(values) {
//     let result = login(values);
//     console.log(result);
//     if (result) {
//       this.props.dispatch(currentUserActions.loggedIn(result));
//       this.props.setIsShowing(false);
//       this.setState({ verificationUser: true });
//     } else this.setState({ verificationUser: false });
//   }

//   handleCloseModal() {
//     this.props.setIsShowing(false);
//   }

//   render() {
//     return (
//       <Formik
//         initialValues={{ login: "", password: "" }}
//         onSubmit={(values) => this.handleSaveData(values)}
//       >
//         <Modal
//           isOpen={this.props.isShowing}
//           onRequestClose={() => this.handleCloseModal()}
//           style={customStyles}
//           contentLabel="LoginForm"
//         >
//           <Form>
//             <InputForm label="Логин: " name="login" type="text" />
//             <InputForm label="Пароль: " name="password" type="password" />
//             {!this.state.verificationUser && (
//               <div className="login-password-error">
//                 Введена неверная пара логин\пароль
//               </div>
//             )}
//             <div className="button-block-in-login-form">
//               <button
//                 className="btn"
//                 type="button"
//                 onClick={() => this.handleCloseModal()}
//               >
//                 Закрыть
//               </button>
//               <button
//                 className="btn"
//                 type="submit"
//                 onSubmit={(values) => this.handleSaveData(values)}
//               >
//                 Войти
//               </button>
//             </div>
//           </Form>
//         </Modal>
//       </Formik>
//     );
//   }
// }

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   dispatch: dispatch,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
