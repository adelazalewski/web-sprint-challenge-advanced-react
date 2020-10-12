// import {useState} from "react";
import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage("adelaskeySPRINT1unit32020");
    useEffect(()=>{
        if (someValue === true){
        document.body.classList.add("dark-mode");
        }else{
          document.body.classList.remove("dark-mode");
        }
            }, [someValue])
    return [someValue, setSomeValue];
}