export enum ScreenRecordingTypesEnum {
  DESKTOP = "DESKTOP",
  TAB = "TAB",
  SELECTED_AREA = "SELECTED_AREA"
}

export type ScreenRecoderContextType = {
  handleStartScreenRecording: (type: ScreenRecordingTypesEnum) => void;
};
