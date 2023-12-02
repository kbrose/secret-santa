function base64ToBytes(base64) {
  const binString = atob(base64.replace('_', '/').replace('-', '+'));
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function main() {
  var name = new TextDecoder().decode(base64ToBytes(document.location.hash.split("#")[1])).split(",")
  document.getElementById("who").innerHTML = name;
}

main()

// Usage
// bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
// new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
