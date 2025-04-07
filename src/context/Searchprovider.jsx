import { createContext,useState } from "react"

const searchContext = createContext();

export function SearchProvider({children}) {
    const [searchTerm , setSearchTerm] = useState("");
    console.log("SearchContex - Search Term:",searchTerm)
    return (
        <searchContext.Provider value={{searchTerm,setSearchTerm}}>
            {children}
        </searchContext.Provider>
    );
}

export default searchContext;