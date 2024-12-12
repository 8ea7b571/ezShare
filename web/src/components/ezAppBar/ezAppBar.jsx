import { AppBar, Box, Tabs, Tab, Toolbar } from "@mui/material";

import COLORS from "../../constants/colors";
import STRINGS from "../../constants/strings";
import Logo from "../../variables/svgs";

function EzAppBar(props) {
    const { tabIndex, parentCallback } = props;

    const handleTabsChange = (event, newTabIndex) => {
        parentCallback(newTabIndex);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* App Logo */}
                <Box sx={{ marginRight: 3 }}>
                    <Logo
                        width="42px"
                        height="42px"
                        color={COLORS.GLOBAL_COLORS.PRIMARY}
                    />
                </Box>

                {/* App Title */}
                <Box
                    sx={{
                        marginRight: 3,
                        fontSize: 24,
                        color: COLORS.GLOBAL_COLORS.PRIMARY,
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    {STRINGS.GLOBAL_STRINGS.APP_TITLE}
                </Box>

                {/* Share Options */}
                <Box>
                    <Tabs value={tabIndex} onChange={handleTabsChange}>
                        <Tab
                            label="File"
                            sx={{ color: COLORS.GLOBAL_COLORS.TEXT }}
                        />
                        <Tab
                            label="Text"
                            sx={{ color: COLORS.GLOBAL_COLORS.TEXT }}
                        />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default EzAppBar;
