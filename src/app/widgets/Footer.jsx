import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import {Container, Content, Icon} from 'bulma-react'

const Footer = () =>
  <footer className="footer">
    <Container>
      <Content has-text-centered={'true'}>
        <p>
          <strong>{config.app.name}</strong> by <a href={process.env.REACT_APP_AUTHOR_WEBSITE}>{config.app.author}</a>.
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
        </p>
        <p>
          <a className="icon" href={process.env.REACT_APP_REPO_URL}>
            <Icon icon="github"/>
          </a>
        </p>
      </Content>
    </Container>
  </footer>

Footer.propTypes = {

}

Footer.defaultProps = {

}

export default Footer
