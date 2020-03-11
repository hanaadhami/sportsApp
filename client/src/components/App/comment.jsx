import React, { Component } from "react";
//https://www.qcode.in/learn-react-by-creating-a-comment-app/
class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        comments: [],
        loading: false
      };
    }
  
    render() {
      const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
      return (
        <div className="App container bg-light shadow">
          <header className="App-header">
            <img src={logo} className={loadingSpin} alt="logo" />
            <h1 className="App-title">
              Streaming Comments
              <span className="px-2" role="img" aria-label="Chat">
                💬
              </span>
            </h1>
          </header>
  
          <div className="row">
            <div className="">
              <h6>Feel free to comment on the action!</h6>
              {/* Comment Form Component */}
            </div>
            <div className="col-8  pt-3 bg-white">
              {/* Comment List Component */}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default App;

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        name: "",
        message: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
        // prevent default form submission
        e.preventDefault();
    
        if (!this.isFormValid()) {
          this.setState({ error: "All fields are required." });
          return;
        }
    
        // loading status and clear error
        this.setState({ error: "", loading: true });
    
        // persist the comments on server
        let { comment } = this.state;
        fetch("http://localhost:3000", {
          method: "post",
          body: JSON.stringify(comment)
        })
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              this.setState({ loading: false, error: res.error });
            } else {
              // add time return from api and push comment to parent state
              comment.time = res.time;
              this.props.addComment(comment);
    
              // clear the message box
              this.setState({
                loading: false,
                comment: { ...comment, message: "" }
              });
            }
          })
          .catch(err => {
            this.setState({
              error: "Something went wrong while submitting form.",
              loading: false
            });
          });
      }
    
      isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.message !== "";
      }
    // prevent default form submission
    e.preventDefault();
    //...
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }
export default function CommentList(props) {
    return (
      <div className="commentList">
        <h5 className="text-muted mb-4">
          <span className="badge badge-success">{props.comments.length}</span>{" "}
          Comment{props.comments.length > 0 ? "s" : ""}
        </h5>
  
        {props.comments.length === 0 && !props.loading ? (
          <div className="alert text-center alert-info">
            Be the first to comment
          </div>
        ) : null}
  
        {props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    );
  }
 class App extends Component {
    constructor(props) {
      super(props);
      // ...
      this.addComment = this.addComment.bind(this);
    }
  
    addComment(comment) {
      this.setState({
        loading: false,
        comments: [comment, ...this.state.comments]
      });
    }
  }