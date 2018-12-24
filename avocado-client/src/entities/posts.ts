import { ImageURISource } from "react-native";


export interface PostInfo {
    key : string;
    type : "image" | "video" | "text";
}

export interface ImagePostInfo extends PostInfo {
    description : string;
    image : ImageURISource;
    type : "image";
}

export interface VideoPostInfo extends PostInfo {
    description : string;
    image : ImageURISource;
    video : ImageURISource;
    type : "video";
}

export interface TextPostInfo extends PostInfo {
    description : string;
    type : "text";
}