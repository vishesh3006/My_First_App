import React from 'react';
import {View} from 'react-native';

const Card = (prop) => {
    return(
        <View style={styles.containerStyle}>
            {prop.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }
}

export default Card;