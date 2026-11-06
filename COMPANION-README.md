# Pokémon companion revision

The current `dist/index.html` has direct personal copy, the Training Arcs / Side Stories / Behind the Character sections, and a pixel Pikachu companion from PokeAPI. The former generated illustration is no longer referenced or included in the Pokémon download. The original block website remains separate and unchanged.

Open http://127.0.0.1:4174 while the local preview server is running. To restart, run `python -m http.server 4174 --directory dist` from this folder.

`companion.css` controls the visual update. `companion.js` controls pointer following, greeting, resting, and idle behavior. Following starts off on touch devices and for reduced-motion preferences. The Say hi and Following controls are keyboard-accessible. No sound, tracking, or external character asset requests.

The earlier anime ZIP is retained separately. The current download is `avyya-pokemon-website.zip`.

