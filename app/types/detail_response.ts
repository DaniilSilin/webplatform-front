export interface BaseDetailResponse {
    detail: string;
}

export interface BaseStatusResponse {
    status: 'success' | 'error';
    message: string;
}