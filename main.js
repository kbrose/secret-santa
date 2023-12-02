function submitNames() {
  var value = document.getElementById('names').value;
  var names = value.split(',').map((s) => s.replace(/\s/g, ""));
  links = document.getElementById("links");

  if (names.length <= 1) {
    links.innerHtml = "At least two names required."
    return
  }

  var newNames = names.slice();
  while (shareEntry(names, newNames)) {
    shuffleArray(newNames);
  }

  var linkStub = "localhost:8000/who.html#"

  links.innerHTML = names.map(
    (s, i) => "<li>" + s + ": " + linkStub + bytesToBase64(new TextEncoder().encode(newNames[i])) + "</li>"
  ).join("\n");
}

function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString).replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, '');
}

// Usage
// bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
// new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"

function shareEntry(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true
    }
  }
  return false
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

submitNames()
