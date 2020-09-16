const sdk = require('cloudinary-core')

const createInstance = () => {
  const configurations = {
    cloud_name: 'dqywsmiax',
    api_key: '',
    api_secret: '',
    private_cdn: false,
    secure: true
  }

    configurations.cname = ''

  const instance = new sdk.Cloudinary(configurations)

  const api = (type) => {
    const url = type === 'video' ? (...args) => instance.video_url(...args) : instance.url
    const element = type === 'video' ? instance.videoTag : instance.imageTag

    return {
      config: instance.config,
      url,
      element,
      fetchRemote(url, options) {
        return this.url(url, { ...(options || {}), type: 'fetch' })
      },
      video_url: (...args) => instance.video_url(...args)
    }
  }

  return api
}

export default function (context, inject) {
  const cloudinary = createInstance()

  context.$cloudinary = cloudinary
  inject('cloudinary', cloudinary)
}
