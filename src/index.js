import * as serializers from './serializer/serializers'
import { Installer } from './installer/Installer'

export { default as BigIntSerializer } from './serializer/serializers/BigIntSerializer'
export { default as DateSerializer } from './serializer/serializers/DateSerializer'
export { default as FunctionSerializer } from './serializer/serializers/FunctionSerializer'
export { default as MapSerializer } from './serializer/serializers/MapSerializer'
export { default as SetSerializer } from './serializer/serializers/SetSerializer'

const baseSerializersInstaller = new Installer(serializers)

export { baseSerializersInstaller }
