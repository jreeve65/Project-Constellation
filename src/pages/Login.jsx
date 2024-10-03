import React, { useState } from "react";
// -- Commented out email Validation -- Do we want to keep browser default email validation or have our own validation?
// const validateEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

export default function Login() {
  // --Define state to catch the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // --const [error, setError] = useState("");

  // --Handle submission
  const handleSubmit = (event) => {
    // --Prevents page reload
    event.preventDefault();

    // --Validate Email
    // if (!validateEmail(email)) {
    //   setError("Please enter a valid email address");
    //   return;
    // }

    // --Testing purposes
    console.log("Email:", email);
    console.log("password:", password);
    // setError("");
  };

  return (
    <>
      <div className="login-container flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-Black-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-Black-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email" // -- Changing type to text means we use our own validation -- leaving it as is is default browser validation
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-Black-900 shadow-sm ring-1 ring-inset ring-Black-300 placeholder:text-Black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="form-group flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-Black-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-Black-900 shadow-sm ring-1 ring-inset ring-Black-300 placeholder:text-Black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-Black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-Black-500">
            Not a member?
            <br />
            <a
              href="#"
              className="font-semibold leading-6 text-black hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
