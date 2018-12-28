

export interface ImageInfo {
    uri: string;
}



export interface PostInfo {
    key: string;
    type: "image" | "video" | "text";
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


export const dummyPosts: PostInfoType[] = [{
        key: "ddd2",
        type: "text",
        description: "ddd"
    }, {
        key: "ddd1",
        type: "image",
        description: "This is a test",
        image: { uri: "https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg" }
    }, {
        key: "ddd3",
        type: "image",
        description: "This is a test",
        image: { uri: "https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg" }
    }, {
        key: "ddd4",
        type: "image",
        description: "This is a test",
        image: { uri: "https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg" }
    }, {
        key: "ddd5",
        type: "image",
        description: "This is a test",
        image: { uri: "https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg" }
    }, {
        key: "ddd6",
        type: "image",
        description: "This is a test",
        image: { uri: "https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg" }
    }, {
        key: "ddd7",
        type: "image",
        description: "This is a test",
        image: { uri: "https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg" }
}];


