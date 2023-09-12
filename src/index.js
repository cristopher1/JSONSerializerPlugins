import * as plugins from './plugins'

const serializers = {}

for (const key in plugins) {
  const Plugin = plugins[key]
  const plugin = new Plugin()
  const serializerType = plugin.serializerType
  serializers[serializerType] = plugin
}

export { serializers }
