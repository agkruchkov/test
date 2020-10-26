import { approvedFunc } from "../newsItems";
// import { useDispatch } from "react-redux";

// SNA
const logger = (store) => (next) => (action) => {
  //   const dispatch = useDispatch();
  // if (action.type === "logSomething")
  console.log(store.getState());
  console.log("next action = ", action);
  //   if (action.type === "approved") dispatch(approvedFunc);
  next(action);
};

export default logger;

// { type: "logSomething", payload: 'sdf'}
// { type: "logSomthing2" }

// currying

// const logger = store => {
// return next => {
//     return action => {
//         // our function
//     }
// }

// middleware1(middleware2(middleware3))
