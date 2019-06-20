export class Video {
    id: number;
    url : string;
    title: string;
    posted_date: Date;
    grade: number;
    thumbnail: string;
}

export class RateResponse {
    users_count: number;
    total_rating: number;
}