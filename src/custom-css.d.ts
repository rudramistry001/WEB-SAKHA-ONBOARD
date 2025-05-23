// src/types/custom-css.d.ts
// This import is crucial to augment the 'react' module's types
import 'react';

// Declare the augmentation for the 'react' module
declare module 'react' {
  // Extend the existing CSSProperties interface
  interface CSSProperties {
    // Allow any property starting with '--' (e.g., --icon-color)
    [key: `--${string}`]: string | number | undefined;
  }
}