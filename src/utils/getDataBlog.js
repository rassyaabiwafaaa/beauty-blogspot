export async function getData() {
  const response = await fetch("https://gorest.co.in/public/v2/posts");
  const data = await response.json();
  setData(data);
}
