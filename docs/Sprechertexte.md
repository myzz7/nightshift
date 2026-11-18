# NIGHTSHIFT – Sprechertexte für den optionalen Voice-Pack

Die aktuelle `index.html` enthält bereits lokal erzeugte Soundeffekte, ein Audio-Menü, visuelle FX und optionale deutsche Ansagen über die Sprachsynthese des Geräts. Die ursprünglich integrierte Fang-Sprachaufnahme bleibt erhalten.

**Es müssen keine Aufnahmen erstellt werden, damit das Spiel funktioniert.** Die folgenden Texte dienen als Vorlage, falls später professionell eingesprochene Sprachdateien ergänzt werden sollen. Die Dateien sind **noch nicht** als separate MP3-Dateien eingebunden.

## Aufnahmestil
Ruhig, präzise, futuristisch und leicht wie eine Funkdurchsage. Jede Zeile einzeln ohne Musik und Soundeffekte aufnehmen; ungefähr 0,2 Sekunden Stille vor und nach der Ansage. Bevorzugt WAV, 48 kHz mono, alternativ hochwertiges MP3.

| Geplanter Dateiname | Auslöser | Sprechertext |
| --- | --- | --- |
| `preview.mp3` | Test / Intro | NIGHTSHIFT. Verbindung steht. Deine Mission beginnt. |
| `headstart.mp3` | Runner-Vorsprung | Runner, ihr habt Vorsprung. Verteilt euch und bleibt aufmerksam. |
| `start.mp3` | Jagdbeginn | Die Jagd beginnt. Hunter, ihr seid jetzt freigegeben. |
| `ping.mp3` | GPS-Positionssignal | Neues GPS-Signal. Die Karte wurde aktualisiert. |
| `radar.mp3` | Hunter-Radar | Hunter-Radar aktiviert. Achtung, Positionen sichtbar. |
| `bonus.mp3` | Halbzeit / Bonusziel | Halbzeit. Das Bonusziel ist jetzt aktiv. |
| `reward.mp3` | Bonus erreicht | Bonus gesichert. Zwei Runner-Pings bleiben verborgen. |
| `stealth.mp3` | Tarnung | Tarnung aktiviert. Deine nächsten Signale bleiben verborgen. |
| `capture.mp3` | Bestätigter Fang | Fang bestätigt. Verfügbare Standorte werden zehn Sekunden sichtbar. |
| `warning.mp3` | Fairplay-Warnung | Achtung. Prüfe deine Position und die Spielregeln. |
| `end.mp3` | Spielende | Zeit abgelaufen. NIGHTSHIFT ist beendet. |

**Hinweis zum Fang:** Die vorhandene Audioaufnahme ist bereits im HTML eingebettet. Eine neue `capture.mp3` ist daher optional.

## Optional, noch nicht für Audio-Dateien verdrahtet
- `countdown_5.mp3` bis `countdown_1.mp3`: „Fünf.“, „Vier.“, „Drei.“, „Zwei.“, „Eins.“
- `join.mp3`: „Ein neuer Spieler ist verbunden.“
- `wheel_win.mp3`: „Zufallsauswahl abgeschlossen.“

Bei einer späteren Einbindung der Aufnahmen sollten sich die Sprach- und Lautstärke-Einstellungen des Audio-Menüs weiterhin auf alle Ansagen auswirken.