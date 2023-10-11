import * as serializers from './serializer/serializers'
import { Installer } from './installer/Installer'

const baseSerializersInstaller = new Installer(serializers)

export { baseSerializersInstaller }
