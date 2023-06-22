async function Call(url) {
  const data = await new Promise((resolve, reject) => {
    const worker = new Worker("Fetch.js");
    worker.onmessage = (e) => {
      resolve(e.data);
    };
    worker.postMessage(url);
  });
  return data;
}

export default Call;
