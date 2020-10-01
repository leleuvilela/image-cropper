import Canvas from './Canvas.js'
import Preview from './Preview.js'
import Load from './Load.js'
import Crop from './Crop.js'
import Download from './Download.js'
import SelectionTool from './SelectionTool.js'


const Photo = {}

Canvas(Photo)
Preview(Photo)
Load(Photo)
SelectionTool(Photo)
Crop(Photo)
Download(Photo)

export default Photo