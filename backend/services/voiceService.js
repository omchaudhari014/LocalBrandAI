// Future integration point for AWS Polly, Google Text-to-Speech, or Azure Speech.
export function prepareVoiceScript(script) {
  return {
    script,
    audioStatus: 'script-ready',
    note: 'Actual MP3 generation can be added with AWS Polly later.'
  };
}
