import React from 'react';
import { Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { JCstyles } from '../lib/styles';

export const JCAlbums = () => (
    <View style={JCstyles.containerGrid}>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Black Sabbath</Title>
                <Paragraph>1970</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/d/da/Black_Sabbath_debut_album.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Heaven and Hell</Title>
                <Paragraph>1980</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://www.mundometalbr.com/wp-content/uploads/2021/12/ddcab6_e59a64f848df4646960e128af0c32918_mv2.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Sabbath Bloody Sabbath</Title>
                <Paragraph>1973</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Black_Sabbath_SbS.jpg/220px-Black_Sabbath_SbS.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Never Say Die!</Title>
                <Paragraph>1978</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://i.discogs.com/-Df9Q2PT0XPjOzKP8qQc7kyxj2kriIafDBK6Rpjm_6I/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NTk4/MjEtMTU5NTQ0NzQ3/Mi05NzMzLmpwZWc.jpeg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Sabotage</Title>
                <Paragraph>1975</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/69f64e8679504a724e81fdca704080ce/264x264.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Dehumanizer</Title>
                <Paragraph>1992</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://www.mundometalbr.com/wp-content/uploads/2022/06/Dehumanizer.jpeg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Born Again</Title>
                <Paragraph>1983</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://www.mundometalbr.com/wp-content/uploads/2022/08/BA.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Mob Rules</Title>
                <Paragraph>1981</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://i.ytimg.com/vi/7A2dt0rIMSY/maxresdefault.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Headless Cross</Title>
                <Paragraph>1989</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://i.ytimg.com/vi/SjoI7ndh-Ng/hqdefault.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Reunion</Title>
                <Paragraph>1998</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/0/08/Sabbath_Reunion.jpg' }} />
        </Card>
        <Card style={JCstyles.containerStyle}>
            <Card.Content>
                <Title>Paranoid</Title>
                <Paragraph>1970</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/6/64/Black_Sabbath_-_Paranoid.jpg' }} />
        </Card>
    </View>
)