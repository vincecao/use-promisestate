## useAppearance

A Hook with its Provider allows you to read or override current os appearance preference. 

The hook uses [Window.matchMedia() API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) to detect and modify user appearance preference setting for the project. 

A `light` and `dark` class will be added into the html tag once user appearance preference changes. A localstorage `@@appearance@@` key will be stored for user appearance preference, which overrides the appearance for next time this user visit.


```tsx
import { useAppearance, AppearanceProvider } from '@vincecao/use-tools';

type UseAppearance = {
  osAppearance: Appearance | null;
  appearance: Appearance;
  onAppearanceToggle: () => void;
  onAppearanceResetToOs: () => void;
};

// Wrap your entire app or target children component inside appearance provider
<AppearanceProvider>
  <App />
</AppearanceProvider>

// Access current appearance and osAppearance, function onAppearanceResetToOs and onAppearanceToggle by useAppearance hook
const useAppearanceValue = useAppearance<UseAppearance>();
```
