let url = "http://localhost:3000/message";
const submitBtn = document.getElementById('submitBtn');

fetch(url).then((response) => {
  return response.json();
}).then((data) => {
  
});
