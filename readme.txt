Šesti projekt iz Web2

###########################################################################

Adresa web-aplikacije: https://simple-task-f48n.onrender.com

###########################################################################

Ako se želi projekt pokrenut lokalno,  preko terminala se treba smjestiti
u direktorij projekta te se trebaju izvršit sljedeće naredbe:
npm install (samo jednom)
npm run dev

###########################################################################

1. interpolation/one-way binding
  - Da
  - src/views/TaskList.vue, :18

2. two-way binding
  - Da
  - src/views/TaskList.vue, :3, :17

3. methods
  - Da
  - src/App.vue, :34
  - src/components/BackroundToggler.vue, :8
  - te većina metoda se koristi u template src/view/TaskList.vue u template elementu

4. computed properties
  - Da
  - src/store/taskStore.js, :10

5. barem jedan scoped style
  - Da
  - src/views/HomePage.vue, :15
  - src/views/TaskList.vue, :48
  - src/views/NotFound.vue, :16
  - src/components/BackroundToggler.vue, :17

6. koristiti barem jedan lifecycle hook
  - Da
  - src/views/TaskList.vue, :37
  - watch funkcija se koristi kao lifecycle hook da se vide bilokakve promjene u taskStore.tasks

7. routing (više stranica)
aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
dinamičko usmjeravanje s 404 stranicom ("catch all")
  - Djelomično
  - src/router/index.js, skoro sve unutra je vezano za ovu funkcionalnost
  - govorim djelomično jer preko deploya se ne mogu pristupiti stranicama koje nisu root preko bookmarka, lokalno ovo nije problem
  - isto vrijedi i za 404 stranicu, radi lokalno, ali i ne na deployu

8. (barem) dvije komponente
  - komponenta bez stanja, koristiti properties
  - Djelomično jer ne koristi properties
  - src/views/HomePage.vue i src/components/BackgroundToggler.vue

  - komponenta sa stanjem
  - Da
  - src/views/TaskList.vue

9. barem jedna komponenta mora emitirati barem jedan event
  - Da
  - src/components/BackgroundToggler.vue, :10

10. store (Pinia)
  - Da
  - src/store/taskStore.js, :3
  - store se brine o zadacima i njihovim stanjima

11. asinkroni dohvat podataka s backenda, možete:
koristiti Firebase ili Back4App, Mocky, itd.
vlastiti storage, ili
možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)
  - Djelomično
  - src/store/taskStore.js, :40, :43
  - u funkciji saveTasks i loadTasks koristim mock koji se koristi manipulaciju podataka
  - src/router/index.js, :2, :3, :4
  - tu se ostvaruje lazy pozivanje potrebnih stranica/komponenti
  - ostalo nije implementirano
