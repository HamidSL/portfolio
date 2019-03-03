document.addEventListener("DOMContentLoaded", () => {
  const defaultState = {
    clientId: "7345dafa9d81fc560230",
    clientSecret: "5d7f5dc062280a3e37530c4e89dc05ad52f28c73",
    sort: "created: asc",
    username: "margaiwangara",
    count: 10,
    repos: []
  };

  const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "GET_REPOS":
        const newState = { ...state };
        fetch(
          `https://api.github.com/users/${newState.username}/repos?per_page=${
            newState.count
          }&sort=${newState.sort}&client_id=${
            newState.clientId
          }&client_secret=${newState.clientSecret}`
        )
          .then(resp => resp.json())
          .then(data => newState.repos.push(data))
          .catch(error => console.log(error));
        return newState;
      default:
        return state;
    }
  };

  const store = Redux.createStore(
    rootReducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch({ type: "GET_REPOS" });
  console.log(store.getState());
});
