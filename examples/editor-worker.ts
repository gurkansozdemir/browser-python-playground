export type RunRequest = { requestId: number; source: string };
export type RunResult = { requestId: number; output: string };

export function summarizeSource(request: RunRequest): RunResult {
  return { requestId: request.requestId, output: `Received ${request.source.length} characters` };
}
