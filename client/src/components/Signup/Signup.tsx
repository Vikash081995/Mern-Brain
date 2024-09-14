const Signup = () => {
  return (
    <>
      <h1>Sign up</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="email">Email</label>
      <input id="email" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <label htmlFor="password">Password Repeat</label>
      <input id="passwordRepeat" type="password" />
      <button disabled>Sign up</button>
    </>
  );
};

export default Signup;
