import React from "react";
import "./App.css";

const StoreContext = React.createContext(null);

const Post = () => {
  return (
    <ul>
      <StoreContext.Consumer>
        {({ posts }) =>
          posts.map((post) => {
            return <li key={post.id}>{post.body}</li>;
          })
        }
      </StoreContext.Consumer>
    </ul>
  );
};

class App extends React.Component {
  state = {
    posts: [{ userId: 0, id: 0, title: "", body: "" }],
  };

  render() {
    return (
      <div className="App">
        <StoreContext.Provider value={this.state}>
          <Post />
        </StoreContext.Provider>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
      });
  }
}

export default App;
