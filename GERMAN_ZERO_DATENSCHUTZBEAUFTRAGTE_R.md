# DSB informieren, was wir vorhaben

https://mb-datenschutz.de/

- Browserspiel, erreichbar unter klimakanzler.in
- technisch wir eine einzelne statische Seite geladen und das Spiel läuft dann lokal im Browser
- die statische Seite und andere Assets (Bilder, JS-Datei) wird von German Zero auf dem bestehenden System gehostet (openresty/nginx)
  (als Zulieferer liefern wir die statischen Dateien als zip-Datei an GermanZero, betreiben KEIN eigens Hosting)
- Das Spiel ist Cookiefrei und man kann auch keine personenbezogenen Daten eingeben.
- Impressum und Datenschutzschutzerklärung verlinken wir zu den GermanZero.de Seiten. (okay?)
- wir wollen einzelne Ereignisse im Spiel tracken (z.B. wieviele Besucher\*innen starten das Spiel und wieviele beenden es; wobei uns nur die Anzahl interessiert, keine Zuordnung zu einzelnen Personen)
  - soweit ich sehe, nutzt GZ zurzeit Google Analytics
  - GA wollen wir im Spiel nicht nutzen, weil GA Cookies setzt und wir um Einwilligung bitten müssten
  - wir wollen eine Tracking-Lösung einsetzen, die DSGVO-kompliant (auch nach Schrems II) ist und keine Cookies setzt
    - Fathom v3 https://usefathom.com/v3 erfüllt die Anforderungen
    - GZ owned den Fathom account!
    - Fathom muss dann sicherlich in die Datenschutzerklärung mit aufgenommen werden
      - Vorschlag: ""

# GZ-IT absprechen

- Fathom-Account

  - wer kann den einrichten, Kreditkarte nötig, Kosten bewilligen?
  - einrichten und uns am besten einen Gastuser einrichten

- Hosting

  - nginx sites (www.klimakanzler.in und klimakanzler.in) (hoffentlich wenig Aufwand)
  - mit SSL
  - außer die index.html, alles maximal cachen (1Jahr) - Dateien sind alle
  - einige Male eine zip-Datei rüberschmeißen (reicht - denke ich - für kurzfristige Kampagne, Spiel wird nicht langfristig weiterentwickelt)

- Info zum DSB koordinieren

## nicht zwingend:

- Domain klimakanzler.in so lassen (Michas) oder umziehen?

- Sourcecode irgendwohin spiegeln? Git repository? oder zip-Datei?
