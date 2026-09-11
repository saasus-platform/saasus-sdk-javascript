export interface Step {
  method_name: string;
  params: Record<string, any> | ((vars: Record<string, any>) => Record<string, any>);
  expected_status?: number;
  allowed_statuses?: number[];
  validation_func?: (response: any) => boolean;
  state_update?: (response: any, variables: Record<string, any>) => void | Promise<void>;
  description?: string;
  store_as?: string;
  skip_on_dry_run?: boolean;
}

export interface Story {
  name: string;
  description: string;
  module: string;
  setup?: Step[];
  steps: Step[];
  cleanup?: Step[];
  tags?: string[];
  timeout?: number;
  variables?: Record<string, any>;
}

export interface StepResult {
  step: Step;
  success: boolean;
  response?: any; // The data payload
  raw_response?: any; // The full AxiosResponse
  request_params?: Record<string, any>;
  status_code?: number;
  error?: Error;
  execution_time: number;
  timestamp: Date;
  skipped?: boolean;
}

export interface StoryResult {
  story: Story;
  success: boolean;
  step_results: StepResult[];
  setup_results: StepResult[];
  cleanup_results: StepResult[];
  execution_time: number;
  timestamp: Date;
  error?: string;
}
