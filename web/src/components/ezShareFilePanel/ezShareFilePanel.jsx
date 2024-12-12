import { Box, Button, Container, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";

import STRINGS from "../../constants/strings";
import COLORS from "../../constants/colors";
import STYLES from "../../constants/styles"
import { CloudUpload } from "@mui/icons-material";

function EzShareFilePanel(props) {
    // Determine whether the current component is displayed based on the selected Tab
    const { id, tabIndex } = props;

    const HiddenInput = styled("input")({
        width: "1px",
        height: "1px",
        visibility: "hidden",
    });

    const handleInputChange = (event) => {
        // TODO: Implementing file upload logic
        console.log(event.target.files);
    };

    return (
        <Container maxWidth="md" hidden={id !== tabIndex}>
            <Grid2
                marginTop={{ xs: 4, sm: 8, md: 12, lg: 16 }}
                height={{ xs: 450, sm: 500, md: 550, lg: 600 }}
            >
                <Box 
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: STYLES.GLOBAL_STYLES.BOX_SHADOW,
                        borderRadius: STYLES.GLOBAL_STYLES.BORDER_RADIUS_OUTTER,
                        background: COLORS.GLOBAL_COLORS.BACKGROUND,
                    }}
                >
                    <Button
                        component="label"
                        variant="outlined"
                        sx={{
                            width: "90%",
                            height: "88%",
                            border: `2px ${COLORS.SPECIAL_COLORS.SIMPLE_GREY} dashed`,
                            color: COLORS.SPECIAL_COLORS.SIMPLE_GREY,
                            fontSize: "24px",
                            textTransform: "none",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <CloudUpload
                                    sx={{ width: "128px", height: "128px" }}
                                />
                            </Box>
                            <Box>
                                {STRINGS.SHARE_FILE_PAGE_STRING.UPLOAD_TIPS}
                            </Box>
                        </Box>

                        <HiddenInput type="file" onChange={handleInputChange} />
                    </Button>
                </Box>
            </Grid2>
        </Container>
    );
}

export default EzShareFilePanel;
