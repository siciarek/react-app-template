import React from 'react'
import config from '../config'

const Footer = () =>
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>{config.app.name}</strong> by <a href={process.env.REACT_APP_AUTHOR_WEBSITE}>{config.app.author}</a>.
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
        </p>
        <p>
          <a className="icon" href={process.env.REACT_APP_REPO_URL}>
            <i className="fa fa-github"/>
          </a>
        </p>
      </div>
    </div>
  </footer>

export default (Footer)
