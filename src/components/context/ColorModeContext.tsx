import React, { createContext, useState, useContext } from 'react';

interface ColorModeProviderProps {
    children: React.ReactNode;
}

interface ColorModeContextType {
    mode: string;
    toggleMode: () => void;
}


const ColorModeContext = createContext<ColorModeContextType | null>(null)

const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<string>('dark');
    const toggleMode = () => {
        console.log("Toggling mode");
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    const defaultContextValue: ColorModeContextType = {
        mode: mode,
        toggleMode
    };

    return(
        <div>
            <ColorModeContext.Provider value={defaultContextValue}>
                {children}
            </ColorModeContext.Provider>
        </div>
    )
}

function useColor(): ColorModeContextType {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error('useColor must be used within a ColorModeProvider');
    }
    return context;
}

export { useColor, ColorModeProvider };