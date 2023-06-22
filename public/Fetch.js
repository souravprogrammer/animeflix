self.onmessage = async function Fetch(e) {
  const url = e.data;
  try {
    const res = await fetch(url);
    const data = await res.json();
    self.postMessage(data);
  } catch (err) {
    self.postMessage(null);
  }
};
