import { useState } from "react";

import EzAppBar from "../components/ezAppBar/ezAppBar";
import EzShareFilePanel from "../components/ezShareFilePanel/ezShareFilePanel";
import EzShareTextPanel from "../components/ezShareTextPanel/ezShareTextPanel";

function PageIndex() {
    const [tabIndex, setTabIndex] = useState(0);

    const tabChangeCallback = (newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <div>
            <EzAppBar tabIndex={tabIndex} parentCallback={tabChangeCallback} />

            <EzShareFilePanel tabIndex={tabIndex} id={0} />
            <EzShareTextPanel tabIndex={tabIndex} id={1} />
        </div>
    );
}

export default PageIndex;
