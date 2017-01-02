/**
 * A navigation component
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink, withRouter} from 'react-router';


class NavItem extends React.Component {
  render() {
    //const {router} = this.props;
    const {router, index, to, children, ...props} = this.props;
    let isActive = false;

    if (router.isActive('/', true) && index) {
      isActive = true;
    }
    else if (to == '/' && router.isActive(to, true) == false) isActive = false;
    else  isActive = router.isActive(to);
    const LinkComponent = index ? IndexLink : Link;
    //debugger;
    return (

      <li className= {isActive ? 'active nav-item' : 'nav-item'}>
        <LinkComponent  className= {isActive ? 'active nav-link' : 'nav-link'} to={to} >{children}</LinkComponent>
      </li>
    );
  }
}
NavItem.propTypes = {
  router: PropTypes.object,
  index: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default withRouter(NavItem);
