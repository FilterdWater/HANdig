import type { SVGAttributes } from 'react';

import HANdig from "../../../public/assets/Handig_LOGO.png"

export default function AppLogoIcon(props: any) {
    return (
        <img src={HANdig} className={props.className} />
    );
}
