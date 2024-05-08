import { createContext, useCallback, useContext, useState } from "react";

type HomeContextType = {
  currentSection: string;
  setSection: (section: string) => void;
};

const HomeContext = createContext<HomeContextType>({
  currentSection: "open",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSection: (section: string) => {},
});

export const useHomeContext = () => useContext(HomeContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HomeProvider = ({ children }: any) => {
  const [currentSection, setCurrentSection] = useState<string>("");

  const setSection = useCallback((section: string) => {
    setCurrentSection(section);
  }, []);

  return (
    <HomeContext.Provider value={{ currentSection, setSection }}>
      {children}
    </HomeContext.Provider>
  );
};
