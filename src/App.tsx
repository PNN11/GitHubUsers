import React from "react";
import { Provider } from "react-redux";

import store from "store";
import UsersContainer from "containers/UsersContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  );
};

export default App;
