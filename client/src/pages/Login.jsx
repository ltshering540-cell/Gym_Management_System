import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter your email and password");
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <p>Welcome back to the Gym Management System.</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
    </section>
  );
}

export default Login;