function base64ToBytes(base64) {
  const binString = atob(base64.replace('_', '/').replace('-', '+'));
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function main() {
  var gifter
  var giftee
  [gifter, giftee] = new TextDecoder().decode(base64ToBytes(document.location.hash.split("#")[1])).split(",")
  gifter = gifter.trim();
  giftee = giftee.trim();
  document.getElementById("who").innerHTML = "Hello, " + gifter + "! You are buying a gift for " + giftee + ".";
}

document.addEventListener("DOMContentLoaded", function (event) {
  main();
});
