const { articles, tools, services } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    item: null,
    a11yClass: '',
    relatedServices: []
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  onLoad(options) {
    const source = options.type === 'tool' ? tools : articles
    const item = source.find((entry) => entry.id === options.id)

    if (!item) {
      wx.showToast({ title: '内容不存在', icon: 'none' })
      return
    }

    const relatedServices = (item.related || [])
      .map((id) => services.find((service) => service.id === id))
      .filter(Boolean)

    this.setData({ item, relatedServices })
  },

  openService(event) {
    wx.navigateTo({ url: `/pages/service-detail/service-detail?id=${event.currentTarget.dataset.id}` })
  },

  goSelfTest() {
    wx.navigateTo({ url: '/pages/selftest/selftest' })
  }
})
