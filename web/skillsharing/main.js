function runApp() {
    let user = localStorage.getItem("userName") || "Anon";
    let state, app;
    function dispatch(action) {
      state = handleAction(state, action);
      app.syncState(state);
    }
  
    pollTalks(talks => {
      if (!app) {
        state = {user, talks};
        app = new SkillShareApp(state, dispatch);
        document.body.appendChild(app.dom);
      } else {
        dispatch({type: "setTalks", talks});
      }
    }).catch(reportError);
  }
  
  runApp();