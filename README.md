<img alt="Kewin Marchand" align="right" width="200" height="200" src="public/images/me.jpg">

# Kewin Marchand
## Développeur front-end React / TypeScript
### Accessibilité numérique & qualité web

#### Vauvenargues, Provence-Alpes-Côte d'Azur — ouvert au télétravail

Huit ans de développement front-end, l'essentiel en **React** et **TypeScript**. Refonte d'une
plateforme e-commerce à fort trafic (Retail Renault Group) en Next.js / React / TypeScript :
architecture modulaire, design system de plus de 40 composants, suites de tests end-to-end.
Habitué à cadrer avec le produit, le design et la QA avant d'écrire la première ligne.

Spécialisé dans l'**accessibilité numérique (RGAA)**, la **qualité web** et les **tests
automatisés**. Reconverti du paysagisme au développement web en 2017, après un titre professionnel
Designer web que je suis revenu enseigner à l'AFPA l'année suivante.

---

## Compétences

| | |
|---|---|
| **Langages** | TypeScript · JavaScript / ES6+ · HTML5 · CSS3 / SCSS |
| **Frameworks & bibliothèques** | React · Next.js · Redux Toolkit · React Query · GraphQL · MUI · Tailwind · Vue 3 / Nuxt · Svelte |
| **Architecture & qualité** | Micro-frontends · Design system · Rendu serveur (SSR / RSC) · Tests e2e (CodeceptJS) · Revue de code · WCAG / RGAA · Core Web Vitals · Lighthouse |
| **Outils & back-end** | Git · Docker · Node.js · Figma · Symfony / API Platform |
| **Méthodes** | Agile / Scrum · Accompagnement d'équipe · Développement assisté par IA (Claude Code) |

Le détail ci-dessous décrit une pratique effective, mesurée sur la production réelle des huit
dernières années — pas une liste de technologies croisées.

### Front-end — cœur de métier

| | |
|---|---|
| **React** | Pratique quotidienne depuis 2018. Composition, hooks, découpage de responsabilités, mémoïsation uniquement quand elle est mesurée |
| **Next.js** | App Router, Server Components, frontière serveur/client, stratégies de cache et de revalidation, `next/image`, `next/font` |
| **TypeScript** | `strict` sans `any`, types générés depuis un schéma OpenAPI plutôt qu'écrits à la main, unions plutôt qu'enums |
| **Vue.js, Svelte** | Projets livrés en production sur les deux |
| **CSS, Sass, MUI, CSS-in-JS** | Mobile-first, intégration pixel-perfect depuis Figma sur tous les points de rupture, thème multi-marques |
| **Design system** | Conception et maintenance d'un système d'**une quarantaine de composants** encapsulant la librairie tierce, pour isoler l'application de ses changements d'API |
| **État & données** | Redux Toolkit, React Query, `redux-persist`, client typé `openapi-fetch` |
| **HTML, Twig, Stimulus, Symfony UX** | Intégration côté Symfony |
| **React Native** | Une application mobile livrée et publiée sur le Play Store |

### Accessibilité numérique — spécialité

| | |
|---|---|
| **RGAA 4.1** | **Quatre audits livrés**, dont un **audit complet sur les 106 critères** : taux de conformité mesuré, liste des non-conformités, plan de remédiation priorisé, chiffrage en jours, benchmark sectoriel |
| **WCAG 2.1 AA** | Conformité tenue au fil du développement plutôt que rattrapée en fin de cycle |
| **Pratique** | Sémantique HTML, ARIA employé à bon escient, gestion du focus et focus trap, ordre de tabulation, contrastes, navigation clavier, restitution lecteur d'écran |
| **Cadre légal** | Loi du 11 février 2005, loi du 7 octobre 2016, décret n° 2019-768, European Accessibility Act, déclaration d'accessibilité et schéma pluriannuel |

### Qualité, tests et performance

| | |
|---|---|
| **Tests end-to-end** | Conception de l'architecture de test autant que son écriture : **plus de 250 scénarios**, **quelques milliers de pas Gherkin**, près de 150 définitions de pas minces, une douzaine de modules d'actions typées, stack de test isolée reconstruite à chaque exécution, couverture des rendus conditionnels en présence **et** en absence |
| **CodeceptJS, Gherkin, Playwright** | |
| **Core Web Vitals** | LCP, CLS, INP : mesure, arbitrage, chargement à la demande des librairies tierces, audits Lighthouse automatisés à chaque livraison |
| **Recette technique** | Recettes priorisées en MoSCoW, checklists de mise en production renseignées |
| **SEO technique** | `hreflang`, canoniques, données structurées, `robots.txt`, `sitemap.xml`, en-têtes `X-Robots-Tag`, hiérarchie de titres |
| **Analytics** | Plans de mesure GA4 et leur contrôle qualité, Matomo, gestion du consentement |

### Architecture et pratiques d'équipe

| | |
|---|---|
| **Revue de code** | **Près d'un millier de revues** de pull requests et de merge requests, sur **une trentaine de développeurs** — dont des prestataires externes et des développeurs côté client |
| **Décisions d'architecture** | **Une trentaine d'ADR** rédigées : architecture hexagonale par domaine, règles d'isolation opposables, injection de dépendances, frontière serveur/client explicite |
| **Documentation technique** | une soixantaine de documents maintenus dans le dépôt — conventions, cache, thème, tests, médias, exceptions |
| **Git** | plus de 1 200 pull requests et autant de merge requests créées, GitHub et GitLab |
| **Environnement** | Docker, Docker Compose, Makefile de pilotage, CI (lint, contrôle de types, tests), Sentry |
| **CMS & back-office** | Builder.io, WordPress, Sonata, React Admin, Djust (e-commerce B2B) |
| **Back-end consommé** | Symfony, API Platform, REST, GraphQL — je consomme et j'intègre des back-ends dont je lis le code sans les écrire |

### Développement assisté par IA

Pratique quotidienne de **Claude Code**, outillée plutôt qu'improvisée :

| | |
|---|---|
| **Contexte projet versionné** | Stack, conventions et décisions d'architecture écrites dans le dépôt et chargées à chaque session — l'assistant travaille contre la documentation du projet, pas contre des suppositions |
| **Agents dédiés** | Un agent d'implémentation qui cadre contre la doc et les ADR avant d'écrire, un agent de relecture en lecture seule, un agent de recette qui joue la suite end-to-end et interprète les sorties |
| **Skills et commandes** | Automatisation des tâches récurrentes du projet |
| **Hooks de contrôle** | Vérifications avant commit, pour que rien ne parte sans lint, contrôle de types et tests |

L'intérêt n'est pas d'écrire plus de code, c'est d'en **relire et d'en vérifier davantage** : la
revue, les tests et la conformité sont les endroits où le gain est réel.

### Ce que je ne fais pas

Modélisation de bases de données et SQL, administration système, développement back-end.

---

## Réalisations

Une quarantaine de projets clients, **près de 1 500 tickets** traités sur **une trentaine de comptes** entre 2018 et 2026.
Sélection par nature de projet.

### Plateformes e-commerce et configurateurs

**[Retail Renault Group](https://www.retail-renault-group.fr/)** — Groupe Renault
> Plateforme de vente de véhicules neufs, d'occasion et de démonstration pour un réseau
> multi-concessions : recherche à facettes, fiches produit, tunnel d'achat en ligne, dépôt
> d'acompte, simulateur de financement, reprise, prise de rendez-vous atelier, comptes clients,
> localisateur de concessions.
>> **Refonte complète** de l'application : suppression d'Angular, réécriture des stores et
>> contrôleurs JavaScript, migration vers **Next.js App Router / React 19 / TypeScript** adossé à
>> une API Symfony / API Platform. Architecture en **une vingtaine de domaines fonctionnels** et autant de briques
>> transverses, design system d'une quarantaine de composants, thème multi-marques, suite de plus de 250 scénarios de
>> tests end-to-end, conformité RGAA et suivi des Core Web Vitals à chaque livraison.
>> **Premier contributeur du dépôt**, avec un peu plus d'un commit sur cinq.

**[Sodicam²](https://sodicam2.fr/)** — Groupe Renault
> Distribution de pièces, accessoires et services après-vente automobile.
>> Intégration et développement Twig, Sass, JavaScript.

**[Dépamoto](https://depamoto.com/)**
> Vente en ligne de motos et de pièces détachées.
>> Intégration Twig et Vue.js.

**[Quartier des Jantes](https://www.quartierdesjantes.com/) et [Jantes et Pneus](https://www.jantesetpneus.com/)**
> E-commerce de jantes et pneumatiques, avec configurateur de compatibilité véhicule.
>> Intégration et développement, maintenance évolutive sur plusieurs années.

**Plateformes B2B Djust** — Fleury Michon, Socoda, Monoprix, Codeal
> Portails de commande B2B adossés à la solution e-commerce Djust : catalogues, comptes
> multi-acheteurs, cinématiques de commande, back-offices.
>> Intégration et développement React et TypeScript sur les applications front.

### Sites vitrines et institutionnels

**[DHL Express France](https://www.dhlexpress.fr/)**
> Site du transporteur express.
>> Intégration, maintenance, **audit RGAA** et **recommandations techniques** (montées de version
> majeures PHP et Symfony, correctifs issus de tests d'intrusion, mise en conformité RGPD).

**[Oreca Events](https://oreca-events.com/) · Oreca Group · Driving Center · [Alpine](https://www.alpinecars.fr/)**
> Sites du groupe Oreca (sport automobile, événementiel, stages de pilotage) et pages produit du
> constructeur Alpine, dont des pages immersives animées au défilement.
>> Intégration et développement Next.js, React, Framer Motion. Cadrage fonctionnel et recette
>> technique SEO sur le projet Oreca Experience.

**[Facets](https://facets.fr/)** · **[Kering Foundation](https://www.keringfoundation.org/)** · **[AD13](https://comites-feux.com/)** · **[Guira FM](https://www.guirafm.com/)** · **[Aerokart](https://www.aerokart.com/)** · **[Eiffage](https://www.eiffage.com/)** · **[SPK](https://www.spk-conseil.fr/)** · **AA Biomasse** · **Elyse Technology** · **Pharmaspaces** · **Milano Design** · **Yekrak** · **Uniskip** · **[Les soirées de Saint Marc](https://lessoireesdesaintmarc.fr/)**
> Sites vitrines et institutionnels, dont plusieurs multilingues.
>> Intégration et développement selon les projets : React, Next.js, Vue.js, Svelte, Twig, Sass,
>> JavaScript. Back-offices Builder.io, WordPress, Sonata.

### Applications et back-offices

**[RRG RH](https://jobsfrance.renaultretailgroup.com/)** — Groupe Renault
> Site de recrutement : consultation des annonces, dépôt de candidatures, back-office de gestion.
>> Intégration et développement Twig, Sass et Vue.js, puis refonte.

**[Datagora](https://datagora.fr/) et [Datagora mobile](https://play.google.com/store/apps/details?id=com.datagora)**
> Fil d'actualité de dépêches synthétiques restituant les résultats clés de publications
> statistiques et de recherche.
>> Intégration et développement React et **React Native**.

**Montaclair ADR**
> Application tablette et back-office pour des audits terrain : création de dossiers, formulaires
> de saisie hors ligne, circuit de validation client.
>> Cadrage fonctionnel, intégration et développement.

### Accessibilité et conformité

**Audit RGAA complet — fournisseur de solutions de paiement**
> Audit de conformité sur les **106 critères du RGAA 4.1** d'un parcours de saisie de code
> confidentiel : taux de conformité mesuré, non-conformités relevées et qualifiées, benchmark de
> conformité du secteur bancaire, cible argumentée, plan de remédiation priorisé et **chiffrage en
> jours**, puis mise en conformité.

**Trois audits RGAA complémentaires** — transport express, secteur bancaire, section applicative
> Relevés d'écarts classés par famille (HTML, styles, JavaScript), plans de modifications
> priorisés, préconisations de correction avec impact utilisateur et textes de référence.

---

## Parcours

### 💻 Développement web

- **08/2018 → 2026** — **Développeur front-end**, en charge de la revue du code de l'équipe et des
  prestataires *(PURJUS Communication, Vauvenargues)*. Agence digitale indépendante spécialisée dans
  le développement sur-mesure. CDD puis CDI ; statut ETAM puis cadre.
- **09/2017 → 08/2018** — **Formateur infographiste multimédia** *(AFPA, centres du Pontet et de
  Salon-de-Provence)*. Animation et suivi des stagiaires sur la formation certifiante « Web
  designer » — environ 1 260 heures, 8 modules, une soixantaine de séances : intégration web,
  CMS, design graphique.
  C'est la formation que j'avais suivie et validée l'année précédente.
- **02/2017 → 09/2017** — **Intégrateur web** *(Agence Hors Pistes)*.

### 🌳 Paysagisme

- **09/2015 → 01/2017** — **Graphiste, dessin de plans** *(Star's Jardin)*. Conception et dessin de
  projets d'aménagement — c'est par là que le métier du numérique a commencé.
- **05/2015 → 08/2015** — **Vendeur conseil jardinerie** *(Botanic)*.
- **10/2011 → 03/2013** — **Ouvrier paysagiste** *(Les Jardins Sestian)*.
- **07/2010 → 03/2011** — **Ouvrier paysagiste** *(Maniebat)*.
- **2005 → 06/2010** — **Jardinier-paysagiste** *(particuliers employeurs, CESU)*.
- **09/1999 → 06/2005** — **Apprenti paysagiste** *(Jardin Vert, Mondouzil)*, pendant le BEPA, le
  Bac professionnel et le BTSA.

## Formation

- **2016-2017** — **Designer web**, AFPA Le Pontet. Titre professionnel de niveau III, **niveau 5
  du cadre européen**, environ 1 260 heures. Obtenu le 11/05/2017. Modules : design graphique d'outils de
  communication numérique, intégration et publication de pages web, contenus interactifs et
  dynamiques, sites avec CMS.
- **2014-2015** — *Les énergies renouvelables d'aujourd'hui et de demain*, IRFEDD (400 heures).
- **2014** — **Dessin assisté par ordinateur (DAO)**, GRETA — certificat de compétences.
- **2003-2005** — **BTSA Aménagement de l'espace paysager**, en apprentissage — CFPPA / EPL
  agricole d'Auzeville-Tolosane (31).
- **2001-2003** — **Baccalauréat professionnel Aménagements paysagers**, en apprentissage — même
  établissement.
- **1999-2001** — **BEPA Travaux paysagers**, en apprentissage — même établissement.

### Autoformation continue

Une vingtaine de certificats OpenClassrooms, dont le parcours complet **Intégrateur web** : HTML5 et
CSS3, découpage et intégration de maquette, JavaScript, jQuery, Node.js, Git et GitHub, WordPress,
Bootstrap, Illustrator, Python, algorithmique, design thinking, posture d'agilité. Certifications
Google *Digital Active* et *Ateliers Numériques*.

---

## Distinctions

- **2005** — **Prix de l'apprentissage Midi-Pyrénées**, Conseil général de Midi-Pyrénées et CFPPA
  d'Auzeville-Tolosane, pour l'apprentissage effectué chez Jardin Vert (Mondouzil, 31).

---

## Langues

- **Français** — langue maternelle
- **Anglais** — lecture de documentation technique, pas de conversation
- **Espagnol** — intermédiaire

---

## Divers

Permis B · Passionné par la botanique

---

## Contact

[LinkedIn](https://www.linkedin.com/in/kewin-marchand/)
