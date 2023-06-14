# React workshop

Denne workshopen består av flere oppgaver. De første oppgavene er de enkleste, men også de viktigste å mestre. Mye av koden som trengs for å klare oppgavene gis i starten, men dette blir det mindre av etterhvert i de senere oppgavene. Det er også oppfordret å prøve å løse oppgavene uten å se på kode-snuttene.

## Oppgave 1 - Lage counter-knapp med props

I denne oppgaven skal vi lage en `CounterButton` komponent, som skal brukes i `App.tsx` som har props for å lese og sette count. `App.tsx` skal da opptre som en container-komponent, og `CounterButton` komponenten opptrer som en state-less komponent.

1. Kjør `npm install` for å installere alle dependencies.

2. Lag en ny fil `CounterButton.tsx` og fyll inn boilerplaten for en ny React-komponent:

```jsx
import React from "react";

export const CounterButton: React.FC = () => {
  return <button>The count is {count}</button>;
};
```

3. Lag et `interface` som sier hvilke props `CounterButton` har:

```ts
interface Props {
  count: number;
  onClick: () => void;
}
```

4. Knytt det nye prop-interfacet til komponenten ved å endre `React.FC` til `React.FC<Props>`.

5. Ta imot de nye propsene som argumenter:

```jsx
export const CounterButton: React.FC<Props> = ({count, onClick}) => {
```

6. Kall `onClick` funksjonen som kommer inn som en prop når brukeren klikker på knappen:

```html
<button onClick="{onClick}">The count is { count }</button>
```

7. Bruk den nye komponenten i `App.tsx`:

```html
<CounterButton count="{count}" onClick="{increaseCount}" />
<CounterButton count="{count}" onClick="{increaseCount}" />
```

## Oppgave 2 - Lage counter-knapp med `useContext`

Denne oppgaven baserer seg på samme mål som i oppgave 1, men hvor vi heller skal bruke `useContext` for å holde på og distribuere state. Dette er et alternativt pattern til props og kan være en fin måte å administrate state når komponent-treet og/eller staten begynner å bli kompleks.

1. Lag en ny fil `CounterContext.ts` for å holde på konteksten:

```ts
import { createContext } from "react";

interface CounterState {
  count: number;
  onChange: () => void;
}

export const CounterContext = createContext<CounterState>({
  count: 0,
  onChange: () => {},
});
```

2. Bruk den nye contexten i `App.tsx`. Gjør dette ved å erstatte fragment-elementet (`<>`) som wrapper innholdet med `<CounterContext.Provider>` elementet.

3. Fyll ut `value` propen som er påkrevd på `CounterContext.Provider` elementet. Her vil vi da gi en referanse til `count` staten vi har, samt funksjonen vi allerede har for å øke count:

```jsx
<CounterContext.Provider value={{ count: count, onChange: increaseCount }}>
```

4. Fjern propsene `count` og `onClick` fra `CounterButton` elementet i `App.tsx`.

5. Bruk `useContext` hooken i `CounterButton.tsx` for å hente counter contexten:

```ts
const { count, onChange } = useContext(CounterContext);
```

## Oppgave 3 - Legge til knappe-styling

I denne oppgaven ønsker vi å øve på å style en React komponent, ved hjelp av CSS-moduler. Dette scoper CSSen til å kun fungere innenfor en komponent, og vil dermed forhindre at CSS ligger globalt i applikasjonen.

1. Legg til en ny css fil for `CounterButton`, kalt `CounterButton.module.css`.

2. Fyll inn CSS for knappen:

```css
.counterButton {
  border-radius: 8px;
  border: 1px solid var(--computas-primary);
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--computas-white);
  color: var(--computas-primary);
  cursor: pointer;
  transition: all 0.2s;
}

.counterButton:hover {
  background-color: var(--computas-primary);
  color: var(--computas-white);
}
```

3. Importer den nye CSS-filen i `CounterButton.tsx`:

```ts
import styling from "./CounterButton.module.css";
```

4. Bruk denne stylingen på knappen:

```jsx
<button onClick={onChange} className={styling.counterButton}>
```
