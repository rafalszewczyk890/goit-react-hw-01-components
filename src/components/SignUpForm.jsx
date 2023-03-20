import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './SignUpForm.module.css';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  isActive: false,
  gender: null,
  age: 0,
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = event => {
    const { name, value, checked, type } = event.target;

    if (name === 'age') {
      const parsedValue = parseInt(value);

      this.setState({
        age: parsedValue,
      });
    }

    console.log({ name, value, checked, type });

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
    console.log(this.state);
  };

  handleBlur = () => {
    if (this.state.login.length < 5) {
      console.log('Too short!');
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(`Signed up as: ${this.state.login}`);

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, isActive, gender, age } = this.state;

    const loginInputId = nanoid();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={loginInputId}>Login</label>
        <input
          id={loginInputId}
          name="login"
          type="text"
          placeholder="Enter your login"
          value={login}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <label htmlFor={emailInputId}>Email</label>
        <input
          id={emailInputId}
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor={passwordInputId}>Password</label>
        <input
          id={passwordInputId}
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={this.handleChange}
        />

        <label>
          Is user active
          <input
            name="isActive"
            type="checkbox"
            checked={isActive}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h5>Choose your gender</h5>
          <label>
            Male
            <input
              checked={gender === Gender.MALE}
              type="radio"
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="gender_female">
            Female
            <input
              checked={gender === Gender.FEMALE}
              id="gender_female"
              type="radio"
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="18">18</option>
            <option value="26">26</option>
            <option value="33">33</option>
          </select>
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export default SignUpForm;
