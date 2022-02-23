import { StyleSheet } from "react-native";
import * as colors from "./colors";


const s = StyleSheet.create({
    hcont:{
        flexDirection: "row",
        alignItems: "center"
    },
    start: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    mleft: {
        marginLeft: "auto"
    },
    hmargins: {
        marginHorizontal: 8,
        marginTop: 8
    },
    green: {
        color: colors.GREEN_PRIMARY
    },
    grey: {
        color: colors.GREY_LABEL
    },
    black: {
        color: "#000"
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    flex: {
        flex: 1
    },
    large: {
        height: "100%",
        width: "100%"
    },
    smallTop: {
        marginTop:8
    },
    mTop: {
        marginTop:16
    },
    spaceBetween: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.BLACK,
    }
});

export default s;
