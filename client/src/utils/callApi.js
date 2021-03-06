const callApi = async (collectionEndpoint) => {
  let response = await fetch(`/api?collectionEndpoint=${collectionEndpoint}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export default callApi;