const { orgTypes, serviceCategories, services } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

function servicesByOrg(orgId) {
  return services.filter((service) => service.orgs.includes(orgId))
}

function servicesByCategory(categoryId) {
  return services.filter((service) => service.category === categoryId)
}

Page({
  data: {
    mode: 'org',
    a11yClass: '',
    orgTypes,
    serviceCategories,
    activeOrg: 'museum',
    activeCategory: 'assessment',
    serviceList: [],
    categoryList: []
  },

  onLoad(options) {
    const activeOrg = options.org || 'museum'
    this.setData({ activeOrg }, () => {
      this.refreshLists()
    })
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
    const pendingOrg = wx.getStorageSync('pendingServiceOrg')
    if (pendingOrg) {
      wx.removeStorageSync('pendingServiceOrg')
      this.setData({ activeOrg: pendingOrg, mode: 'org' })
    }
    this.refreshLists()
  },

  refreshLists() {
    const { activeOrg, activeCategory } = this.data
    this.setData({
      serviceList: servicesByOrg(activeOrg),
      categoryList: servicesByCategory(activeCategory)
    })
  },

  switchMode(event) {
    this.setData({ mode: event.currentTarget.dataset.mode })
  },

  selectOrg(event) {
    this.setData({ activeOrg: event.currentTarget.dataset.id }, () => this.refreshLists())
  },

  selectCategory(event) {
    this.setData({ activeCategory: event.currentTarget.dataset.id }, () => this.refreshLists())
  },

  openService(event) {
    wx.navigateTo({ url: `/pages/service-detail/service-detail?id=${event.currentTarget.dataset.id}` })
  },

  goSelfTest() {
    wx.navigateTo({ url: '/pages/selftest/selftest' })
  }
})
