import Slider from './Slider.js';
import Range from './Range.js';
import Handle from './Handle.js';
import createSliderWithTooltip from './createSliderWithTooltip.js';

Slider.Range = Range;
Slider.Handle = Handle;
Slider.createSliderWithTooltip = createSliderWithTooltip;
export default Slider;
export { Range, Handle, createSliderWithTooltip };