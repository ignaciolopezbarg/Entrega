import path from "path";
import { fileURLToPath } from "url";

export const _dirname = path.dirname(fileURLToPath(import.meta.url));
//dirname contiene la ruta donde creamos la variable dirname, o sea que es la del src, referencia para ubicar los distintos archivos o carpetas del proyecto. Seria //la ruta hasta src y utils