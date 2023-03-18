import { StyleSheet } from 'react-native';
import colors from '../styles/colors'

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

    buttonIn: {
        backgroundColor: colors.redButton,
        borderRadius: 8,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonTextIn: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    centerPage: {
        alignItems: 'center',
        flex: 1,
    },

    column: {
        flex: 1,
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

    iconEye: {
        paddingHorizontal: 8,
        marginTop: 6
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

    passwordContainer: {
        borderColor: colors.gray,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        marginBottom: 16,
        width: '80%',
    },
    
    textInput: {
        borderColor: colors.gray,
        borderRadius: 8,
        borderWidth: 1,
        height: 40,
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '80%',
    },
    
    textInputPassword: {
        height: 40,
        flex: 1,        
        marginBottom: 16,
        paddingHorizontal: 8
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
        width: '95%',
    },

    selecionaSexo: {
        minWidth: 200,
    },

    selecionarMoeda: {
        minWidth: 200,
    },    

    selectType: {
        alignItems: 'center',
        borderColor: colors.gray,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        marginBottom: 16,
        width: '80%',
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


    input: {
        height: 40,
        borderColor: colors.gray,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        fontSize: 16,
        marginTop: 10,
    },
    
    textContainer: {
        height: 40,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
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

