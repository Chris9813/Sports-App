const baseUrl = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";

const fetchSinToken = (endPoint:string, data:any, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/api/endpoint

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-api-key": `l2pm2JpvCY4FR1FwQbGb33Qu1wJhZwDH9BlrkcdZ`,
      },
      body: JSON.stringify(data),
    });
  }
};

export { fetchSinToken };
