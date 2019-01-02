

export interface ImageInfo {
    uri: string;
}



export interface PostInfo {
    type: "image" | "video" | "text";
    key?: StyleMedia;
    created:any;
}

export interface ImagePostInfo extends PostInfo {
    description: string;
    image: ImageInfo;
    type: "image";
}

export interface VideoPostInfo extends PostInfo {
    description: string;
    image: ImageInfo;
    video: ImageInfo;
    type: "video";
}

export interface TextPostInfo extends PostInfo {
    description: string;
    type: "text";
}

export type PostInfoType = ImagePostInfo | VideoPostInfo | TextPostInfo;
