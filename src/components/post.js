import React from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import marked from 'marked';
import { NavLink } from 'react-router-dom';

// hard coded post for UI design
class Post extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleEdit(e) {
    console.log(`Edit ${this.props.post.title}`);
  }

  handleDelete(e) {
    console.log(`Delete ${this.props.post.title}`);
    this.props.onDelete(this.props.post.id, this.props.history);
  }

  handleLike(e) {
    this.props.onLike(this.props.post.id, this.props.history);
    console.log(`Like ${this.props.post.title}`);
  }

  handleView(e) {
    console.log(`View ${this.props.post.title}`);
    this.props.onSelect(this.props.post.id);
  }

  render() {
    return (
      <div className="post">
        <img src={this.props.post.cover_url} alt="cover for post" />
        <div className="post-box">
          <div className="post-header">
            <NavLink
              className="post-title-link"
              to={`/posts/${this.props.post.id}`}
              exact
              role="button"
              tabIndex={-1}
            >
              <h4>{this.props.post.title}</h4>
            </NavLink>
            <div className="post-bottons">
              <i
                onClick={this.handleDelete}
                tabIndex={-1}
                className="fas fa-trash"
                role="button"
              />
              <NavLink
                className="post-button-link"
                to={`/posts/${this.props.post.id}/edit`}
                exact
                role="button"
                tabIndex={-1}
              >
                <i
                //  onClick={this.handleEdit}
                  tabIndex={-1}
                  className="fas fa-edit"
                  role="button"
                />
              </NavLink>
              <i
                onClick={this.handleLike}
                tabIndex={-1}
                className="fas fa-heart"
                role="button"
              > {this.props.post.likes}
              </i>
            </div>
          </div>
          <div className="post-text">
            <div
              className="postBody"
              dangerouslySetInnerHTML={{
              __html: marked(this.props.post.tags || ''),
            }}
            />
            <NavLink
              to={`/posts/${this.props.post.id}`}
              exact
              role="button"
              tabIndex={-1}
              className="post-button-link"
            >
              <i
                onClick={this.handleView}
                tabIndex={-1}
                className="fas fa-arrow-alt-circle-right"
                role="button"
              />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
