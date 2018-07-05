import React from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import marked from 'marked';
import { NavLink } from 'react-router-dom';


// hard coded post for UI design
class FullPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleDelete(e) {
    console.log(`Delete ${this.props.post.title}`);
    this.props.onDelete(this.props.post._id, this.props.history);
  }

  handleLike(e) {
    console.log(`Like ${this.props.post.title}`);
  }

  render() {
    return (
      <div className="full-post">
        <div className="full-post-header">
          <img src={this.props.post.cover_url} alt="cover for post" />
          <h4>{this.props.post.title}</h4>
          <div>
            <i
              onClick={this.handleDelete}
              tabIndex={-1}
              className="fas fa-trash"
              role="button"
            />
            <NavLink
              className="full-post-button-link"
              to={`/posts/${this.props.post.id}/edit`}
              exact
              role="button"
              tabIndex={-1}
            >
              <i
                onClick={this.handleEdit}
                tabIndex={-1}
                className="fas fa-edit"
                role="button"
              />
            </NavLink>
          </div>
        </div>
        {/* <p>{this.props.post.text}</p> */}
        <div
          className="full-post-body"
          dangerouslySetInnerHTML={{
              __html: marked(this.props.post.content || ''),
            }}
        />
      </div>
    );
  }
}

export default FullPost;
