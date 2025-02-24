import { createContext, ReactNode, RefObject, useRef, useState } from "react";
import { ipcMain, ipcRenderer, WebviewTag } from "electron";
// @types
import { BrowserContextType } from "../types/browser";

type BrowserProviderProps = {
  children: ReactNode;
};

const BrowserContext = createContext<BrowserContextType | null>(null);

function BrowserProvider({ children }: BrowserProviderProps) {
  const [activeWebViewRef, setActiveWebViewRef] = useState<RefObject<WebviewTag | null> | null>(null);

  console.log(activeWebViewRef, "activeWebViewRef")
  const handleGoBack = () => {
    if (activeWebViewRef.current?.canGoBack()) {
      activeWebViewRef.current.goBack();
    }
  };

  const handleGoForward = () => {
    if (activeWebViewRef.current?.canGoForward()) {
      activeWebViewRef.current.goForward();
    }
  };

  const handleReload = () => {
    if (activeWebViewRef.current) {
      activeWebViewRef.current?.reload();
    }
  };

  return (
    <BrowserContext.Provider
      value={{
        handleGoBack,
        handleGoForward,
        handleReload,
        activeWebViewRef,
        setActiveWebViewRef,
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
}

export { BrowserContext, BrowserProvider };
