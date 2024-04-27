import {Platform} from "react-native";

export function usePlatform() {
  return {
    isMobile: Platform.OS === "ios" || Platform.OS === "android"
  }
}