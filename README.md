# Min Kalkylator med Tester

Det här är min kalkylator som jag byggt med Vite och testat med Vitest. Den kan göra basic mattematik som:
- Plus
- Minus
- Gånger
- Delat med

## Hur man installerar

1. Ladda ner projektet
2. Kör det här i terminalen för att få alla paket som behövs:
```bash
npm install
```

## Köra Testerna

För att kolla så allt funkar, kör:
```bash
npm test
```

## Vad den kan göra

Kalkylatorn har dessa funktioner:
- `add(a, b)` - Plussar ihop två tal
- `subtract(a, b)` - Tar minus mellan två tal
- `multiply(a, b)` - Gångrar två tal
- `divide(a, b)` - Delar två tal (funkar inte om man delar med noll)

Jag har gjort tester för varje funktion så man kan se att dom funkar som dom ska. 