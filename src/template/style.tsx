import theme from "./theme";

const style = {
    content: {
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(4)
        },
    },
    filters: {
        display: "flex",
        flexDirection: "row",
        margin: "10",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            margin: theme.spacing(4)
        }
    },
    table: {
        display: "flex",
        flexDirection: "column",
    },
    changeOrgButton: {
        textTransform: 'none',
        height: 56,
        width: 300,
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

   /* treecontent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tree: {
        display: "flex",
        marginRight: "50px",
        marginTop: "20px",
    },*/
}

export default style;