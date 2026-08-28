# vivacoconutgrove.com

Sito vetrina di **Viva** — Azimut Verve 48, ormeggiata a Coconut Grove, Miami.

Sito statico: nessun build, nessuna dipendenza da installare. Si apre
`index.html` e funziona.

## Struttura

```
index.html              pagina unica (IT/EN nello stesso markup)
assets/css/style.css    tutto lo stile + il blocco PHOTO SLOTS
assets/js/site.js       lingua, menu mobile, animazioni (opzionali)
assets/img/favicon.svg  monogramma V
assets/photos/          le foto vere — vedi il README lì dentro
CNAME                   dominio per GitHub Pages
```

## Aggiungere le foto

Basta copiare i file in `assets/photos/` con i nomi elencati in
[`assets/photos/README.md`](assets/photos/README.md). Il sito li usa
automaticamente; finché non ci sono, restano i placeholder dipinti (il mare
all'alba in apertura è un disegno SVG, non una foto stock).

## Cose da personalizzare

| Dove | Cosa |
| ---- | ---- |
| `index.html` → sezione `#contact` | l'indirizzo è un segnaposto: `hello@vivacoconutgrove.com`. Sostituiscilo con la casella vera prima di mettere il sito online. |
| `index.html` → `#routes` | distanze e tempi sono stime a 30 nodi da Dinner Key, da correggere con i tuoi tempi reali. |
| `assets/css/style.css` → `:root` | palette (blu notte + ottone) e font. |

## Anteprima locale

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Pubblicazione

**GitHub Pages** — Settings → Pages → Source: `Deploy from a branch`, branch
`main`, cartella `/ (root)`. Il file `CNAME` punta già a
`vivacoconutgrove.com`; sul DNS del dominio servono i record A verso
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
(e un CNAME `www` → `CIROCAMP.github.io`).

**Vercel / Netlify** — importa il repo, framework `Other`, build command vuoto,
output directory `.`.

## Dati tecnici

Le specifiche in pagina sono quelle dichiarate dal cantiere per il modello
Verve 48 (15,03 m f.t., 3 × Mercury Verado 600 hp, 50 nodi max, 37 di crociera,
2.340 l di carburante, 2 cabine / 4 posti letto, carena SVVT di Michael Peters
Yacht Design, design Francesco Struglia). Sono dati di modello, non della
singola unità: se la tua barca ha un allestimento diverso, correggi la tabella
in `#specs`.
