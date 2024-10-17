import { FC } from 'react'
import { useScreenRecorder } from '../../lib/screenRecoderContext'
import { ScreenRecordingTypesEnum } from '../../types/screen-recorder'

interface ScreenRecordingButtonProps {

}

const ScreenRecordingButton: FC<ScreenRecordingButtonProps> = ({ }) => {
  const { handleStartScreenRecording } = useScreenRecorder()
  return (
    <button onClick={() => handleStartScreenRecording(ScreenRecordingTypesEnum.DESKTOP)}>
      Record
    </button>
  )
}

export default ScreenRecordingButton