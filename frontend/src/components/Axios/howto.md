## Our configured axios instance

The base URL for this axios instance is dynamically configured using the `REACT_APP_DEVELOPMENT` environment variable. If running the backend locally, set that variable to whatever URL/port the server is listening to.

Have not been able to test authorization header, but it should automatically include the id token stored in localStorage as the authorization header if present.
