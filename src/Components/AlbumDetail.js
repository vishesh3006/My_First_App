import React from 'react';
import { View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {

    const {title, artist, image, thumbnail_image, url} = album;

    const {
        headerTextStyle,
        headerContainerStyle, 
        thumbnailContainerStyle, 
        thumbnailStyle,
        imageStyle
        } = styles;

    return(
        <Card>
            <CardSection>
                <View style= {thumbnailContainerStyle}>
                    <Image 
                        source={{uri: thumbnail_image}} 
                        style={thumbnailStyle} 
                    />
                </View>

                <View style={headerContainerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>    
            </CardSection>

            <CardSection>
                <Image 
                    source={{uri: image}}
                    style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    headerTextStyle: {
        fontWeight: '400',
        color: '#000',
        fontSize: 18,
    },

    headerContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'   
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;