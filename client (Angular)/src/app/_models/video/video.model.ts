export class Video {
    id?: number;
    videoId: string;
    title: string;
    posted_date: Date;
    totalRating?: number;
    voteCount?: number;
    avRating?: number;
    thumbnail: string;
}

export class UserRelatedVideoInfo extends Video {
    isModifiable: boolean;
}