const { cases, services } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    caseItem: null,
    a11yClass: '',
    relatedServices: []
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  onLoad(options) {
    const caseItem = cases.find((item) => item.id === options.id)
    if (!caseItem) {
      wx.showToast({ title: '案例不存在', icon: 'none' })
      return
    }

    const relatedServices = caseItem.related
      .map((id) => services.find((service) => service.id === id))
      .filter(Boolean)

    this.setData({ caseItem, relatedServices })
  },

  openService(event) {
    wx.navigateTo({ url: `/pages/service-detail/service-detail?id=${event.currentTarget.dataset.id}` })
  },

  goContact() {
    wx.switchTab({ url: '/pages/about/about' })
  }
})
