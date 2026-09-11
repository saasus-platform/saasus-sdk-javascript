export interface SnapshotMetadata {
  version: string;
  timestamp: Date;
  gitTag?: string;
  gitCommit?: string;
}

export interface HTTPResponseSnapshot {
  statusCode: number;
  status: string;
  headers: Record<string, string>;
  contentLength: number;
  traceId?: string;
}

export interface SDKReturnValue {
  type: string;
  statusCode: number;
  status: string;
  httpResponse?: HTTPResponseSnapshot;
  jsonData?: Record<string, any>;
  body?: string;
  headers?: Record<string, string>;
}

export interface SDKMethodError {
  type: string;
  message: string;
  details?: string;
}

export interface StepSnapshot {
  stepName: string;
  methodName: string;
  parameters: any;
  expectedStatus: number;
  actualStatus: number;
  duration: number;
  timestamp: Date;
  returnValue?: SDKReturnValue;
  error?: SDKMethodError;
  success: boolean;
}

export interface StorySnapshot {
  storyName: string;
  description: string;
  timestamp: Date;
  duration: number;
  status: 'passed' | 'failed' | 'skipped';
  variables: Record<string, any>;
  steps: StepSnapshot[];
  metadata: SnapshotMetadata;
}

export enum CompatibilityLevel {
  Compatible = 'compatible',
  Warning = 'warning',
  Breaking = 'breaking'
}

export interface CompatibilityIssue {
  type: string;
  description: string;
  impact: CompatibilityLevel;
  details?: any;
}

export interface ComparisonResult {
  compatible: boolean;
  level: CompatibilityLevel;
  issues: CompatibilityIssue[];
  summary: string;
}
