import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
// Action Creators
export const fetchAllPosts = async () => {
  // Bad Approach!!! and Why?
  // Ans -> Error: Actions must be plain objects. Use custom middleware for async actions.
  const response = await jsonPlaceholder.get("/posts");
  //   console.clear();
  //   console.log(response); // API Status:200. Fetching the data successfully.

  // Trying out without async await
  //   const promise = jsonPlaceholder.get("/posts"); // It returns data after sometime

  return {
    type: "FETCH_POSTS",
    payload: response,
    // payload: response.data, // NOT WORKING
    // payload: promise,
  };
};

// What's wrong?

// 1) Action Creator must return plain object. fetchAllPosts is not doing so.
// Whether it's looking like a plain object, but we know our code is converted in ES2015 syntax eventually to be run in browser by Babel.
// So After pasting the function starting from "const fetchAllPosts = ..." into bablejs.io, we can see it's not a plain object.
// It's because of async await. If we remove it, it turns into a plain object.

// 2) By the time our action gets to a reducer, we won't have fetched our data.
// As said we remove async await, return value will be a plain object
// Let's try it, there is no Error but api returns data after sometime

// Solution:-
// Use custom middleware for async actions.
*/

// ------------------------------------------------------------------------------------------------------------------------------------

// // Action Creators
// export const fetchAllPosts = () => {
//   return async dispatch => { // (dispatch, getState) - getState is optional
//     const response = await jsonPlaceholder.get("/posts");

//     // Instead of returning an action, we will dispatch our action manually
//     // return {
//     //   type: "FETCH_POSTS",
//     //   payload: promise,
//     // };

//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response,
//     });

//   };
// };

// Using ES2015 Syntax, In short
// Action Creators
export const fetchAllPosts = () => async dispatch => { 
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response,
    });
};
