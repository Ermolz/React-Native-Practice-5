import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
    },
    filterContainer: {
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
    },
    cardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    smallButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    smallButtonText: {
        color: '#fff',
        fontSize: 12,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // position: 'absolute',
        marginTop: 16,
    },
    navButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center',
    },
    navButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
});
