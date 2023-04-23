import Kdu from 'kdu'
import App from './App.kdu'

Kdu.config.productionTip = false

new Kdu({
  render: function (h) { return h(App) },
}).$mount('#app')
