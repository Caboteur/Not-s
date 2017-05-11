
import React, {Component} from "react";
import ReactDOM from 'react-dom'
import { Blaze } from 'meteor/blaze'

export class LoginButtons extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.view = Blaze.renderWithData(Template.loginButtons, {align: this.props.align},
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount(){
    Blaze.remove(this.view);
  }

  render() {

    return <span ref="container" />;
  }
}

LoginButtons.propTypes = {
  align: React.PropTypes.string
}

LoginButtons.defaultProps = {
  align: "left"
}
