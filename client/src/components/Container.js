import {
    useBreakpoints
} from "../hooks/useBreakpoints";
import {View} from "react-native";

export function Container({children, style = {}}) {
    const { maxBreakpointWidth } = useBreakpoints();
    const containerMaxWidth = maxBreakpointWidth === 0 ? '100%' : maxBreakpointWidth;

    const containerStyle = {
        maxWidth: containerMaxWidth,
        backgroundColor: 'red',
        marginHorizontal: 'auto',
        width: '100%'
    }

    return (
        <View style={{...containerStyle, ...style}}>
            {children}
        </View>
    )
}