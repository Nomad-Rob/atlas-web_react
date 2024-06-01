import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  loginParagraph: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2.2rem 1rem 4rem',
  },
  form: {
    display: 'flex',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  labelInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 900px)': {
      marginBottom: '.5rem',
    },
  },
  label: {
    paddingRight: '.5rem',
  },
  input: {
    marginRight: '1rem',
    border: '1px solid #00003C',
    borderRadius: '8px',
    '@media (max-width: 900px)': {
      margin: '0',
      width: '100%',
    },
  },
  button: {
    border: '1px solid #00003C',
    borderRadius: '8px',
    padding: '.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    ':focus': {
      borderColor: '#FF0000',
      outline: '2px solid #FF0000',
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, () => {
      this.updateSubmitState();
    });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, () => {
      this.updateSubmitState();
    });
  }

  updateSubmitState() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email.length > 0 && password.length > 0 });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    // Call logIn function passed via props from App component
    this.props.logIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className={css(styles.loginBody)}>
        <p className={css(styles.loginParagraph)}>
          Login to access the full dashboard
        </p>
        <form className={css(styles.form)} onSubmit={this.handleLoginContact}>
          <div className={css(styles.labelInputContainer)}>
            <label className={css(styles.label)} htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className={css(styles.labelInputContainer)}>
            <label className={css(styles.label)} htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            className={css(styles.button)}
            type="submit"
            value="OK"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;
