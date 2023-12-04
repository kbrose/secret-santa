![](/assets/banner.png)

# Super Simple Secret Santa

## How to

1. Go to https://kbrose.github.io/secret-santa/
2. List the participants, with commas between each name, like "Rudolph, Dasher, Comet"
3. Click "Create assignments"
4. Send each person their unique link, telling them who they are buying a gift for.

## How it works

* The input names are shuffled, with care taken to ensure no one is matched with themselves.
* The gifter and giftee are concatenated and base64 encoded into a URL
* Javascript on the landing page (`/w.html`) unpacks and displays the gifter/giftee messsage

## Attributions

* Credit for the implementation idea goes to https://github.com/arcanis/secretsanta
  * It's the same idea, but with fewer features and using base64 rather than an actual encryption scheme.
* Banner image made by my partner.
