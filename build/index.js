
const showContent = () => {
  document.querySelectorAll('.loader').forEach( wave => {
    wave.style.display = "none";
  })
  document.getElementById('save').style.display = "";
}
setTimeout(showContent, 2000);
