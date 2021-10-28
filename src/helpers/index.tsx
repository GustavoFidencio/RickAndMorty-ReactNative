import * as React from 'react';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    name: string;
    size: number;
    color: string;
    style?: Object,
    lib: string,
}

export const Icon = (props: Props) => {

    const { name, size, color, style, lib } = props;

    switch (lib.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()) {
        case "zocial":
            return <IconZocial name={name} size={size} color={color} style={style} />
        case "entypo":
            return <IconEntypo name={name} size={size} color={color} style={style} />
        case "feather":
            return <IconFeather name={name} size={size} color={color} style={style} />
        case "fontisto":
            return <IconFontisto name={name} size={size} color={color} style={style} />
        case "ionicons":
            return <IconIonicons name={name} size={size} color={color} style={style} />
        case "evilicons":
            return <IconEvilIcons name={name} size={size} color={color} style={style} />
        case "octicons":
            return <IconOcticons name={name} size={size} color={color} style={style} />
        case "antdesign":
            return <IconAntDesign name={name} size={size} color={color} style={style} />
        case "foundation":
            return <IconFoundation name={name} size={size} color={color} style={style} />
        case "materialicons":
            return <IconMaterialIcons name={name} size={size} color={color} style={style} />
        case "fontawesome":
            return <IconFontAwesome name={name} size={size} color={color} style={style} />
        case "fontawesome5":
            return <IconFontAwesome5 name={name} size={size} color={color} style={style} />
        case "simplelineicons":
            return <IconSimpleLineIcons name={name} size={size} color={color} style={style} />
        case "materialcommunityicons":
            return <IconMaterialCommunityIcons name={name} size={size} color={color} style={style} />
        default:
            return <IconFontAwesome name={name} size={size} color={color} style={style} />
    }
}