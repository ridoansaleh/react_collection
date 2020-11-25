import { createGlobalStyle } from "styled-components";

import RouthersTTF from "./assets/Routhers.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: Routhers;
        src: url(${RouthersTTF});
    }
`;
