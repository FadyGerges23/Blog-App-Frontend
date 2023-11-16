import Cookies from 'js-cookie';

const {
    Environment,
    Network,
    RecordSource,
    Store,
  } = require('relay-runtime');
  
// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
    operation,
    variables
  ) {
    return fetch('http://127.0.0.1:5000/graphql', {
      method: 'POST',
      headers: Cookies.get('user') ? {
        // Add authentication and other headers here
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(Cookies.get('user')).token}`
      } : {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  }

  const source = new RecordSource();
  const store = new Store(source);
  const network = Network.create(fetchQuery);
  
  const environment = new Environment({
    network,
    store,
  });

  export default environment;