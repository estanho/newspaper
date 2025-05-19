interface TwitterWidgets {
  widgets: {
    load: (element?: HTMLElement) => void;
  };
}

declare global {
  interface Window {
    twttr?: TwitterWidgets;
  }
}

export {};
