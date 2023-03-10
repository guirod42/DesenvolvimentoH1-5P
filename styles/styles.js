import { StyleSheet } from 'react-native';
import colors from  '../styles/colors'

const styles = StyleSheet.create({
    backButton: {
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: colors.dark_gray,
        borderRadius: 10,
        elevation: 60,
        fontSize: 16,
        height: 60,
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 24,
        shadowColor: '#555555',
        shadowOpacity: 1,
        opacity: 0.8,
    },

    buttonTransparent: {
        alignItems: 'center',
        backgroundColor: '#555555',
        borderRadius: 10,
        elevation: 60,
        fontSize: 16,
        height: 60,
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 24,
        shadowColor: '#ccc',
        shadowOpacity: 0,
        opacity: 0.5,
    },

    buttonCheck: {
        alignItems: 'center',
        backgroundColor: '#555555',
        borderRadius: 200,
        elevation: 60,
        fontSize: 16,
        height: 60,
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 24,
        shadowColor: '#ccc',
        shadowOpacity: 0,
    },

    buttonPrincipal: {
        alignItems: 'center',
        backgroundColor: '#555555',
        borderRadius: 10,
        elevation: 60,
        fontSize: 16,
        height: 60,
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 10,
        paddingHorizontal: 24,
        shadowColor: '#ccc',
        opacity: 0.2,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    centerPage: {
        alignItems: 'center',
        flex: 1,
    },

    column: {
        flex: 1,
        justifyContent: 'center',
    },

    headerPrincipal: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
    },

    explicacao: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },

    fundoPagina: {
        alignItems: 'center',
        flex: 1,
    },

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

    containerTrocaImagem: {
        justifyContent: 'space-between',
    },

    image: {
        height: '80%',
        width: '80%',
    },

    imageBackground: {
        alignItems: 'center',
        flex: 1,
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        alignItems: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 16,
        height: 60,
        marginTop: 10,
        paddingHorizontal: 24,
    },

    inputContainer: {
        alignItems: 'stretch',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: '90%',
        marginTop: 10,
        padding: 0,
        width: '90%',
    },

    label: {
        fontWeight: 'bold',
    },

    resultado: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },

    scrollView: {
        flex: 1,
        width: '100%',
    },

    selecionaSexo: {
        minWidth: 200,
    },

    selecionarMoeda: {
        minWidth: 200,
    },

    subtitle: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 45,
        textAlign: 'right',
    },

    text: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
    },

    textResult: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },

    title: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#D3D3D3',
        borderColor: '#000',
    },

    titlePage: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default styles;