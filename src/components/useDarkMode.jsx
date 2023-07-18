import { useEffect, useState } from "react";
import './styles/useDarkMode.css'

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Obtener el estado inicial del modo oscuro desde el localStorage
    const initialMode = localStorage.getItem("darkMode");
    // Si existe en el localStorage, retornar ese valor
    // Si no, retornar false (modo claro) como valor inicial
    return initialMode ? JSON.parse(initialMode) : false;
  });

  // Almacenar el estado actual en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
