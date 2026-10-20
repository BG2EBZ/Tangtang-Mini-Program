const { brand, orgTypes } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    brand,
    a11yClass: '',
    msLogo: '/assets/images/ms-logo.png',
    tangtangLogo: '/assets/images/tangtang-wave.png',
    orgTypes: orgTypes.filter((item) => item.id !== 'general'),
    selectedOrgIndex: 0,
    serviceOptions: ['无障碍与包容性评估', '感官地图 / 感官指南 / 社会叙事', '员工培训', '融合活动', '企业 CSR / ESG 活动', '内容与传播产品', '不确定，想先咨询'],
    selectedServiceIndex: 6,
    form: {
      orgName: '',
      contactName: '',
      phone: '',
      city: '',
      budget: '',
      timing: '',
      description: ''
    }
  },

  bindOrgChange(event) {
    this.setData({ selectedOrgIndex: Number(event.detail.value) })
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  bindServiceChange(event) {
    this.setData({ selectedServiceIndex: Number(event.detail.value) })
  },

  updateField(event) {
    const field = event.currentTarget.dataset.field
    this.setData({
      [`form.${field}`]: event.detail.value
    })
  },

  submitForm() {
    const { form, orgTypes, selectedOrgIndex, serviceOptions, selectedServiceIndex } = this.data
    if (!form.orgName || !form.contactName || !form.phone) {
      wx.showToast({ title: '请填写机构、联系人和联系方式', icon: 'none' })
      return
    }

    const payload = {
      ...form,
      orgType: orgTypes[selectedOrgIndex].name,
      interestedService: serviceOptions[selectedServiceIndex]
    }

    wx.setClipboardData({
      data: JSON.stringify(payload, null, 2),
      success: () => {
        wx.showToast({ title: '需求已复制，可发送给我们', icon: 'none' })
      }
    })
  },

  copyContact(event) {
    const value = event.currentTarget.dataset.value
    const label = event.currentTarget.dataset.label
    wx.setClipboardData({
      data: value,
      success: () => wx.showToast({ title: `${label}已复制`, icon: 'none' })
    })
  },

  goServices() {
    wx.switchTab({ url: '/pages/services/services' })
  },

  goSelfTest() {
    wx.navigateTo({ url: '/pages/selftest/selftest' })
  }
})
