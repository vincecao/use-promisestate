## useAppearance

A Hook allows you to read os appearance and update website class preference.

The hook uses [Window.matchMedia() API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) to detect and modify user appearance preference setting for the project. 

A `light` and `dark` class will be added into the html tag once user appearance preference changes. A localstorage `@@appearance@@` key will be stored for user appearance preference, which overrides the appearance for next time this user visit.


```tsx
import { useAppearance } from '@vincecao/use-tools';
const { appearance, toggleAppearance, resetAppearance } = useAppearance();
```
