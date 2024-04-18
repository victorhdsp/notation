import * as Slider from '@radix-ui/react-slider';
import useConfigStore from '../../../../../../../store/configStore';

export default function OpacitySlider () {
  const {opacityBackground, setOpacityBackground} = useConfigStore(state => state);

  const handleSliderChange = (value: number[]) => {
    setOpacityBackground(value[0])
  }

  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[150px] h-5"
      defaultValue={[opacityBackground]}
      onValueChange={handleSliderChange}
      max={100}
      step={1}
    >
      <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-blue-200 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-blue-100 shadow-[0_0px_0px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_1px_2px] focus:shadow-blackA5"
        aria-label="Volume"
      />
    </Slider.Root>
  )
}