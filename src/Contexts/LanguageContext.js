import {createContext} from "react";

export const languages = {english: 'english', persian:'persian'};

const context = createContext(languages.english);

export default context;

export const Provider = context.Provider;

export const Consumer = context.Consumer;