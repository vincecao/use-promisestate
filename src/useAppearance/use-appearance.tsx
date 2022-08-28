import type { ReactNode, ReactElement } from 'react';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export enum Appearance {
  DARK = 'dark',
  LIGHT = 'light',
}

type UseAppearance = {
  osAppearance: Appearance | null;
  appearance: Appearance;
  onAppearanceToggle: () => void;
  onAppearanceResetToOs: () => void;
};

const DEFAULT_USE_APPEARANCE = {
  osAppearance: null,
  appearance: Appearance.LIGHT,
  onAppearanceToggle: () => { },
  onAppearanceResetToOs: () => { },
}

const AppearanceContext = createContext<UseAppearance>(DEFAULT_USE_APPEARANCE);

type AppearanceProviderProps = {
  children: ReactNode;
}

/**
 * A Appearance Provider allows you to read or override current os appearance preference.
 * 
 * Check more details in `useAppearance` function.
 */
export function AppearanceProvider({ children }: AppearanceProviderProps): ReactElement {
  // Current os appearance setting preference
  const [osAppearance, setOsAppearance] = useState<Appearance | null>(DEFAULT_USE_APPEARANCE.osAppearance);

  // Current user appearance setting preference
  const [appearance, setAppearance] = useState<Appearance>(localStorage.getItem('@@appearance@@') as Appearance || DEFAULT_USE_APPEARANCE.appearance);

  // Assign current os appearance setting to appearance state
  useEffect(() => {
    const matchDarkMedia = window.matchMedia?.('(prefers-color-scheme: dark)');

    setOsAppearance(matchDarkMedia.matches ? Appearance.DARK : Appearance.LIGHT);

    matchDarkMedia.addEventListener('change', ({ matches }) => {
      setOsAppearance(matches ? Appearance.DARK : Appearance.LIGHT);
    });

    return () => {
      matchDarkMedia.removeEventListener('change', () => { });
    };
  }, []);

  // Supporting system preference and manual selection
  function modifyAppearanceWithClass(isDark: boolean) {
    const currentAppearance = isDark ? Appearance.LIGHT : Appearance.DARK;
    const newAppearance = isDark ? Appearance.DARK : Appearance.LIGHT;

    localStorage.setItem('@@appearance@@', newAppearance);
    document.documentElement.classList.remove(currentAppearance);
    document.documentElement.classList.add(newAppearance);
    setAppearance(newAppearance);
  }

  // when os appearance preference changes, call modifyAppearanceWithClass
  useEffect(() => {
    // change user appearance until os appearance is valid
    if (!osAppearance) return;

    const isDark =
      appearance === Appearance.DARK ||
      (!localStorage.getItem('@@appearance@@') &&
        osAppearance === Appearance.DARK);

    modifyAppearanceWithClass(isDark);

  }, [osAppearance, appearance]);

  // The function to toggle a user custom appearance preference change
  function onAppearanceToggle() {
    let isDark = appearance !== Appearance.DARK
    modifyAppearanceWithClass(isDark);
  }

  // Manually reset user appearance preference to os appearance preference
  function onAppearanceResetToOs() {
    // allow to reset back to os appearance until it is valid
    if (!osAppearance) {
      console.error('os appearance is not ready.');
      return;
    }

    localStorage.removeItem('@@appearance@@');
    setAppearance(osAppearance);
  }

  const appearanceValue = useMemo(
    () => ({
      osAppearance,
      appearance,
      onAppearanceToggle,
      onAppearanceResetToOs,
    }),
    [osAppearance, appearance]
  );

  return (
    <AppearanceContext.Provider value={appearanceValue}>
      {children}
    </AppearanceContext.Provider>
  );
}

/**
 * A Hook with its Provider allows you to read or override current os appearance preference.
 * 
 * This hook uses [Window.matchMedia() API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) to detect
 * and modify user appearance preference setting for the project. 
 * 
 * A `light` and `dark` class will be added into the document html tag
 * once user appearance preference changes. A localstorage `@@appearance@@` key will be stored for user appearance preference, which overrides the appearance for next time this user visit.
 * @returns \{
 *  osAppearance: Appearance | null;
 *  appearance: Appearance;
 *  onAppearanceToggle: () => void;
 *  onAppearanceResetToOs: () => void;
  \}
 */
export default function useAppearance(): UseAppearance {
  return useContext(AppearanceContext)
};
