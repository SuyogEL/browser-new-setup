import { createContext, ReactNode, useContext } from "react";
import { ScreenRecoderContextType, ScreenRecordingTypesEnum } from "../types/screen-recorder";
const ScreenRecorderContext = createContext<ScreenRecoderContextType | null>(null)


const ScreenRecorderContextProvider = ({ children }: {
  children?: ReactNode
}) => {
 
  const handleStartScreenRecording = async (type: ScreenRecordingTypesEnum) => {
    if (type === ScreenRecordingTypesEnum.DESKTOP) {
      navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      }).then((res) => { console.log(res, "res") }).catch((error) => console.log(error, "errr"))
    }
  }

  return (
    <ScreenRecorderContext.Provider value={{
      handleStartScreenRecording
    }}>
      {children}
    </ScreenRecorderContext.Provider>
  )
}

const useScreenRecorder = (): ScreenRecoderContextType => {
  const context = useContext(ScreenRecorderContext)
  if (!context) {
    throw new Error("context not available")
  }
  return context
};
export { useScreenRecorder }
export default ScreenRecorderContextProvider