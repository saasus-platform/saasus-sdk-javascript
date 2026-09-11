import { AxiosInstance, AxiosResponse } from 'axios';
import {
  Comment,
  Configuration,
  CreateFeedbackCommentParam,
  CreateFeedbackParam,
  CreateVoteUserParam,
  Feedback,
  Feedbacks,
  FeedbackApi,
  UpdateFeedbackCommentParam,
  UpdateFeedbackParam,
  UpdateFeedbackStatusParam,
  Votes
} from '../../../src/generated/Communication';
import getAxiosInstance from '../../../src/modules/interceptor';

export class CommunicationE2EClient {
  private feedbackApi: FeedbackApi;
  private axios: AxiosInstance;
  private basePath: string;

  constructor(referer = '', xSaaSusReferer = '') {
    const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    this.basePath = `${baseUrl}/v1/communication`;
    const configuration = new Configuration({ basePath: this.basePath });

    this.axios = getAxiosInstance(this.basePath, referer, xSaaSusReferer);
    this.feedbackApi = new FeedbackApi(configuration, '', this.axios);
  }

  async GetFeedbacks(): Promise<AxiosResponse<Feedbacks>> {
    return this.feedbackApi.getFeedbacks();
  }

  async CreateFeedback(payload: CreateFeedbackParam): Promise<AxiosResponse<Feedback>> {
    return this.feedbackApi.createFeedback(payload);
  }

  async GetFeedback(feedbackId: string): Promise<AxiosResponse<Feedback>> {
    return this.feedbackApi.getFeedback(feedbackId);
  }

  async UpdateFeedback(
    feedbackId: string,
    payload: UpdateFeedbackParam
  ): Promise<AxiosResponse<Feedback>> {
    return this.feedbackApi.updateFeedback(feedbackId, payload);
  }

  async UpdateFeedbackStatus(
    feedbackId: string,
    payload: UpdateFeedbackStatusParam
  ): Promise<AxiosResponse<Feedback>> {
    return this.feedbackApi.updateFeedbackStatus(feedbackId, payload);
  }

  async CreateFeedbackComment(
    feedbackId: string,
    payload: CreateFeedbackCommentParam
  ): Promise<AxiosResponse<Comment>> {
    return this.feedbackApi.createFeedbackComment(feedbackId, payload);
  }

  async GetFeedbackComment(
    feedbackId: string,
    commentId: string
  ): Promise<AxiosResponse<Comment>> {
    return this.feedbackApi.getFeedbackComment(feedbackId, commentId);
  }

  async UpdateFeedbackComment(
    feedbackId: string,
    commentId: string,
    payload: UpdateFeedbackCommentParam
  ): Promise<AxiosResponse<Comment>> {
    return this.feedbackApi.updateFeedbackComment(feedbackId, commentId, payload);
  }

  async CreateVoteUser(
    feedbackId: string,
    payload: CreateVoteUserParam
  ): Promise<AxiosResponse<Votes>> {
    return this.feedbackApi.createVoteUser(feedbackId, payload);
  }

  async DeleteVoteForFeedback(
    feedbackId: string,
    userId: string
  ): Promise<AxiosResponse<Votes>> {
    return this.feedbackApi.deleteVoteForFeedback(feedbackId, userId);
  }

  async DeleteFeedbackComment(
    feedbackId: string,
    commentId: string
  ): Promise<AxiosResponse<void>> {
    return this.feedbackApi.deleteFeedbackComment(feedbackId, commentId);
  }

  async DeleteFeedback(feedbackId: string): Promise<AxiosResponse<void>> {
    return this.feedbackApi.deleteFeedback(feedbackId);
  }
}

export const getCommunicationMethods = (): string[] => [
  'GetFeedbacks',
  'CreateFeedback',
  'GetFeedback',
  'UpdateFeedback',
  'UpdateFeedbackStatus',
  'CreateFeedbackComment',
  'GetFeedbackComment',
  'UpdateFeedbackComment',
  'CreateVoteUser',
  'DeleteVoteForFeedback',
  'DeleteFeedbackComment',
  'DeleteFeedback'
];

export const createCommunicationE2EClient = (): CommunicationE2EClient =>
  new CommunicationE2EClient();
