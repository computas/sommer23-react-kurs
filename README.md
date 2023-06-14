# React workshop

Denne workshopen består av flere oppgaver. De første oppgavene er de enkleste, men også de viktigste å mestre.

## Oppgave 1 - Lage counter-knapp med props

I denne oppgaven skal vi lage en `CounterButton` komponent, som skal brukes i `App.tsx` som har props for å lese og sette count. `App.tsx` skal da opptre som en container-komponent, og `CounterButton` komponenten opptrer som en state-less komponent.

1. Kjør `npm install` for å installere alle dependencies.
2. Lag en ny fil `CounterButton.tsx` og fyll inn boilerplaten for en ny React-komponent:
``` jsx
import React from 'react';

export const CounterButton: React.FC = () => {
  return <button>The count is { count }</button>
}
```

3. Lag et `interface` som sier hvilke props `CounterButton` har:
``` ts
interface Props {
  count: number;
  onClick: () => void;
}
```

4. Knytt det nye prop-interfacet til komponenten ved å endre `React.FC` til `React.FC<Props>`.

5. Ta imot de nye propsene som argumenter:
``` jsx
export const CounterButton = React.FC<Props> = ({count, onClick}) => {
```

6. Kall `onClick` funksjonen som kommer inn som en prop når brukeren klikker på knappen:
``` html
<button onClick={onClick}>The count is { count }</button>
```

7. Bruk den nye komponenten i `App.tsx`:
``` html
<CounterButton count={count} onClick={increaseCount} />
<CounterButton count={count} onClick={increaseCount} />
```

## Oppgave 2 - Lage counter-knapp med `useContext`

Denne oppgaven baserer seg på samme mål som i oppgave 1, men hvor vi heller skal bruke en service for å holde på og distribuere count. Dette er et alternativt pattern til inputs/outputs og kan være en fin måte å administrate state når UIet og/eller staten begynner å bli kompleks.

1. Lag en ny service ved hjelp av CLIen: `ng g s counter`
2. Lag en ny komponent for knappen, hvis du ikke har gjort oppgave 1: `ng g c counter-button`
3. Lag en ny `BehaviorSubject` i `CounterService` som skal holde på `count`, og eksponer en `Observable` og en funksjon for å sette en ny count verdi.
4. Inject `CounterService` i knappe-komponenten, og kall på funksjonen for å sette ny count verdi når knappen klikkes på.
5. Inject `CounterService` i `AppComponent` og subscribe til `count` observablen. Vis deretter denne verdien i HTMLen.

## Oppgave 3 - Legge til breadcrumbs

I denne oppgaven ønsker vi å øve på å integrere med tredjeparts biblioteker, samt få en introduksjon til ELvia sitt designsystem.

1. Legg til [Elvia breadcrumbs](https://design.elvia.io/components/breadcrumb) på toppen av siden (se app.component.html for å se hvor den skal plasseres).

## Oppgave 4 - Transformere data

1. Lag din egen pipe for å transformere `count`. Count skal ganges med Pi og rundes av til 4 desimaler.

## Oppgave 5 - For den erfarne front-end utvikleren

1. Lag en ny feature-modul med routing og en korresponderende container-komponent: `ng g m count-display --routing && ng g c count-display`.
2. Lag en route til den nye feature-modulen i `app-routing.module.ts`, og lazy load den nye feature-modulen.
3. Inject `CounterService` i `CountDisplayComponent` og vis nåværende count.
4. Legg inn en `<router-outlet></router-outlet>` i `app.component.html` for å vise den nye routen.
