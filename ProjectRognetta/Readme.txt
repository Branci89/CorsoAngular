Per usare questo progetto Angular è necessario attivare un Server NodeJS
con un DataBase Oracle (consigliata versione 11g express).

1. Importare lo script vetture.sql presente nella cartella SQL.

2. Installare NodeJS e Angular.

3. Copiare le due cartelle node-ws-vetture e ng-vetture sul proprio PC.

4. Aprire un terminale che punta alla cartella node-ws-vetture ed eseguire 'npm install' e poi 'node server.js'.

5. Verificare sul browser all'indirizzo 127.0.0.1:3000 se il server risponde.

5. Aprire un secondo terminale che punta alla cartella ng-vetture ed eseguire 'npm install' e poi 'ng serve'.

A questo punto è possibile usare l'applicazione.
Può essere necessario cambiare gli indirizzi ip usati
nei Service 'brand-service.ts' e 'model-service.ts'
presenti nel progetto Angular.
Eseguendo 'npm install' potrebbe succedere che vengano
fuori delle vulnerabilità; se così fosse digitare 'npm audit fix'
per risolverle (come suggerito nello stesso terminale).
