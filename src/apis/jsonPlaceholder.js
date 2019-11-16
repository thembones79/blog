

const jsonPlaceholder = async (endpoint) => {
  const url = new URL(`https://jsonplaceholder.typicode.com${endpoint}`);
  const params = {};
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method: "get",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

  const data = await response.json();

  return data;
};

export default jsonPlaceholder;
