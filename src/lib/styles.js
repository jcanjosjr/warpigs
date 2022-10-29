import { StyleSheet } from "react-native";

export const JCstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "Courier New",
        textAlign: "center",
        color: "#d3d3d3",
        fontSize: "40px",
        padding: "100px"
    },
    abouttext: {
        fontFamily: "Courier New",
        color: "#fff",
        textAlign: "left",
        fontSize: "30px",
        padding: "100px"
    },
    containerGrid: {
        flex: 1,
        backgroundColor: "#000",
        flexWrap: "wrap",
        flexDirection: "row",

    },
    containerStyle: {
        padding: 10,
        backgroundColor: "white",
        borderWidth: 0,
        borderRadius: 15,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "white",
        marginTop: 50,
        elevation: 10
    },
    containerContact: {
        flex: 1,
        alignContent: "top",
        alignItems: "right",
        backgroundColor: "#000",
        fontFamily: "Courier New",
        textAlign: "center",
    },
    input: {
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 15,
        fontSize: 20,
        widht: 50,
        margin: 20,
        borderWidth: 1,
        padding: 20,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        margin: 20,
        marginLeft: 400,
        marginRight: 400,
      },
      appButtonText: {
        fontSize: 20,
        fontFamily: "Courier New",
        color: "#000",
        alignSelf: "center",
      }
})