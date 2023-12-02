function submitNames() {
  var value = document.getElementById('names').value;
  var names = value.split(',').map((s) => s.replace(/\s/g, ""));
  links = document.getElementById("links");

  if (names.length <= 1) {
    links.innerHTML = "At least two names required."
    return
  }

  if (hasDuplicates(names)) {
    links.innerHTML = "Duplicate names not supported."
    return
  }

  var newNames = names.slice();
  while (shareEntry(names, newNames)) {
    shuffleArray(newNames);
  }

  var linkStub = window.location.origin + window.location.pathname + "w#";

  var maxLen = Math.max(...names.map((n) => n.length));

  links.innerHTML = names.map(
    (gifter, i) => {
      var link = composeLink(linkStub, gifter, newNames[i], maxLen);
      return "<li>" + gifter + ": <a href=\"" + link + "\">" + link + "</a></li>"
    }
  ).join("\n");
}

function composeLink(stub, gifter, giftee, maxLen) {
  gifter = gifter.padStart(maxLen);
  giftee = giftee.padStart(maxLen);
  return stub + bytesToBase64(new TextEncoder().encode(gifter + "," + giftee))
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString).replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, '');
}

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

document.addEventListener("DOMContentLoaded", function (event) {
  submitNames();
});
