# auticad.github.io — Portfolio personale

Sito portfolio personale di Pietro Cammise — AI/ML Engineer specializzato in data analytics, automazioni Python e integrazione Claude AI.

Live: **[auticad.github.io](https://auticad.github.io)**

---

## Stack tecnologico

| Componente | Tecnologia |
|---|---|
| Markup | HTML5 |
| Stile | CSS3 (custom properties, grid, flexbox, keyframe animations) |
| Logica | JavaScript vanilla (ES6+) |
| Font | Space Mono + Syne — Google Fonts |
| Hosting | GitHub Pages |
| Dipendenze esterne | Nessuna — zero framework, zero librerie JS |

---

## Struttura del progetto

```
auticad.github.io/
├── index.html        # Homepage — hero, terminale animato, stats, tools strip
├── about.html        # Profilo, timeline, metodo di lavoro
├── projects.html     # Progetti filtrabili per categoria
├── skills.html       # Competenze con barre animate + certificazioni
├── contact.html      # Contatti e form di contatto
├── style.css         # Foglio stile condiviso (tutte le pagine)
└── main.js           # Animazioni, filtro progetti, form handler
```

---

## Avvio locale

Non richiede installazioni. Basta clonare e aprire il file.

**1. Clona il repository**
```bash
git clone https://github.com/Auticad/auticad.github.io.git
cd auticad.github.io
```

**2. Apri nel browser**
```bash
# Su Windows
start index.html

# Su macOS
open index.html

# Su Linux
xdg-open index.html
```

Il sito funziona direttamente da filesystem locale — nessun server necessario.

---

## Deploy su GitHub Pages

Il sito è servito automaticamente da GitHub Pages sul branch `main`.

**Configurazione:**
1. Settings del repository → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` · Folder: `/ (root)`
4. Salva — il sito è live su `https://auticad.github.io` in ~60 secondi

Ogni push su `main` aggiorna il sito automaticamente.

---

## Personalizzazione

| File | Cosa modificare |
|---|---|
| `index.html` | Nome, descrizione hero, stats, tools strip |
| `about.html` | Profilo, timeline, metodo di lavoro |
| `projects.html` | Aggiungere/rimuovere project card, categorie filtro |
| `skills.html` | Barre skill (attributo `data-w`), certificazioni |
| `contact.html` | Email, link social, opzioni form |
| `main.js` | Righe del terminale animato, logica filtri |
| `style.css` | Palette colori (variabili CSS in `:root`) |

---

## Contatti

Pietro Cammise · [pietro_cam@hotmail.com](mailto:pietro_cam@hotmail.com) · [linkedin.com/in/pietrocammise](https://linkedin.com/in/pietrocammise) · [github.com/Auticad](https://github.com/Auticad)

---

## Licenza

MIT — vedi [LICENSE](LICENSE)
