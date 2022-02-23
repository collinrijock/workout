import { StyleSheet } from "react-native";
import * as colors from "./colors";

export const customFonts = {
    "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
};

const fonts = StyleSheet.create({
    H1: {
        fontFamily: "Lato-Bold",
        fontSize: 56,
        color: colors.GREY_BODY,
    },
    H2: {
        fontFamily: "Lato-Bold",
        fontSize: 32,
        color: colors.GREY_BODY,
        lineHeight: 40,
    },
    H2_grey: {
        fontFamily: "Lato-Bold",
        fontSize: 32,
        marginBottom: 5,
        color: colors.GREY_BODY,
        marginBottom: 20,
    },
    H3: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.GREY_BODY,
        textAlign: "left",
    },
    subtitle: {
        fontFamily: "Lato-Regular",
        fontSize: 24,
        color: colors.GREY_BODY,
        textAlign: "left",
        marginLeft: 16,
        marginRight: 25,
        marginBottom: 15,
    },
    body: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.GREY_BODY,
        lineHeight: 20,
    },
    input: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.GREY_PLACEHOLDER,
    },
    body_green: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.GREEN_DARK,
    },
    body_bold: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        color: colors.GREY_BODY,
    },
    small: {
        fontFamily: "Lato-Bold",
        fontSize: 12,
        color: colors.GREY_BODY,
    },
    preTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 12,
        color: colors.GREY_BODY,
        letterSpacing: 3,
    },
});

export default fonts;
