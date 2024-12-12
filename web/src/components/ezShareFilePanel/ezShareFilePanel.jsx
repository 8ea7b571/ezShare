import { Box, Container, Grid2 } from "@mui/material";

import styles from "./ezShareFilePanel.module.css";

function EzShareFilePanel(props) {
    // Determine whether the current component is displayed based on the selected Tab
    const { id, tabIndex } = props;

    return (
        <Container maxWidth="md" hidden={id !== tabIndex}>
            <Grid2
                marginTop={{ xs: 4, sm: 8, md: 12, lg: 16 }}
                height={{ xs: 450, sm: 500, md: 550, lg: 600 }}
            >
                <Box className={styles.shareFileBox}>1111</Box>
            </Grid2>
        </Container>
    );
}

export default EzShareFilePanel;
