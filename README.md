OPPGAVE 3: API

Jeg har bestemt meg for å gå for denne api adressen:

https://api.tvmaze.com

Dette er en api som har info om tv serier.

Den oppfyller kravene med flere endepunkter blant annet gjennom dens hoved api

https://api.tvmaze.com/shows(Som er en stor liste over alle TV seriene de har)

Her kan jeg legge til flere parameter, hvor hovedparameteret vil være :id

ved å søke (https://api.tvmaze.com/shows/:id) f.eks https://api.tvmaze.com/shows/1

vil jeg få info om TV serien med id 1, i dette tilfellet "under the dome", jeg vil bruke denne tv serien som eksempel fra nå av.

her kan jeg legge til flere endepunkter som

https://api.tvmaze.com/shows/1/episodes

som vil gi en liste over episoder

https://api.tvmaze.com/shows/1/cast

som gir en oversikt over skuespillere i TV serien, rangert etter størrelsen/viktigheten på rollen

Den aksepterer også parameter i i URL blant annet ved

Det er også https://api.tvmaze.com/search/shows?q=QUERY (som lar deg søke etter tv serier under QUERY hvis du kan navnet på serien)

og

Uformingen:

Har valgt å putte search funksjonen inni header elementet og gjøre main til container
