const { services, serviceCategories, orgTypes } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    service: null,
    a11yClass: '',
    categoryName: '',
    orgNames: []
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  onLoad(options) {
    const service = services.find((item) => item.id === options.id)
    if (!service) {
      wx.showToast({ title: '服务不存在', icon: 'none' })
      return
    }

    const category = serviceCategories.find((item) => item.id === service.category)
    const orgNames = service.orgs.map((id) => {
      const org = orgTypes.find((item) => item.id === id)
      return org ? org.name : id
    })

    this.setData({
      service,
      categoryName: category ? category.name : '',
      orgNames
    })
  },

  goContact() {
    wx.switchTab({ url: '/pages/about/about' })
  }
})
