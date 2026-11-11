import { FeedbackApi } from "../generated/Communication";
export declare class CommunicationClient {
    private instance;
    feedbackApi: FeedbackApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    private referer;
    private xSaaSusReferer;
    private xSaaSusTraceId;
    constructor(referer?: string, xSaaSusReferer?: string, xSaaSusTraceId?: string);
}
