import theme from "./theme";

const style = {
    content: {
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(10)
        },
    },
    filters: {
        display: "flex",
        flexDirection: "row",
        margin: "10",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            margin: theme.spacing(10)
        }
    },
    table: {
        display: "flex",
        flexDirection: "column",
    },
    navigateButtons: {
        display: "flex",
        justifyContent: "center",
        textTransform: 'none',
    },
    addNewResourceSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
        }
    },
}

export default style;